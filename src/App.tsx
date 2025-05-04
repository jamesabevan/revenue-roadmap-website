
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RevenueStrategyPage from "./pages/services/RevenueStrategyPage";
import SalesProcessPage from "./pages/services/SalesProcessPage";
import SalesTeamPage from "./pages/services/SalesTeamPage";
import RevenueOperationsPage from "./pages/services/RevenueOperationsPage";
import FractionalCROPage from "./pages/services/FractionalCROPage";
import GoToMarketPage from "./pages/services/GoToMarketPage";
import About from "./pages/About";
import FreeConsultation from "./pages/FreeConsultation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/free-consultation" element={<FreeConsultation />} />
          <Route path="/services/revenue-strategy" element={<RevenueStrategyPage />} />
          <Route path="/services/sales-process" element={<SalesProcessPage />} />
          <Route path="/services/sales-team" element={<SalesTeamPage />} />
          <Route path="/services/revenue-operations" element={<RevenueOperationsPage />} />
          <Route path="/services/fractional-cro" element={<FractionalCROPage />} />
          <Route path="/services/go-to-market" element={<GoToMarketPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
