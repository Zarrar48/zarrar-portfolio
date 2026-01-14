import avatar from "../assets/avatar.png"
const Navbar = ({ isDark, toggleTheme }) => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="glass-panel rounded-full px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="font-display font-bold text-xl tracking-tight flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-white text-xs">
            {" "}
            <img
              src={avatar}
              alt="Muhammad Zarrar Shabbir"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="hidden sm:inline">
            ZARRAR<span className="text-brand">DEV</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {["Home", "Experience", "Skills", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-sm hover:text-brand transition-all font-medium"
              >
                {item}
              </a>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center hover:bg-brand hover:text-white transition-all"
          >
            {isDark ? (
              <i className="ph-fill ph-sun"></i>
            ) : (
              <i className="ph-fill ph-moon"></i>
            )}
          </button>
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-lg shadow-brand/20"
          >
            Hire Me <i className="ph-bold ph-paper-plane-right"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
