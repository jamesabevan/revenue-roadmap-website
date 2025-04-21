import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    name: "Home",
    href: "/"
  }, {
    name: "Services",
    href: "#services"
  }, {
    name: "About Us",
    href: "#about"
  }, {
    name: "Testimonials",
    href: "#testimonials"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <nav className="py-4 border-b-[0.5px] border-gray-100 bg-transparent backdrop-blur-md sticky top-0 z-30">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img alt="CROquet Logo" src="/lovable-uploads/f43c7108-e965-4ce0-86a3-594bd4da207d.png" className="h-20" />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map(item => <a key={item.name} href={item.href} className="text-gray-800 hover:text-purple-600 transition-colors font-medium">
              {item.name}
            </a>)}
        </div>
        
        <div className="hidden md:block">
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            Schedule Consultation
          </Button>
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
            <SheetContent className="bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
              <SheetHeader>
                <SheetTitle>
                  <img src="/lovable-uploads/79b5535c-4330-4e2f-80fa-219aa0635eb0.png" alt="CROquet Logo" className="h-8 mb-2" />
                </SheetTitle>
                <SheetDescription>
                  Revenue & Sales Strategy Experts
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map(item => <a key={item.name} href={item.href} className="text-gray-800 hover:text-purple-600 py-2 transition-colors font-medium" onClick={() => setIsOpen(false)}>
                    {item.name}
                  </a>)}
                <Button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Schedule Consultation
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>;
};
export default Navbar;