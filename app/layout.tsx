import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amazon FBA Profit Calculator – Real Margins, Real Numbers",
  description: "Calculate true Amazon FBA profit margins factoring in all fees, storage costs, advertising spend, and returns. Built for serious FBA sellers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="05515d6f-c138-4277-ab72-60d7729143e4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
