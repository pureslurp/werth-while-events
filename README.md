# Werth While Events

Website for Danielle and Jacob Werth. One page, plus a short privacy note. Weddings are the focus. Other events are listed beside that offer. An inquiry form emails werthwhileevents@gmail.com.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). That page links to three looks:

- [Wordmark](http://localhost:3000/looks/wordmark), the current modern design
- [Invitation](http://localhost:3000/looks/invitation)
- [The day](http://localhost:3000/looks/the-day)

## Inquiry form

The form posts to `app/api/inquiry/route.ts`, which sends the note through [Web3Forms](https://web3forms.com). The access key stays on the server.

1. Go to [web3forms.com](https://web3forms.com) and enter `werthwhileevents@gmail.com`.
2. Confirm the message that arrives in that inbox.
3. Copy `.env.example` to `.env.local`.
4. Set `WEB3FORMS_ACCESS_KEY` to the key Web3Forms gives you.
5. Restart `npm run dev`.

Until that key is set, the form tells the visitor to email `werthwhileevents@gmail.com` directly.

On Vercel, add the same `WEB3FORMS_ACCESS_KEY` under Project Settings → Environment Variables, then redeploy.

Web3Forms works before a custom domain exists. After a domain is verified, the form can move to [Resend](https://resend.com) if you want mail to come from that domain. That is a later change, not required to launch.

## Photos

Portrait and event frames ship with a “Photo coming” label. To use real pictures:

1. Add files in `public/photos/`, for example `danielle.jpg`, `jacob.jpg`, and `event.jpg`.
2. In `lib/content.ts`, set each `src` to the public path, such as `"/photos/danielle.jpg"`.
3. Update `alt` if the picture shows something more specific than the person’s name.

Do not add a photographer credit until the photos on the page are actually theirs.

## Deploy on Vercel

GitHub is the source. Vercel hosts the site. GitHub Pages can publish a static brochure, and it cannot run the inquiry route.

1. Push this repo to GitHub.
2. In Vercel, import the repository.
3. Framework preset: Next.js. No extra build settings.
4. Add `WEB3FORMS_ACCESS_KEY`.
5. Deploy. Share the `*.vercel.app` URL.

The Vercel account has to be connected by someone who can log in. This repo does not store that login.

## Domain

When the domain is purchased (check `werthwhileevents.com`), add it in the Vercel project under Settings → Domains and follow the DNS records Vercel shows. HTTPS is included.
