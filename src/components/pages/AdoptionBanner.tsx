import pate from "../../assets/img/PateChien.png";
import pateMain from "../../assets/img/PateMain.png";
import { MdOutlinePlayCircle } from "react-icons/md";
import { motion } from "motion/react"

export default function AdoptionBanner() {
  return (
  <section className="hidden lg:block bg-white py-20 px-23">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-[1500px] mx-auto px-8 grid grid-cols-2 items-center bg-secondary rounded-[20px] overflow-hidden relative"
      >
        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-20 px-12 py-10 space-y-6 text-left"
        >
          <div className="flex items-center gap-4">
            <h1 className="text-[52px] font-extrabold leading-[68px] text-primary">
              Adoption
            </h1>
            <motion.img
              src={pate}
              alt="paw icon"
              className="w-[40px] h-[40px] object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <h2 className="text-[36px] font-bold text-text-dark">
            We Need Help. So Do They.
          </h2>

          <p className="text-[16px] text-text-dark leading-relaxed max-w-[500px]">
            Adopt a pet and give it a home, it will love you back unconditionally.
          </p>

          <div className="flex gap-4 pt-4">
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary hover:text-primary transition"
            >
              Explore Now
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition flex items-center"
            >
              View Intro <MdOutlinePlayCircle className="ml-2 h-6 w-6" />
            </motion.button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative flex justify-center items-center h-full"
        >
          {/* Overlay décoratif */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute h-[90%] w-[130%] rounded-bl-[99px] rotate-[151deg] -bottom-[150px] -right-[50px] z-10"
            style={{
              background:
                "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
            }}
          />

          <motion.img
            src={pateMain}
            alt="Hand holding paw"
            className="relative z-20 w-[500px] object-contain rounded-xl rotate-[55deg] scale-x-[-1]"
            style={{ borderRadius: "11.79px" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
