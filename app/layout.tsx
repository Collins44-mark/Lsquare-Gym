import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = { title: "L Square Fitness Gym — Dar es Salaam", description: "Modern gym, professional trainers, pool, personal training." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;1,9..40,400&family=Work+Sans:wght@400;600;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{fontFamily:'"DM Sans", ui-sans-serif, system-ui, sans-serif', color:'#fff', background:'#090A0D'}}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
