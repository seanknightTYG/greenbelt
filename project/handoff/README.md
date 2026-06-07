# Greenbelt Electrical — lead form + HCP integration (handoff)

Drop-in code for the Next.js (App Router) + Tailwind build.

```
handoff/
├─ app/api/lead/route.ts     # POST endpoint → validates → forwards to n8n
├─ components/LeadForm.tsx    # the estimate form (client component, ADA)
├─ components/ChatBubble.tsx  # HCP chat via next/script (afterInteractive)
└─ n8n-workflow.md            # Webhook → Create Customer → Create Lead → notify
```

## 1. Install the files
Copy into your app, keeping the structure:
- `app/api/lead/route.ts`
- `components/LeadForm.tsx`
- `components/ChatBubble.tsx`

Use them:
```tsx
// app/page.tsx (or wherever the contact section lives)
import LeadForm from '@/components/LeadForm';
export default function Page() { return <LeadForm />; }

// app/layout.tsx — chat bubble on every page
import ChatBubble from '@/components/ChatBubble';
// ...render {children} then <ChatBubble /> just before </body>
```

## 2. Environment variables (`.env.local`, never commit)
```bash
N8N_LEAD_WEBHOOK_URL=https://<your-n8n-host>/webhook/greenbelt-lead
N8N_WEBHOOK_TOKEN=<long-random-shared-secret>   # optional, verified in n8n
```
The webhook URL is read **server-side only** in the route handler, so it is
never exposed to the browser. The form posts to the same-origin `/api/lead`.

## 3. Tailwind brand tokens
Add to `tailwind.config.{ts,js}` so the form's class names resolve. Colors are
straight from the brand guidelines; the two custom sizes are used by the form.

```ts
export default {
  theme: {
    extend: {
      colors: {
        forest:    '#1E4D2B',  // headers / secondary buttons
        forestDeep:'#163920',
        green:     '#5CB63B',  // accents, checks
        yellow:    '#F2C829',  // primary CTA (dark text only)
        charcoal:  '#1A1A1A',  // body text
        conduit:   '#3C3C3C',  // secondary text
        surface:   '#FAFAF8',  // page background
        panel:     '#111111',
        line:      '#E4E4DF',
      },
      spacing: { '4.5': '1.125rem', '18': '4.5rem' },
    },
  },
};
```

## 4. How it flows
```
LeadForm  ──POST /api/lead──►  route.ts  ──POST──►  n8n Webhook
(browser)   same-origin JSON   (validates,         │
                               adds shared token)   ├─ Create Customer (HCP API)
                                                    ├─ Create Lead     (HCP API)
                                                    └─ Notify (email/Slack) — optional
```
Leads land in HCP **Job Inbox → API Leads**. See `n8n-workflow.md` for the
node-by-node build, request bodies, and the secrets checklist.

## 5. Accessibility notes (already wired in `LeadForm.tsx`)
- Explicit `<label>` per field; placeholders are hints only, never the label.
- `aria-required` / `aria-invalid` / `aria-describedby` link each error to its
  field; errors use `role="alert"`, success uses `role="status"`.
- Visible focus rings (`focus-visible:outline` / `focus:ring`), 54px controls,
  18px text — meeting the brand's "designed for older eyes" requirements.
- A hidden honeypot field (`company`) plus server-side validation blocks bots.

## 6. Before go-live
- HCP API + webhooks require the **MAX plan**. Generate the API key in HCP
  (Admin → App Store → API → Generate API Key) and store it as an n8n credential.
- Confirm the HCP auth header (`Token` vs `Bearer`) and the exact Create
  Customer / Create Lead request bodies at https://docs.housecallpro.com/.
- Add basic rate-limiting / abuse protection on `/api/lead` if traffic warrants
  (e.g. Vercel Edge Middleware or an upstash ratelimit).
