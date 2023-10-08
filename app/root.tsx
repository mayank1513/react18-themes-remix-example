import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ThemeSwitcher } from "react18-themes";
import ColorSchemePreference from "./color-scheme-preference";
import ThemeSelector from "./theme-selector";
import DarkThemeSelector from "./dark-theme-selector";
import LightThemeSelector from "./light-theme-selector";
// import PageNavigator from "./page-navigator";
import styles from "./page.module.css";
import "./globals.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeSwitcher />
        <div className="container">
          <main className={`${styles.main}`}>
            <div className={styles.description}>
              <a
                href="https://github.com/mayank1513/react18-themes"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.logo}
              >
                <p>
                  <code className={styles.code}>react18-themes</code>
                </p>
              </a>
              <Outlet />
              <div>
                <a
                  href="https://mayank-chaudhari.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  By Mayank
                </a>
              </div>
            </div>

            <div className={styles.center}>
              <div>
                <h1>
                  Build with <code>react18-themes</code>
                </h1>
                <p>Unleash the power of React Server Components!</p>
              </div>
            </div>
            <div className={[styles.center, styles.prefs].join(" ")}>
              <div>
                <ColorSchemePreference />
                <ThemeSelector />
              </div>
              <div>
                <DarkThemeSelector />
                <LightThemeSelector />
              </div>
            </div>
            <div className={styles.cards}>
              {/* <PageNavigator /> */}
              <a
                href="https://github.com/mayank1513/react18-themes"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>
                  More Examples <span>-&gt;</span>
                </h2>
                <p>Explore more examples on official GitHub Repo.</p>
              </a>
            </div>
          </main>
        </div>
        <footer>
          with 💖 by{" "}
          <a
            href="https://mayank-chaudhari.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mayank Chaudhari
          </a>
        </footer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
