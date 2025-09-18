import womandog from "../../assets/img/WomanDog.png";
import womandodMobile from "../../assets/img/WomandogMobile.png";
import { motion } from "motion/react"

export default function HeroBanner() {
  return (
    <section className="relative bg-[#FCEED5] px-2 md:px-8  md:pb-0  overflow-hidden">
       {/* ✅ MOBILE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="block md:hidden pt-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-30 max-w-xl text-left px-4 sm:px-6"
        >
          <h1 className="text-[#003459] text-4xl font-bold leading-tight">
            One More Friend
          </h1>
          <h4 className="text-[#003459] text-2xl font-semibold mt-2">
            Thousands More Fun!
          </h4>
          <p className="mt-4 text-[#003459] text-sm leading-relaxed">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>

          <div className="mt-6 flex flex-row gap-4 justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-2 text-sm border border-[#003459] text-[#003459] rounded-full font-semibold hover:bg-[#003459] hover:text-white transition"
            >
              View Intro
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-2 text-sm bg-[#003459] text-white rounded-full font-semibold hover:bg-white hover:text-[#003459] transition"
            >
              Explore Now
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 relative w-full h-[350px]"
        >
          <img
            src={womandodMobile}
            alt="Woman Dog"
            className="w-full h-full object-contain rounded-xl z-10 relative"
          />
        </motion.div>
      </motion.div>

      {/* ✅ TABLET */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="hidden md:block lg:hidden items-center justify-between"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-4 max-w-xl w-full mx-auto text-left z-20"
        >
          <h1 className="text-[#003459] text-4xl font-bold leading-tight">
            One More Friend
          </h1>
          <h4 className="text-[#003459] text-2xl font-semibold mt-2">
            Thousands More Fun!
          </h4>
          <p className="mt-8 text-[#003459] text-base leading-relaxed">
            Having a pet means you have more joy, a new friend, a happy <br />
            person who will always be with you to have fun. We have 200+ <br />
            different pets that can meet your needs!
          </p>

          <div className="mt-8 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-base border border-[#003459] text-[#003459] rounded-full font-semibold hover:bg-[#003459] hover:text-white transition"
            >
              View Intro
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-base bg-[#003459] text-white rounded-full font-semibold hover:bg-white hover:text-[#003459] transition"
            >
              Explore Now
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full flex items-end justify-center"
        >
          <img
            src={womandog}
            alt="Woman Dog"
            className="w-full h-full object-contain rounded-xl"
          />
        </motion.div>
      </motion.div>

   {/* DESKTOP */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="hidden lg:flex relative h-full w-full px-6 items-center justify-between"
      >
        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl w-full h-full mx-auto text-left z-20 px-8"
        >
          <h1 className="text-[#003459] font-bold leading-tight text-4xl">
            One More Friend
          </h1>
          <h4 className="text-[#003459] text-3xl font-semibold mt-2">
            Thousands More Fun!
          </h4>
          <p className="mt-8 text-[#003459] text-lg leading-relaxed">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>

          <div className="mt-6 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 text-base border border-[#003459] text-[#003459] rounded-full font-semibold hover:bg-[#003459] hover:text-white transition"
            >
              View Intro
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 text-base bg-[#003459] text-white rounded-full font-semibold hover:bg-white hover:text-[#003459] transition"
            >
              Explore Now
            </motion.button>
          </div>
        </motion.div>

        {/* Image + décor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-[1850px] translate-x-[-50px] h-[600px]"
        >
          {/* décorations */}
          <div className="absolute top-38 left-22 w-5 h-5 rounded bg-[#F7DBA7] rotate-64 z-20"></div>
          <div className="absolute top-40 left-22 w-4 h-4 rounded bg-[#002A48] rotate-45 z-20"></div>
          <div className="absolute top-20 left-28 w-3 h-3 rounded bg-[#F7DBA7] rotate-45 z-20"></div>
          <div className="absolute top-52 left-27 w-[600px] h-[600px] rounded-[100px] bg-[#F7DBA7] rotate-25 z-20" />
          <div className="absolute top-50 left-20 w-[335px] h-[635px] rounded-[100px] bg-[#003459] rotate-10 z-10" />

          <motion.img
            src={womandog}
            alt="Woman Dog"
            className="relative w-full h-full object-contain rounded-xl z-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
