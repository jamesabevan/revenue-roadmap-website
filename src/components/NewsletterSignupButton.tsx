
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface NewsletterSignupButtonProps {
  className?: string;
  variant?: "default" | "outline" | "destructive" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  onClick?: () => void;
}

export function NewsletterSignupButton({ 
  className = "", 
  variant = "default",
  size = "lg",
  onClick
}: NewsletterSignupButtonProps) {
  // Default onClick handler that scrolls to the contact section
  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      onClick={onClick || handleClick}
    >
      <Mail className="mr-2 h-4 w-4" /> Join Newsletter
    </Button>
  );
}
