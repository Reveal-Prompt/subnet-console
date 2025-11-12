import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "DASHBOARD" },
    { path: "/leaderboard", label: "LEADERBOARD" },
    { path: "/validators", label: "VALIDATORS" },
    { path: "/prompt-validator", label: "PROMPT VALIDATOR" },
  ];

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
          <span className="text-xl font-semibold">Score</span>
        </Link>
        
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-4 py-2 text-sm font-medium tracking-wide transition-colors",
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
