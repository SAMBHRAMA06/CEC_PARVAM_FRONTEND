import { Container } from "react-bootstrap";
import SiteNavbar from "./SiteNavbar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Layout() {
  const { pathname } = useLocation();

  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      {/* Navbar */}
      <SiteNavbar />

      {/* Page Content */}
      <main
        style={{
          minHeight: "80vh",
          backgroundColor: "#f8f9fa",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <Container>
          <Outlet />
        </Container>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
