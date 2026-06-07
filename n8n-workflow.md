# n8n workflow — Website lead → Housecall Pro

Turns each `/api/lead` POST into an HCP **API Lead** (lands in your Job Inbox →
*API Leads* channel), with an optional notification branch.

> Flow: **Webhook → Set (map fields) → HTTP Request: Create Customer → HTTP Request: Create Lead → IF/notify**
>
> Requirements: HCP **MAX plan** (API + webhooks are MAX-only). Generate an API
> key in HCP: *App Store → API → View Details → Generate API Key* (Admin only).
> Confirm the auth header format in HCP's **API Authentication Guide** and the
> exact request bodies at https://docs.housecallpro.com/ — field names below are
> the typical shape; verify before go-live.

---

## 1. Webhook (Trigger)
- **HTTP Method:** POST
- **Path:** `greenbelt-lead`  →  full URL becomes your `N8N_LEAD_WEBHOOK_URL`
- **Authentication:** Header Auth (optional but recommended)
  - Header name `X-Webhook-Token`, value = your `N8N_WEBHOOK_TOKEN`
  - (Matches the header the Next.js route sends.)
- **Respond:** "Immediately" (200) so the website gets a fast reply.

Incoming JSON from the route handler:
```json
{
  "firstName": "Diane",
  "lastName": "Mercer",
  "name": "Diane Mercer",
  "phone": "707-555-0142",
  "email": "diane@example.com",
  "service": "Electrical panel upgrade",
  "message": "Old fuse box, want 200A.",
  "source": "website-estimate-form",
  "submittedAt": "2026-06-05T17:22:10.000Z"
}
```

## 2. Set — "Map fields" (optional but tidy)
Normalize into the names the HTTP nodes will use:
- `first_name` ← `{{$json.firstName}}`
- `last_name`  ← `{{$json.lastName}}`
- `mobile_number` ← `{{$json.phone}}`
- `email` ← `{{$json.email}}`
- `lead_notes` ← `{{ $json.service }}{{ $json.message ? ' — ' + $json.message : '' }}`

## 3. HTTP Request — "Create Customer"
- **Method:** POST
- **URL:** `https://api.housecallpro.com/customers`
- **Authentication:** Generic Credential → Header Auth
  - Name: `Authorization`  Value: `Token YOUR_HCP_API_KEY`
    *(some accounts use `Bearer` — confirm in the Auth Guide)*
- **Headers:** `Content-Type: application/json`
- **Body (JSON):**
```json
{
  "first_name": "={{ $json.first_name }}",
  "last_name": "={{ $json.last_name }}",
  "email": "={{ $json.email }}",
  "mobile_number": "={{ $json.mobile_number }}",
  "lead_source": "Website",
  "notifications_enabled": true
}
```
- **Note:** capture `={{ $json.id }}` from the response — that's the `customer_id`.
- *Idempotency tip:* if you want to avoid duplicate customers, first GET
  `/customers?q={{phone}}` and only create when none is found.

## 4. HTTP Request — "Create Lead"
Attaches a lead to the customer you just created.
- **Method:** POST
- **URL:** `https://api.housecallpro.com/leads`
- **Auth/Headers:** same as the Create Customer node.
- **Body (JSON):**
```json
{
  "customer_id": "={{ $json.id }}",
  "lead_source": "Website",
  "notes": "={{ $node['Map fields'].json.lead_notes }}"
}
```
*(Reference the Create Customer node's output for `id`; reference the Set node
for the notes. Verify field names against the Create Lead doc.)*

## 5. IF / Notify (optional)
Add a branch off step 4 so the office hears about new leads instantly:
- **Email** node → to office@greenbeltelectrical.com with name/phone/service, **or**
- **Slack** node → post to `#leads`, **or**
- **Twilio/SMS** node → text the on-call number.

Run this branch in parallel; don't block the lead creation on the notification.

---

## Error handling
- Turn on **Settings → Error Workflow** for this workflow, or add an *Error
  Trigger* workflow that emails you if HCP returns non-2xx.
- HCP enforces **rate limits** — enable "Retry On Fail" (e.g. 3 tries, 2s) on
  both HTTP nodes and use exponential backoff for spikes.
- Keep the Webhook responding 200 immediately (step 1) so a slow HCP call never
  causes the website form to time out.

## Secrets checklist
| Where | Name | Example |
|------|------|---------|
| Next.js `.env.local` | `N8N_LEAD_WEBHOOK_URL` | `https://n8n.example.com/webhook/greenbelt-lead` |
| Next.js `.env.local` | `N8N_WEBHOOK_TOKEN` | long random string |
| n8n credential | HCP API key (Header Auth) | `Token sk_live_…` |
