import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "../common/SEO";
import ScrollToTop from "../common/ScrollToTop";

const SiteLayout = () => {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <SEO />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </HelmetProvider>
  );
};

export default SiteLayout;
