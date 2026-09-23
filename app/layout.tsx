import type { Metadata } from "next";
import "./tokens.css";

export const metadata: Metadata = {
  title: "Gabriel Maestre Costa",
  description:
    "Backend and full-stack developer working on production systems, APIs, integrations, and process automation, mostly in financial operations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
