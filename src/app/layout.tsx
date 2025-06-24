import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBarComponent from "@/components/Static/Navbar";
import FooterSection from "@/components/Static/Footer";

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
      
        <div className="min-h-screen flex flex-col">
          <header role="banner" className="pb-8 pt-4 px-3 md:px-8 lg:px-9">
            <NavBarComponent />
          </header>

          <main role="main" className="flex-grow">
            {children}
          </main>

          <footer role="contentinfo">
            <FooterSection />
          </footer>
        </div>
      
      </body>
    
    </html>
  );
}
