
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nowsin Saiwara Juthi | Junior MERN Stack Developer",
  description:
    "Portfolio of Nowsin Saiwara Juthi, a Junior MERN Stack Developer based in Dhaka, Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
