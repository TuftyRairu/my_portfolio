import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBarComponent from "@/components/Static/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Rhyle's Portfolio",
  description: "My Own Detailed Experiences in the line of an Information Technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-[#E5E7EB] antialiased`} 
      >
      
        <header role="banner" className="pb-8 pt-4 md:px-8 lg:px-9">
          <NavBarComponent />
        </header>

        <main role="main">
          {children}
        </main>

        {/* <footer role="footer" className="fixed bottom-0 left-0 w-full py-3 items-center text-center text-gray-500 bg-[#111928]">
          © {new Date().getFullYear()} Rhyle&apos;s Portfolio. All rights reserved.
        </footer> */}
      
      </body>
    
    </html>
  );
}
