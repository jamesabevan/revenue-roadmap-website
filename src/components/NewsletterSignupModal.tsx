
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Mail } from "lucide-react";

interface NewsletterSignupModalProps {
  trigger?: React.ReactNode;
  className?: string;
}

const NewsletterSignupModal: React.FC<NewsletterSignupModalProps> = ({
  trigger,
  className,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button 
            variant="outline" 
            className={className}
          >
            <Mail className="mr-2 h-4 w-4" /> Join Newsletter
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Subscribe to our Newsletter</DialogTitle>
          <DialogDescription>
            Get the latest updates, news and special offers sent directly to your inbox.
          </DialogDescription>
        </DialogHeader>
        <NewsletterSignup 
          onSuccess={() => {
            setTimeout(() => setOpen(false), 2000);
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterSignupModal;
