"use client"
import Layout from "@/components/Layout/Layout";
import { ChakraProvider} from "@chakra-ui/react";
import theme from "@/chakra/theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ChakraProvider theme={theme}>
        <Layout>
          <div>{children}</div>
        </Layout>
      </ChakraProvider>
      <body>{children}</body>
    </html>
  );
}
