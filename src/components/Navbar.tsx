"use client";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { portfolioData } from "@/userData/portfolio-data";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();
  const { personal } = portfolioData;
  const [firstName, lastName] = personal.name.split(" ");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    });

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
      observer.disconnect();
    };
  }, [mounted]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border py-3"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="text-2xl font-black tracking-tighter">
            <span className="gradient-text">{firstName}</span>
            <span className="text-foreground">.{lastName}</span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`relative text-sm font-bold transition-colors ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-primary" />
            )}
          </button>
        </div>

        <button className="hidden md:block bg-primary text-white px-6 py-2 rounded-full text-sm font-black hover:opacity-90 transition-opacity">
          Hire Me
        </button>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-card border border-border transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-primary" />
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 rounded-xl bg-card border border-border text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border py-4 px-6">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`py-3 px-4 rounded-xl text-sm font-bold transition-all ${
                  activeSection === item.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted hover:bg-card hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
            <button className="bg-primary text-white px-6 py-3 rounded-full text-sm font-black hover:opacity-90 transition-opacity mt-2">
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
