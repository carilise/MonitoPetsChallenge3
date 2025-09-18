import { motion } from "motion/react";
// importer mes images pets
import pet1 from "../../assets/img/Pets/Pet1.png";
import pet2 from "../../assets/img/Pets/Pet2.png";
import pet3 from "../../assets/img/Pets/Pet3.png";
import pet4 from "../../assets/img/Pets/Pet4.png";
import pet5 from "../../assets/img/Pets/Pet5.png";
import pet6 from "../../assets/img/Pets/Pet6.png";
import pet7 from "../../assets/img/Pets/Pet7.png";
import pet8 from "../../assets/img/Pets/Pet8.png";

// src/components/pages/PetGallery.tsx
const pets = [
  {
    code: "MQ231",
    breed: "Pomeranian White",
    genre: "Male",
    age: "2 months",
    price: "6.000.000 VND",
    image: pet1,
  },
  {
    code: "MQ502",
    breed: "Poodle Tiny Yellow",
    genre: "Male",
    age: "2 months",
    price: "6.000.000 VND",
    image: pet2,
  },
  {
    code: "MQ231",
    breed: "Pomeranian White",
    genre: "Male",
    age: "2 months",
    price: "6.000.000 VND",
    image: pet3,
  },
  {
    code: "MQ502",
    breed: "Poodle Tiny Yellow",
    genre: "Male",
    age: "2 months",
    price: "6.000.000 VND",
    image: pet4,
  },
  {
    code: "MQ231",
    breed: "Pomeranian White",
    genre: "Male",
    age: "2 months",
    price: "6.000.000 VND",
    image: pet5,
  },
  {
    code: "MQ502",
    breed: "Poodle Tiny Yellow",
    genre: "Male",
    age: "2 months",
    price: "6.000.000 VND",
    image: pet6,
  },
  {
    code: "MQ231",
    breed: "Pomeranian White",
    genre: "Male",
    age: "2 months",
    price: "6.000.000 VND",
    image: pet7,
  },
  {
    code: "MQ502",
    breed: "Poodle Tiny Yellow",
    genre: "Male",
    age: "2 months",
    price: "6.000.000 VND",
    image: pet8,
  },
];

export default function PetGallery() {
  return (
    <section className="py-8  bg-white">
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="max-w-[1500px] mx-auto px-8 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#000000]"
          >
            What’s new?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center"
          >
            <h2 className="text-3xl font-bold text-[#003459]">
              Take A Look At Some Of Our Pets
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2 border border-[#003459] text-[#003459] rounded-full bg-white hover:bg-[#003459] hover:text-white transition"
            >
              <span className="text-sm font-medium">View more</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {pets.map((pet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden cursor-pointer"
              >
                <div className="flex justify-center items-center h-[320px] px-2">
                  <img
                    src={pet.image}
                    alt={pet.breed}
                    className="w-full h-[300px] object-cover rounded-t-xl"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-[#003459] font-semibold text-lg">
                    {pet.code} - {pet.breed}
                  </h3>
                  <div className="flex gap-3 text-sm text-[#667479]">
                    <p>Genre: {pet.genre}</p>
                    <p>•</p>
                    <p>Age: {pet.age}</p>
                  </div>
                  <p className="text-black font-bold">{pet.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="block md:hidden">
        <div className="px-4 max-w-[600px] mx-auto space-y-8">
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-1"
          >
            <h2 className="text-[#000000] text-base font-medium">
              What’s new?
            </h2>
            <h4 className="text-xl font-bold text-[#003459]">
              Take A Look At Some Of Our Pets
            </h4>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-4">
            {pets.map((pet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden cursor-pointer"
              >
                <div className="flex justify-center items-center h-[150px] p-1">
                  <img
                    src={pet.image}
                    alt={pet.breed}
                    className="h-[140px] w-auto rounded-xl object-contain"
                  />
                </div>
                <div className="p-3 space-y-1 text-left">
                  <h3 className="text-[#003459] font-semibold text-sm leading-tight">
                    {pet.code} - {pet.breed}
                  </h3>
                  <p className="text-[#667479] text-xs">Gender: {pet.genre}</p>
                  <p className="text-[#667479] text-xs">Age: {pet.age}</p>
                  <p className="text-black font-bold text-sm">{pet.price}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bouton View More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-8 flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex justify-center items-center gap-2 px-6 py-2 border border-[#003459] text-[#003459] rounded-full bg-white hover:bg-[#003459] hover:text-white transition"
            >
              <span className="text-sm font-medium">View more</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* TABLET */}
      <div className="hidden md:block lg:hidden py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Titre + bouton */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-between items-center"
          >
            <div>
              <h2 className="text-[#000000] text-base font-medium">
                What’s new?
              </h2>
              <h3 className="text-2xl font-bold text-[#003459]">
                Take A Look At Some Of Our Pets
              </h3>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2 border border-[#003459] text-[#003459] rounded-full bg-white hover:bg-[#003459] hover:text-white transition"
            >
              <span className="text-sm font-medium">View more</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-6">
            {pets.map((pet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden cursor-pointer"
              >
                <div className="flex justify-center items-center h-[240px]">
                  <img
                    src={pet.image}
                    alt={pet.breed}
                    className="h-[200px] w-auto rounded-xl object-cover"
                  />
                </div>
                <div className="p-4 space-y-2 text-left">
                  <h3 className="text-[#003459] font-semibold text-base">
                    {pet.code} - {pet.breed}
                  </h3>
                  <p className="text-[#667479] text-sm">
                    Gender: {pet.genre} • Age: {pet.age}
                  </p>
                  <p className="text-black font-bold text-base">{pet.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
