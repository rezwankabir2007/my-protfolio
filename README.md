This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Local authentication setup

Authentication uses Better Auth with a local SQLite database. Before starting the app:

1. Copy `.env.example` to `.env.local`.
2. Set `BETTER_AUTH_SECRET` to a random secret of at least 32 characters. For example, generate one with `node -e "console.log(require('node:crypto').randomBytes(32).toString('base64url'))"`. Keep the generated value private and do not commit `.env.local`.
3. Keep `BETTER_AUTH_URL` set to the URL where the app runs (the default is `http://localhost:3000`).
4. Initialize the authentication tables with `npx auth@latest migrate`.
5. Start the app with `npm run dev`.

The SQLite database is created as `database.sqlite` in the project root and is git-ignored. For deployments that do not provide persistent local storage, configure Better Auth with a managed database instead.

## Contact form email delivery

The contact form uses the Resend API. Configure `RESEND_API_KEY`, `RESEND_FROM_EMAIL` (a sender verified with Resend), and `RESEND_TO_EMAIL` (the inbox that should receive messages) in the deployment environment. Until all three values are set, the API reports that delivery is unavailable rather than showing a false success.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
