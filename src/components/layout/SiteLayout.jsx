import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "../common/SEO";

const SiteLayout = () => {
  return (
    <HelmetProvider>
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
