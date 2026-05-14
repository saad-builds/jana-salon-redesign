import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt, FaClock, FaPhone
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1E1040] border-t border-purple-400/20 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h3 className="font-cormorant text-6xl tracking-[0.25em] text-white">
              JANA
            </h3>

            <p className="text-[#B8AACC] mt-3 text-sm tracking-widest uppercase">
              Hair & Beauty · Islamabad
            </p>
          </div>

          {/* Social Icons */}
          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/janahairandbeauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-purple-400/30 flex items-center justify-center text-[#B8AACC] hover:border-[#C4AAEE] hover:text-white hover:bg-[#C4AAEE]/10 transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="text-sm" />
            </a>

            <a
              href="https://www.facebook.com/JanaBeautySalonIslamabad/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-purple-400/30 flex items-center justify-center text-[#B8AACC] hover:border-[#C4AAEE] hover:text-white hover:bg-[#C4AAEE]/10 transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-sm" />
            </a>

            <a
              href="https://www.linkedin.com/company/jana-salon-hair-and-beauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-purple-400/30 flex items-center justify-center text-[#B8AACC] hover:border-[#C4AAEE] hover:text-white hover:bg-[#C4AAEE]/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-sm" />
            </a>

            <a
              href="https://wa.me/92518461717"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-purple-400/30 flex items-center justify-center text-[#B8AACC] hover:border-[#C4AAEE] hover:text-white hover:bg-[#C4AAEE]/10 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-sm" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent mb-16" />

        {/* Footer Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Services */}
          <div>
            <h4 className="uppercase text-xs tracking-[0.25em] text-[#C4AAEE] mb-6">
              Services
            </h4>

            <ul className="space-y-4 text-[#B8AACC] text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">
                Hair Services
              </li>

              <li className="hover:text-white transition-colors cursor-pointer">
                Skin & Facial
              </li>

              <li className="hover:text-white transition-colors cursor-pointer">
                Bridal Packages
              </li>
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="uppercase text-xs tracking-[0.25em] text-[#C4AAEE] mb-6">
              Visit Us
            </h4>

         <ul className="space-y-4 text-[#B8AACC] text-sm">
  <li className="flex items-center gap-2">
    <FaMapMarkerAlt className="text-[#C4AAEE]" />
    F-10 Markaz, Islamabad
  </li>

  <li className="flex items-center gap-2">
    <FaClock className="text-[#C4AAEE]" />
    11AM – 8PM, Daily
  </li>

  <li className="flex items-center gap-2">
    <FaPhone className="text-[#C4AAEE]" />
    051-846-1717
  </li>
</ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="uppercase text-xs tracking-[0.25em] text-[#C4AAEE] mb-6">
              Connect
            </h4>

            <ul className="space-y-4 text-[#B8AACC] text-sm">
              <li>
                <a
                  href="https://www.instagram.com/janahairandbeauty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/JanaBeautySalonIslamabad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/jana-salon-hair-and-beauty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/92518461717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent mt-14 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-[#B8AACC]/40 tracking-wider uppercase">
          <p>© 2026 Jana Salon — Hair & Beauty</p>

          <p>
            Designed & built by{" "}
            <a
              href="https://www.linkedin.com/in/saadmuhammadd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C4AAEE]/70 hover:text-[#C4AAEE] transition-colors"
            >
              Saad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
