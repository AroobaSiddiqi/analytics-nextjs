"use client";

import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./components/providers/ThemeProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400","500"],
});

const queryClient = new QueryClient();
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          roboto.variable,
          inter.className
        )}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          ><QueryClientProvider client={queryClient}>
          <Header />
          <div className="p-4 min-h-screen flex flex-col justify-between">
            {children}
          </div>
          <Footer />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
