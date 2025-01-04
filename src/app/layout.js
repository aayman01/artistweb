import "./globals.css";
import { Onest } from "next/font/google";

const onest = Onest({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={onest.className}>{children}</body>
    </html>
  );
}
