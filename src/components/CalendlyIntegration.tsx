import { useEffect } from 'react';

const CalendlyIntegration = () => {
  useEffect(() => {
    // Load Calendly widget script if it's not already loaded
    if (!window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Initialize Calendly buttons after script loads
    const handleCalendlyLoad = () => {
      const buttons = document.querySelectorAll('.calendly-open-button');
      
      buttons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          // @ts-ignore
          window.Calendly?.initPopupWidget({
            url: 'https://calendly.com/james-thecroquet/30min'
          });
        });
      });
    };

    // If Calendly is already loaded, initialize immediately
    if (window.Calendly) {
      handleCalendlyLoad();
    } else {
      // Otherwise wait for script to load
      const checkCalendlyInterval = setInterval(() => {
        if (window.Calendly) {
          handleCalendlyLoad();
          clearInterval(checkCalendlyInterval);
        }
      }, 100);
      
      // Clear interval if it hasn't loaded after 10 seconds
      setTimeout(() => clearInterval(checkCalendlyInterval), 10000);
    }

    // Clean up event listeners
    return () => {
      const buttons = document.querySelectorAll('.calendly-open-button');
      buttons.forEach(button => {
        button.replaceWith(button.cloneNode(true));
      });
    };
  }, []);

  return null;
};

// Add Calendly type definition
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default CalendlyIntegration;
