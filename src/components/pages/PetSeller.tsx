import product1 from "../../assets/img/PetsSeller.png";
import { motion } from "motion/react";

export default function PetSellers() {
  return (
    <div className="hidden lg:block ">
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1500px] mx-auto px-8 space-y-10">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Proud to be part of{" "}
              <span className="text-[#003459] text-2xl fond-bold">
                Pet Sellers
              </span>
            </h2>
            <motion.button
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-2 px-6 py-2 border border-[#003459] text-[#003459] rounded-full bg-white hover:bg-[#003459] hover:text-white transition duration-300 cursor-pointer"
            >
              <span className="text-sm font-medium">View all our sellers</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </motion.button>
          </div>

          <div className="flex justify-center max-w-[1500px] mx-auto  ">
            <img src={product1} alt="image pets_seller" className="w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
