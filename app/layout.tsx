import type { Metadata } from "next";
import PreferencesProvider from "../components/PreferencesProvider";
import "./tokens.css";

export const metadata: Metadata = {
  title: "Gabriel Maestre Costa",
  description:
    "Backend and full-stack developer working on production systems, APIs, integrations, and process automation, mostly in financial operations.",
};

const themeBoot = `(function(){try{var t=localStorage.getItem("portfolio-theme");if(t==="dark")document.documentElement.setAttribute("data-theme","dark");var l=localStorage.getItem("portfolio-locale");document.documentElement.lang=l==="pt-BR"?"pt-BR":"en";}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body>
        <PreferencesProvider>{children}</PreferencesProvider>
      </body>
    </html>
  );
}
