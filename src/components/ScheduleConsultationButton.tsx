
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ScheduleConsultationButton({ className = "" }: { className?: string }) {
  return (
    <Button
      className={`bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 ${className}`}
      variant="default"
      size="lg"
      asChild
    >
      <Link to="/free-consultation">Schedule Consultation</Link>
    </Button>
  );
}
