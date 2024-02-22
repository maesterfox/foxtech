import "./globals.css";
import { Rubik } from "next/font/google";

export const dynamic = "force-dynamic";

const rubik = Rubik({ subsets: ["latin"], preload: true });

export const metadata = {
  title: "FoxTech Helpdesk",
  description: "My First Next.js Application",
  author: "David Fox",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
