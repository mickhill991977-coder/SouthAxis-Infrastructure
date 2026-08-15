# SouthAxis Infrastructure

Production-ready Next.js App Router website for SouthAxis Infrastructure, a premium groundworks and infrastructure contractor.

## Stack

- Next.js App Router
- React
- Tailwind CSS
- Supabase
- Resend

## Pages

- Home
- Services
- Project Showcase
- Contact Us
- Blog

## Environment

Copy `.env.example` to `.env.local` and fill in:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

### Contact delivery notes

- `CONTACT_TO_EMAIL` receives enquiry notifications.
- `CONTACT_FROM_EMAIL` must be a Resend-verified sender on your production domain (for example `SouthAxis Website <enquiries@your-domain.co.uk>`).
- The contact form posts to `/api/contact`, validates the payload, silently ignores honeypot submissions, archives into `contact_messages` when Supabase is available, and sends a Resend notification email.
- Email delivery is the primary success path. A Supabase archive failure is logged server-side and does not block a successful email notification.

## Database

Run the migrations in `supabase/migrations/` against your Supabase project. They create:

- `contact_messages`
- `projects`
- `blog_posts`

Public read policies are enabled for published projects and blog posts. Contact messages are server-only via the service role key.

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Deploying to Vercel

Add the environment variables in Vercel Project Settings before deploying. The app avoids initializing Supabase and Resend clients at module scope, so builds do not require production secrets.
