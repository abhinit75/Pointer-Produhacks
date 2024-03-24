export const documents = [
  {
    title: "index.ts",
    snippet: `import styles from "/styles/Shared.module.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";

const ClerkFeatures = () => (
  <Link href="/user" className={styles.cardContent}>
    <img alt="Explore Clerk components" src="/icons/layout.svg" />
    <div>
      <h3>Explore features provided by Clerk</h3>
      <p>
        Interact with the user button, user profile, and more to preview what
        your users will see
      </p>
    </div>
    <div className={styles.arrow}>
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);

const SSRDemoLink = () => (
  <Link href="/ssr-demo" className={styles.cardContent}>
    <img alt="SSR demo" src="/icons/sparkles.svg" />
    <div>
      <h3>Visit the SSR demo page</h3>
      <p>
        See how Clerk hydrates the auth state during SSR and CSR, enabling
        server-side generation even for authenticated pages
      </p>
    </div>
    <div className={styles.arrow}>
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);

const SignupLink = () => (
  <Link href="/sign-up" className={styles.cardContent}>
    <img alt="Sign up" src="/icons/user-plus.svg" />
    <div>
      <h3>Sign up for an account</h3>
      <p>
        Sign up and sign in to explore all the features provided by Clerk
        out-of-the-box
      </p>
    </div>
    <div className={styles.arrow}>
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);

const apiSample = \`
import { getAuth } from "@clerk/nextjs/server";

export default function handler(req, res) {
  const { sessionId, userId } = getAuth(req);

  if (!sessionId) {
    return res.status(401).json({ id: null });
  }
  return res.status(200).json({ id: userId });
};
\`.trim();

// Main component using <SignedIn> and <SignedOut>.
//
// The SignedIn and SignedOut components are used to control rendering
// depending on whether or not a visitor is signed in.
//
// https://clerk.dev/docs/component-reference/signed-in
const Main = () => (
  <main className={styles.main}>
    <h1 className={styles.title}>Welcome to your new app</h1>
    <SignedIn>
      <p className={styles.description}>You have successfully signed in</p>
    </SignedIn>
    <SignedOut>
      <p className={styles.description}>
        Sign up for an account to get started
      </p>
    </SignedOut>

    <div className={styles.cards}>
      <SignedIn>
        <div className={styles.card}>
          <SSRDemoLink />
        </div>
        <div className={styles.card}>
          <ClerkFeatures />
        </div>
      </SignedIn>
      <SignedOut>
        <div className={styles.card}>
          <SignupLink />
        </div>
      </SignedOut>

      <div className={styles.card}>
        <Link
          href="https://dashboard.clerk.dev/last-active?utm_source=github&utm_medium=starter_repos&utm_campaign=nextjs_starter"
          target="_blank"
          rel="noopener"
          className={styles.cardContent}
        >
          <img src="/icons/settings.svg" />
          <div>
            <h3>Configure settings for your app</h3>
            <p>
              Visit Clerk to manage instances and configure settings for user
              management, theme, and more
            </p>
          </div>
          <div className={styles.arrow}>
            <img src="/icons/arrow-right.svg" />
          </div>
        </Link>
      </div>
    </div>

    <SignedIn>
      <APIRequest />
    </SignedIn>

    <div className={styles.links}>
      <Link
        href="https://clerk.dev/docs?utm_source=github&utm_medium=starter_repos&utm_campaign=nextjs_starter"
        target="_blank"
        rel="noopener"
        className={styles.link}
      >
        <span className={styles.linkText}>Read Clerk documentation</span>
      </Link>
      <Link
        href="https://nextjs.org/docs"
        target="_blank"
        rel="noopener"
        className={styles.link}
      >
        <span className={styles.linkText}>Read NextJS documentation</span>
      </Link>
    </div>
  </main>
);

const APIRequest = () => {
  React.useEffect(() => {
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  });
  const [response, setResponse] = React.useState(
    "// Click above to run the request"
  );
  const makeRequest = async () => {
    setResponse("// Loading...");

    try {
      const res = await fetch("/api/getAuthenticatedUserId");
      const body = await res.json();
      setResponse(JSON.stringify(body, null, "  "));
    } catch (e) {
      setResponse(
        "// There was an error with the request. Please contact support@clerk.dev"
      );
    }
  };
  return (
    <div className={styles.backend}>
      <h2>API request example</h2>
      <div className={styles.card}>
        <button
          formTarget="_blank"
          rel="noopener"
          className={styles.cardContent}
          onClick={() => makeRequest()}
        >
          <img src="/icons/server.svg" />
          <div>
            <h3>fetch('/api/getAuthenticatedUserId')</h3>
            <p>
              Retrieve the user ID of the signed in user, or null if there is no
              user
            </p>
          </div>
          <div className={styles.arrow}>
            <img src="/icons/download.svg" />
          </div>
        </button>
      </div>
      <h4>
        Response
        <em>
          <SignedIn>
            You are signed in, so the request will return your user ID
          </SignedIn>
          <SignedOut>
            You are signed out, so the request will return null
          </SignedOut>
        </em>
      </h4>
      <pre>
        <code className="language-js">{response}</code>
      </pre>
      <h4>pages/api/getAuthenticatedUserId.js</h4>
      <pre>
        <code className="language-js">{apiSample}</code>
      </pre>
    </div>
  );
};

// Footer component
const Footer = () => (
  <footer className={styles.footer}>
    Powered by{" "}
    <a
      href="https://clerk.dev?utm_source=github&utm_medium=starter_repos&utm_campaign=nextjs_starter"
      target="_blank"
      rel="noopener"
    >
      <img src="/clerk.svg" alt="Clerk" className={styles.logo} />
    </a>
    +
    <a href="https://nextjs.org/" target="_blank" rel="noopener">
      <img src="/nextjs.svg" alt="Next.js" className={styles.logo} />
    </a>
  </footer>
);

const Home = () => (
  <div className={styles.container}>
    <Main />
    <Footer />
  </div>
);

export default Home;`,
    url: "https://github.com/RyanHaraki/Clerk-Nextjs-Typescript-Starter/blob/main/src/pages/index.tsx",
  },
  {
    title: "README.md",
    snippet: `Clerk Next.js Starter This example shows how to use Clerk with Next.js. The example Next.js application features adding sign up, sign in, profile management, and an authenticated API route.
chat on Discord documentation twitter

Clerk is Hiring!

Would you like to work on Open Source software and help maintain this repository? Apply today!

Demo
A hosted demo of this example is available at clerk-nextjs-example.vercel.app

Deploy your own
Deploy the example directly from GitHub using Vercel:

Deploy with Vercel

Running the starter
Execute create-next-app with npm or Yarn to bootstrap the example:

npx create-next-app --example https://github.com/clerkinc/clerk-nextjs-starter
# or
yarn create next-app --example https://github.com/clerkinc/clerk-nextjs-starter
To run the example locally you need to:

Sign up for a Clerk account at https://clerk.dev.
Go to Clerk's dashboard and create an application.
Set the required Clerk environment variables as shown in the example env file.
npm install the required dependencies.
npm run dev to launch the development server.
Learn more
To learn more about Clerk and Next.js, check out the following resources:

Quickstart: Get started with Next.js and Clerk
Clerk Documentation
Next.js Documentation
Contact
If you need support or have anything you would like to ask, please reach out in our Discord channel. We'd love to chat!

`,
    url: "https://github.com/RyanHaraki/Clerk-Nextjs-Typescript-Starter",
  },
  {
    title: "Pointer Internal Documentation",
    snippet: `# Pointer Documentation

## Overview

Pointer is a powerful tool designed to help you find information within your company from connected accounts like GitHub, Google Drive, Notion and more. It allows you to ask questions to an AI to search for and retrieve information across your organization. You can also view your past searches, connect your corporate accounts, share responses, and manage your user session. Pointer will point you in the right direction for any questions you have about your company’s documentation.

## Features

### AI Chat

Interact with an AI assistant to get curated information across your connected accounts. Simply type your query into the chat box and the AI will retrieve the relevant information in a conversational format while providing the sources it is drawing from. This allows you to quickly find answers and relevant resources that you can double check.

### Connected Accounts

The application can connect to your GitHub, Google Drive, Notion, Slack and Jira accounts to search for information. To connect an account, navigate to the ‘settings’ page on the sidebar and follow the prompts to authenticate and connect your account.

### Past Searches

Need to reference the answer to a question you asked again? You can view your past searches in the application by navigating to the ‘History’ page on the sidebar. This feature allows you to quickly revisit previous queries and their results.

### Share Responses

Found something useful and want to share it with your team? You can easily share responses generated by the AI assistant. Simply click on the ‘Share’ button next to the response and choose the method of sharing.

### User Session Management

The application supports user login and logout. To login, click on the ‘Account’ button on the bottom left corner of the application and enter your credentials. To logout, click on the ‘Logout’ button in the same location.

## Getting Started

1. **Login**: Start by logging into the application using your corporate credentials.
2. **Connect Accounts**: Navigate to the settings page and connect your GitHub, Google Drive, and Notion accounts.
3. **Start Searching**: Use the chat interface to start interacting with the AI and find the information you need.
4. **Review Past Searches**: Navigate to the ‘Past Searches’ section to review your search history.
5. **Share Responses**: Click the ‘Share’ button next to a response to share it with your team.

## Conclusion

The AI Chat Application is a powerful tool for finding and sharing information within your company. By leveraging AI technology and integrating with popular platforms like GitHub, Google Drive, and Notion, it streamlines the process of information retrieval and collaboration. Enjoy exploring its features and improving your productivity!

Please note that this is a high-level overview of the application. For detailed instructions and troubleshooting, refer to the specific sections of the documentation or contact support.`,
    url: "https://www.notion.so/ryanharaki/Pointer-Documentation-f3a4b7e2609642129ba602533e006352?pvs=4",
  },
];
