
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Expertise", href: "#expertise" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="py-4 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-30">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-semibold text-navy-800">
          RevenuePro<span className="text-revenue-600">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-navy-700 hover:text-primary transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <div className="hidden md:block">
          <Button>Schedule Consultation</Button>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>RevenuePro<span className="text-revenue-600">.</span></SheetTitle>
                <SheetDescription>
                  Expert Revenue & Sales Strategy Services
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-navy-700 hover:text-primary py-2 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="mt-4">Schedule Consultation</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
