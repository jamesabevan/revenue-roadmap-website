
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CalendlyIntegration from "../CalendlyIntegration";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100">{children}</main>
      <Footer />
      <CalendlyIntegration />
    </div>
  );
};

export default Layout;
