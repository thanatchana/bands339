import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "วงดนตรีที่ชื่นชอบ",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        <header className="siteHeader">
        </header>
        {children}
      </body>
    </html>
  );
}