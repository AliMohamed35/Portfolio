
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

function NavBar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container m-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-3xl font-bold text-[#010314] hover:text-[#7079f0] transition-colors duration-300">
          Ali M.
        </a>

        <div className="flex items-center gap-2">
          <ul className="flex gap-1 mr-4 font-semibold">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block px-3 py-2 rounded-lg text-[#010314] hover:text-[#7241FF] hover:bg-[#7079f0]/5 transition-all duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
