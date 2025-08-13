import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tom Eru - Portfolio & Blog",
  description: "Software developer's portfolio and blog featuring web development tutorials, programming insights, and tech thoughts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.variable}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
