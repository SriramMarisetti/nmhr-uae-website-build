
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import BusinessSetup from "./pages/BusinessSetup";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white z-[9999]">
      <img
        src="/assets/logo.png"
        alt="NM HR Consultancy Loader"
        className="md:h-96 md:w-96 h-56 w-56 animate-pulse"
      />
    </div>
  );
}


  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/business-setup" element={<BusinessSetup />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/918688053307?text=Hi%2C%20I%27m%20looking%20for%20an%20opportunity%20with%20NM%20HR%20Consultancy."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.8 11.8 0 0012 0C5.37 0 .02 5.36.02 12a11.8 11.8 0 001.69 6.1L0 24l6.27-1.66A11.92 11.92 0 0012 24c6.63 0 12-5.36 12-12a11.8 11.8 0 00-3.48-8.52zM12 22a9.85 9.85 0 01-5.06-1.36l-.36-.22-3.72.99 1-3.63-.24-.38A9.9 9.9 0 1122 12c0 5.5-4.49 10-10 10zm5.52-7.48c-.3-.15-1.77-.88-2.05-.98s-.47-.15-.67.15-.77.98-.94 1.18-.35.22-.65.07a8.14 8.14 0 01-2.4-1.47 9.13 9.13 0 01-1.69-2.1c-.17-.3 0-.46.13-.6.14-.14.3-.37.45-.56s.2-.3.3-.5.05-.37-.03-.53-.67-1.6-.92-2.2c-.24-.56-.5-.48-.68-.49H7c-.17 0-.44.06-.66.3a2.75 2.75 0 00-.88 2.06 4.81 4.81 0 001 2.3A11.2 11.2 0 0012 17.56c1.54 0 3.05-.37 4.3-1.06.64-.36 1.27-.84 1.3-1.2s.15-.88-.3-1.2z" />
                </svg>
              </a>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
