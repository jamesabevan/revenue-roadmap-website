
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { NewsletterSignupButton } from "@/components/NewsletterSignupButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const services = [
    { name: "Revenue Strategy", href: "/services/revenue-strategy" },
    { name: "Sales Process", href: "/services/sales-process" },
    { name: "Sales Team", href: "/services/sales-team" },
    { name: "Revenue Operations", href: "/services/revenue-operations" },
    { name: "Fractional CRO", href: "/services/fractional-cro" },
    { name: "Go-to-Market", href: "/services/go-to-market" }
  ];

  const handleNavigation = (path: string) => {
    const isSection = path.startsWith("#");
    if (isSection && !window.location.pathname.includes(path)) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(path.substring(1));
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (isSection) {
      const element = document.getElementById(path.substring(1));
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  const navItems = [{
    name: "Home",
    href: "/"
  }, {
    name: "Services",
    href: "#services",
    hasDropdown: true
  }, {
    name: "About Us",
    href: "/about"
  }, {
    name: "Projects",
    href: "#projects"
  }, {
    name: "Contact",
    href: "#contact"
  }];

  return (
    <nav className="py-4 border-b-[0.5px] border-gray-100 bg-transparent backdrop-blur-md sticky top-0 z-30">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img alt="CROquet Logo" src="/lovable-uploads/f43c7108-e965-4ce0-86a3-594bd4da207d.png" className="h-32 -my-6 object-contain" />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map(item => 
            item.hasDropdown ? (
              <NavigationMenu key={item.name}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-800 hover:text-purple-600 transition-colors font-medium bg-transparent">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 bg-white">
                        {services.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="text-sm font-medium leading-none text-gray-800">{service.name}</div>
                          </a>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ) : (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-800 hover:text-purple-600 transition-colors font-medium"
              >
                {item.name}
              </button>
            )
          )}
        </div>
        
        <div className="hidden md:flex gap-4">
          <NewsletterSignupButton 
            variant="outline"
            className="border-purple-500 text-purple-700 hover:bg-purple-50"
            size="default"
          />
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 calendly-open-button">
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
                {navItems.map(item => 
                  item.hasDropdown ? (
                    <div key={item.name} className="space-y-2">
                      <div className="font-medium text-gray-800">{item.name}</div>
                      <div className="pl-4 space-y-2">
                        {services.map(service => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="block text-gray-800 hover:text-purple-600 py-1 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-800 hover:text-purple-600 py-2 transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  )
                )}
                <div className="flex flex-col gap-3">
                  <Button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 calendly-open-button">
                    Schedule Consultation
                  </Button>
                  <NewsletterSignupButton 
                    variant="outline"
                    className="border-purple-500 text-purple-700 hover:bg-purple-50"
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
