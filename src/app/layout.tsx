import { ConfigProvider } from "antd";
import { antdTheme } from "@/utils/antd.config";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider theme={{ ...antdTheme }}>{children}</ConfigProvider>
      </body>
    </html>
  );
}
