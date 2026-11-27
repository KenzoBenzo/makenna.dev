import { Archivo, JetBrains_Mono } from "next/font/google";
import { Footer } from "./footer";
import { Masthead } from "./masthead";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jet-brains-mono",
});

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className={`${archivo.variable} ${jetBrainsMono.variable} font-sans min-h-dvh flex flex-col overflow-x-clip`}>
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:text-paper focus:px-3 focus:py-2"
    >
      Skip to content
    </a>
    <Masthead />
    <main id="main" className="flex-1 pb-24 w-full max-w-[1360px] mx-auto px-4 sm:px-10">
      {children}
    </main>
    <Footer />
  </div>
);
