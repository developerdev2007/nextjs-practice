import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProviderWrapper from "./components/ThemeProvider";
import SessionWraper from "./SessionWraper";
import SignUpModal from "./components/AllModals/SignUpModal";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nextjs learn",
  description: "developerdev2007",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionWraper>
          <ThemeProviderWrapper>
            <SignUpModal />
            {children}
          </ThemeProviderWrapper>
        </SessionWraper>
      </body>
    </html>
  );
}
