import type { Metadata } from "next";
import { Source_Sans_3, Manjari } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/shared/header";
import { AuthProvider } from "@/providers/auth";
import { cn } from "@/lib/utils";

import "./globals.css";

const source = Source_Sans_3({ subsets: ["latin"], variable: "--body-font" });
const manjari = Manjari({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
  variable: "--display-font",
});

export const metadata: Metadata = {
  title: "BitCENT",
  description: "Plataforma financeira que simplifica sua vida!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      suppressHydrationWarning
      className={`${source.variable} ${manjari.variable}`}
    >
      <body className={cn(source.variable)}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
