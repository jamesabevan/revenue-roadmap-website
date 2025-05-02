
import { useEffect } from 'react';

const CALENDLY_URL = 'https://calendly.com/james-thecroquet';

const CalendlyIntegration = () => {
  useEffect(() => {
    const loadCalendlyScript = () => {
      if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    const handleButtonClick = (e: Event) => {
      e.preventDefault();
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url: CALENDLY_URL });
        return false;
      }
    };

    loadCalendlyScript();

    // Add event listener after a short delay to ensure DOM elements are ready
    setTimeout(() => {
      const buttons = document.querySelectorAll('.calendly-open-button');
      buttons.forEach((button) => {
        button.addEventListener('click', handleButtonClick);
      });
    }, 500);

    return () => {
      const buttons = document.querySelectorAll('.calendly-open-button');
      buttons.forEach((button) => {
        button.removeEventListener('click', handleButtonClick);
      });
    };
  }, []);

  return null;
};

// TypeScript global for window.Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default CalendlyIntegration;
