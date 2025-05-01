
import { Button } from "@/components/ui/button";

export function ScheduleConsultationButton({ className = "" }: { className?: string }) {
  return (
    <Button
      className={`calendly-open-button bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 ${className}`}
      variant="default"
      size="lg"
    >
      Schedule Consultation
    </Button>
  );
}
