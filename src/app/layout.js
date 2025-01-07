import RouteChangeWrapper from "@/components/RouteChangeWrapper";
import "./globals.css";
import { Onest } from "next/font/google";
import { Suspense } from "react";
import LoadingScreen from "@/components/LoadingScreen";

const onest = Onest({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={onest.className}>
        <Suspense fallback={<LoadingScreen />}>
            <RouteChangeWrapper>
              {children}
            </RouteChangeWrapper>
        </Suspense>
      </body>
    </html>
  );
} 

