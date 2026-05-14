export default function Footer() {
  return (
    <footer className="bg-[#3D1F7A] border-t border-purple-400/20 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-cormorant text-4xl tracking-[0.2em] text-white">
              JANA
            </h3>

            <p className="text-[#B8AACC] mt-4 leading-8 text-sm">
              Islamabad's most trusted beauty parlour.
            </p>
          </div>

          <div>
            <h4 className="uppercase text-xs tracking-[0.2em] text-[#C4AAEE] mb-4">
              Services
            </h4>

            <ul className="space-y-3 text-[#B8AACC] text-sm">
              <li>Hair Services</li>
              <li>Skin & Facial</li>
              <li>Bridal Packages</li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase text-xs tracking-[0.2em] text-[#C4AAEE] mb-4">
              Visit Us
            </h4>

            <ul className="space-y-3 text-[#B8AACC] text-sm">
              <li>F-10 Markaz, Islamabad</li>
              <li>11AM - 8PM</li>
              <li>051-846-1717</li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase text-xs tracking-[0.2em] text-[#C4AAEE] mb-4">
              Connect
            </h4>

            <ul className="space-y-3 text-[#B8AACC] text-sm">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>WhatsApp</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-400/10 mt-14 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-[#B8AACC]/50">
          <p>© 2026 Jana Salon — Hair & Beauty.</p>

          <p>
            Designed & built by <span className="text-[#C4AAEE]">Saad</span>
          </p>
        </div>
      </div>
    </footer>
  );
}