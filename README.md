Getting Started
1. Install Dependencies
Before running the project, make sure you have installed the required Node modules:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. Configure Environment Variables
Create a .env.local file in the root directory and add required API keys and environment variables there of Clerk Api, Google Place Api and Stripe Api keys.
For example:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""

GOOGLE_API_KEY = ""
NEXT_PUBLIC_GOOGLE_API_KEY = ""

NEXT_PUBLIC_STRIPE_PUBLISHER_KEY = ""
STRIPE_SECRET_KEY = ""

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
```
⚠️ Refer to the documentation or team notes for the exact list of required environment variables.

3. Start the Development Server
Once the dependencies are installed and environment variables are configured, you can run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 in your browser to view the application.

You can start editing the project by modifying app/page.tsx. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Geist, a new font family by Vercel.

Learn More
To learn more about Next.js, check out:

Next.js Documentation

Learn Next.js

You can also view the Next.js GitHub repository to contribute or report issues.
