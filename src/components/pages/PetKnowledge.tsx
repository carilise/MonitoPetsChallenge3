// importer mes images frames
import frame1 from "../../assets/img/Frame1.png";
import frame2 from "../../assets/img/Frame2.png";
import frame3 from "../../assets/img/Frame3.png";
import { motion } from "motion/react";

// src/components/pages/frameGallery.tsx
const frames = [
  {
    titre: "What is a Pomeranian? How to Identify Pomeranian Dogs",
    sous_titre:
      "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog sous_titre.",
    image: frame1,
  },
  {
    titre: "Dog Diet You Need To Know",
    sous_titre:
      "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
    image: frame2,
  },
  {
    titre:
      "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
    sous_titre:
      "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
    image: frame3,
  },
];

export default function frameGallery() {
  return (
    <section className="py-8  bg-white">
      {/* desktop */}
      <div className="hidden lg:block ">
        <div className="max-w-[1500px] mx-auto px-8">
          {/* Titre */}
          <h2 className="  text-[#000000] fond-bold">You already know ?</h2>

          <div className="flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#003459]">
              Useful pet knowledge
            </h2>

            <button className="flex items-center gap-2 px-6 py-2 border border-[#003459] text-[#003459] rounded-full bg-white hover:bg-[#003459] hover:text-white transition duration-300">
              <span className="text-sm font-medium">View more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Grid des cartes */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frames.map((frame, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden cursor-pointer group"
              >
                {/* Image */}
                <div className="flex justify-center items-center bg-white rounded-xl h-[320px] overflow-hidden">
                  <motion.img
                    src={frame.image}
                    alt={frame.sous_titre}
                    className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Texte */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="p-4 space-y-2"
                >
                  <p className="inline-block bg-[#00A7E7] text-white px-4 py-1 rounded-full">
                    Pet knowledge
                  </p>
                  <h3 className="text-[#00171F] font-bold text-lg group-hover:text-[#003459] transition">
                    {frame.titre}
                  </h3>
                  <p className="text-[#242B33] text-sm leading-relaxed">
                    {frame.sous_titre}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="block md:hidden">
        <div className="px-4 max-w-[600px] mx-auto space-y-8">
          {/* Titre */}
          <div className="space-y-1">
            <h2 className="text-[#000000] text-base font-medium">
              You already know ?
            </h2>
            <h4 className="text-xl font-bold text-[#003459]">
              Useful pet knowledge
            </h4>
          </div>

          <div>
            {/* Grid 2 colonnes */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {frames.map((frame, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden cursor-pointer group"
                >
                  {/* Image */}
                  <div className="flex justify-center items-center bg-white rounded-xl h-[320px] overflow-hidden">
                    <motion.img
                      src={frame.image}
                      alt={frame.sous_titre}
                      className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Texte */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="p-4 space-y-2"
                  >
                    <p className="inline-block bg-[#00A7E7] text-white px-4 py-1 rounded-full">
                      Pet knowledge
                    </p>
                    <h3 className="text-[#00171F] font-bold text-lg group-hover:text-[#003459] transition">
                      {frame.titre}
                    </h3>
                    <p className="text-[#242B33] text-sm leading-relaxed">
                      {frame.sous_titre}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Bouton View More */}
            <div className="pt-8 flex justify-center items-center text-center">
              <button className="w-full flex justify-center items-center gap-2 px-6 py-2 border border-[#003459] text-[#003459] rounded-full bg-white hover:bg-[#003459] hover:text-white transition duration-300">
                <span className="text-sm font-medium">View more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
