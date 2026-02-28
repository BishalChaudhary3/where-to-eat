import "./globals.css";
import FloatingBackground from "@/components/ui/FloatingBackground";

export const metadata = {
  title: "WhereToEat",
  description: "Find the best dish near you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-gray-50 overflow-x-hidden">

        {/* Global Background */}
        <FloatingBackground />

        {/* Main Content */}
        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}