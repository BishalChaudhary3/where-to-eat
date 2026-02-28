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
        
        {/* Soft Overlay */}
        <div className="fixed inset-0 bg-white/70 backdrop-blur-[1px] -z-5 pointer-events-none" />


        {/* Main Content */}
        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}