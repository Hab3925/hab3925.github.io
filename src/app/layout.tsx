import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/navbar"; // Importing Navbar

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
  title: "Abel G. Horneland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar /> {/* Adding Navbar to the layout */}
        <main className="flex-grow">{children}</main> {/* Main content area */}
        <footer style={{backgroundColor: '#131313'}} className="flex gap-6 flex-wrap items-center justify-center p-4 text-white">
          <a href="https://github.com/Hab3925" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
              <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387 0.6 0.113 0.82-0.26 0.82-0.577 0-0.285-0.01-1.04-0.015-2.04-3.338 0.727-4.042-1.61-4.042-1.61-0.546-1.387-1.333-1.757-1.333-1.757-1.09-0.745 0.083-0.73 0.083-0.73 1.205 0.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495 0.998 0.108-0.776 0.42-1.305 0.762-1.605-2.665-0.305-5.466-1.332-5.466-5.93 0-1.31 0.467-2.38 1.235-3.22-0.123-0.303-0.535-1.523 0.117-3.176 0 0 1.005-0.322 3.3 1.23 0.957-0.266 1.98-0.398 3-0.403 1.02 0.005 2.043 0.137 3 0.403 2.292-1.552 3.297-1.23 3.297-1.23 0.653 1.653 0.242 2.873 0.12 3.176 0.77 0.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.473 5.922 0.43 0.372 0.823 1.102 0.823 2.222 0 1.606-0.014 2.898-0.014 3.293 0 0.32 0.216 0.694 0.825 0.576 4.765-1.59 8.2-6.087 8.2-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="ml-2">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/abel-horneland-3999bb236/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.432c-0.966 0-1.5-0.676-1.5-1.568 0-0.914 0.553-1.568 1.535-1.568s1.5 0.654 1.5 1.568c0 0.892-0.533 1.568-1.535 1.568zm13.5 11.432h-3v-5.569c0-1.328-0.027-3.036-1.847-3.036-1.847 0-2.129 1.445-2.129 2.941v5.664h-3v-10h2.881v1.367h0.041c0.401-0.758 1.38-1.554 2.843-1.554 3.041 0 3.607 2.005 3.607 4.615v5.572z" />
            </svg>
            <span className="ml-2">LinkedIn</span>
          </a>
          <a href="mailto:abel.horneland@propulse.no" className="flex items-center hover:text-gray-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 mr-2">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span className="ml-2">Contact</span>
          </a>
        </footer>
      </body>
    </html>
  );
}
