import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { TopNavigation } from "@/components/layout/TopNavigation";
import { NavigationProvider } from "@/components/context/NavigationContext";
import { Box } from "@chakra-ui/react";

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
          <NavigationProvider>
            <Box minH="100vh" w="100vw" bg={{ base: "white", _dark: "gray.900" }} position="relative">
              <TopNavigation />
              <Box 
                pt="80px" // Space for fixed top navigation
                px={{ base: 4, md: 8 }}
                pb={8}
                minH="100vh"
                w="100vw"
                bg={{ base: "white", _dark: "gray.900" }}
              >
                <Box maxW="7xl" mx="auto">
                  {children}
                </Box>
              </Box>
            </Box>
          </NavigationProvider>
        </Provider>
      </body>
    </html>
  );
}
