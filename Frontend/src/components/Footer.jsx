import { Link } from "react-router-dom";

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-black text-white px-6 md:px-20 py-20 clip-footer">
      <div className="grid md:grid-cols-5 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            ETHEREAL <span className="text-yellow-400">STROKES</span>
          </h2>
          <p className="mt-4">
            Empowering the next generation of nail artists through resilience and self-learning.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-yellow-400 transition cursor-pointer"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("collection")}
                className="hover:text-yellow-400 transition cursor-pointer"
              >
                Shop Book
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("journey")}
                className="hover:text-yellow-400 transition cursor-pointer"
              >
                Story
              </button>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/terms" className="hover:text-yellow-400 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-yellow-400 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-4">Connect With Us</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://instagram.com/the_nailstation_ldh?igsh=aGRxZDc5OHU4aDM1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                Instagram 1
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/pressed_by_tns?igsh=amVjeW8zYXFjNXBk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                Instagram 2
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-4">Contact</h4>
          <p className="mt-4">
            <a
              href="mailto:hello@etherealstrokes.com"
              className="hover:text-yellow-400 transition"
            >
              pressesbytns@gmail.com
            </a>
          </p>
        </div>

      </div>

      <p className="text-center mt-10 opacity-50 text-sm">
        © {new Date().getFullYear()} Ethereal Strokes. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;