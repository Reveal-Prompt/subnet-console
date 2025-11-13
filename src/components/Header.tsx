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
    <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img src="/public/logo.png" alt="" />

            </div>

          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-2 bg-gray-100/80 p-1.5 rounded-xl">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative px-5 py-2.5 text-xs font-semibold tracking-wider transition-all rounded-lg flex items-center gap-2",
                  location.pathname === item.path
                    ? "bg-white text-gray-900 shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                )}
              >
                {location.pathname === item.path && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-pink-500/10 rounded-lg" />
                )}

                <span className="relative">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </button>
            <div className="w-px h-6 bg-gray-300" />
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-50 to-pink-50 border border-gray-200">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 animate-pulse" />
              <span className="text-xs font-semibold text-gray-700">LIVE</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;