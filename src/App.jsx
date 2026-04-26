import AdminPage from "./components/AdminPage.jsx";
import { PortfolioContentProvider } from "./context/PortfolioContent.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Experience from "./sections/Experience.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollBackground from "./components/ScrollBackground.jsx";

export default function App() {
  const isAdminPage =
    typeof window !== "undefined" &&
    window.location.pathname.replace(/\/$/, "") === "/admin";

  return (
    <PortfolioContentProvider>
      <div className="min-h-screen overflow-x-hidden bg-ink text-slate-100 antialiased">
        <ScrollBackground />
        {isAdminPage ? (
          <AdminPage />
        ) : (
          <>
            <Navbar />
            <main className="relative z-10">
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Experience />
              <Contact />
            </main>
            <div className="relative z-10">
              <Footer />
            </div>
          </>
        )}
      </div>
    </PortfolioContentProvider>
  );
}
