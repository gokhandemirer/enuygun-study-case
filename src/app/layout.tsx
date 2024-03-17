import type { Metadata } from "next";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Employee of the Month",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
