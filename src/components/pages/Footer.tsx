// importer mes images reseau
import facebook from "../../assets/img/FacebookLogo.png";
import twitter from "../../assets/img/TwitterLogo.png";
import instagram from "../../assets/img/InstagramLogo.png";
import youtube from "../../assets/img/YoutubeLogo.png";
import monito from "../../assets/img/MonitoLogo.png";
import { motion } from "motion/react";

// components/Footer.jsx
export default function Footer() {
  return (
    <div>
      {/* destop */}
      <div className="hidden lg:block ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=""
        >
          <footer className="bg-[#FFE7BA] text-white py-16 px-6 md:px-12 pb-6 rounded-t-[40px]">
            <div className="max-w-[1500px] mx-auto px-8">
              <div className="bg-[#003459] text-white py-11 px-5">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold leading-snug">
                      Register Now So You Don't Miss Our Programs.
                    </h2>
                  </div>

                  <form className="w-full md:w-2/3 flex flex-col sm:flex-row items-center gap-4 bg-white px-3 py-4 rounded-lg">
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className="px-4 py-4 rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-300 md:w-2/3 "
                      required
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#003459] text-[#FDFDFD] font-semibold px-6 py-2 rounded-md hover:bg-white transition-colors md:w-1/3"
                    >
                      Subscribe Now
                    </motion.button>
                  </form>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-sm mb-6 gap-2">
                <motion.nav
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.2 },
                    },
                  }}
                  className="flex gap-9 text-[#00171F] font-medium"
                >
                  {["Home", "Category", "About", "Contact"].map((link, i) => (
                    <motion.a
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      href="#"
                    >
                      {link}
                    </motion.a>
                  ))}
                </motion.nav>

                {/* Social Icons */}
                <div className="flex gap-7">
                  {[facebook, twitter, instagram, youtube].map((icon, i) => (
                    <motion.img
                      key={i}
                      src={icon}
                      alt="social icon"
                      className="w-6 h-6"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              </div>

              <div className="border-t border-[#99A2A5] pt-4 ">
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#FCEED5] py-6">
                  <p className="text-[#667479]">
                    © 2022 Monitö. All rights reserved.
                  </p>
                  <div className="flex items-center gap-2">
                    <img src={monito} alt="Monitö Logo" className="h-6" />
                    <span>Pets for Best</span>
                  </div>
                  <div className=" text-[#667479] flex gap-4">
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </motion.div>
      </div>

      {/* mobile */}
      <div className="block md:hidden">
        {" "}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=""
        >
          <footer className="bg-[#FFE7BA] text-white py-12 px-4 md:px-12 rounded-t-[20px]">
            <div className="max-w-[1500px] mx-auto space-y-12">
              {/* 📢 Titre + Formulaire */}
              <div className="bg-[#003459] text-white py-8 px-4 rounded-lg">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-start md:text-left">
                    Register Now So You Don't Miss Our Programs.
                  </h2>

                  <form className="w-full md:w-2/3 flex flex-col sm:flex-row items-center gap-4 bg-white px-3 py-4 rounded-lg">
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className="px-4 py-3 rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-[#003459] text-[#FDFDFD] font-semibold px-6 py-2 rounded-md hover:bg-white hover:text-[dark] transition-colors w-full sm:w-auto"
                    >
                      Subscribe Now
                    </button>
                  </form>
                </div>
              </div>

              {/* 🔗 Navigation + Réseaux */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
                <nav className="flex flex-wrap justify-center md:justify-start gap-6 text-[#00171F] font-medium">
                  <a href="#">Home</a>
                  <a href="#">Category</a>
                  <a href="#">About</a>
                  <a href="#">Contact</a>
                </nav>

                <div className="flex gap-5 justify-center">
                  <img src={facebook} alt="Facebook" className="w-6 h-6" />
                  <img src={twitter} alt="Twitter" className="w-6 h-6" />
                  <img src={instagram} alt="Instagram" className="w-6 h-6" />
                  <img src={youtube} alt="YouTube" className="w-6 h-6" />
                </div>
              </div>

              {/* 🧾 Branding & Legal */}
              <div className="border-t border-[#99A2A5] pt-6">
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#667479] gap-4">
                  <div className="flex items-center gap-2">
                    <img src={monito} alt="Monitö Logo" className="h-6" />
                  </div>
                  <div className="flex gap-4">
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                  </div>
                  <p>© 2022 Monitö. All rights reserved.</p>
                </div>
              </div>
            </div>
          </footer>
        </motion.div>
      </div>
    </div>
  );
}
