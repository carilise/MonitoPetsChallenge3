import cadeau from "../../assets/img/Products/Cadeau.png";
import { motion } from "motion/react"
// importer mes images products
import product1 from "../../assets/img/Products/product1.png";
import product2 from "../../assets/img/Products/product2.png";
import product3 from "../../assets/img/Products/product3.png";
import product4 from "../../assets/img/Products/product4.png";
import product5 from "../../assets/img/Products/product5.png";
import product6 from "../../assets/img/Products/product6.png";
import product7 from "../../assets/img/Products/product7.png";
import product8 from "../../assets/img/Products/product8.png";

// src/components/pages/productGallery.tsx
const products = [
  {
    code: "MQ231",
    breed: "Pomeranian White",
    product: "Dog Food",
    size: "385 kg",
    price: "6.000.000 VND",
    image: product1,
  },
  {
    code: "MQ502",
    breed: "Poodle Tiny Yellow",
    product: "cat Food",
    size: "1.5kg",
    price: "6.000.000 VND",
    image: product2,
  },
  {
    code: "MQ231",
    breed: "Pomeranian White",
    product: "Toy",
    price: "6.000.000 VND",
    image: product3,
  },
  {
    code: "MQ502",
    breed: "Poodle Tiny Yellow",
    product: "Toy",
    price: "6.000.000 VND",
    image: product4,
  },
  {
    code: "MQ231",
    breed: "Pomeranian White",
    product: "Dog Food",
    size: "385gm",
    price: "6.000.000 VND",
    image: product5,
  },
  {
    code: "MQ502",
    breed: "Poodle Tiny Yellow",
    product: "Costume",
    size: "1.5kg",
    price: "6.000.000 VND",
    image: product6,
  },
  {
    code: "MQ231",
    breed: "Pomeranian White",
    product: "Costume",
    price: "6.000.000 VND",
    image: product7,
  },
  {
    code: "MQ502",
    breed: "Poodle Tiny Yellow",
    product: "Toy",
    price: "6.000.000 VND",
    image: product8,
  },
];

export default function productGallery() {
  return (
    <div className="hidden lg:block ">
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1500px] mx-auto px-8 ">
          <div className="space-y-6">
            {/* Titre */}
            <h2 className="  text-[#000000] fond-bold">
              Hard to choose right products for your pets?
            </h2>

            <div className="flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#003459]">
                Our Products
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 8px 24px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer transition-transform duration-300"
                >
                  {/* Image */}
                  <div className="flex justify-center items-center h-[202px] bg-white rounded-t-xl overflow-hidden px-2">
                    <motion.img
                      src={product.image}
                      alt={product.breed}
                      className="w-full h-48 object-cover transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>

                  {/* Infos */}
                  <div className="p-4 space-y-2">
                    <h3 className="text-[#003459] font-semibold text-lg">
                      {product.code} - {product.breed}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-sm text-[#667479]">
                      <p>Product: {product.product}</p>
                      {product.size && <p>• Size: {product.size}</p>}
                    </div>
                    <p className="text-black font-bold">{product.price}</p>

                    {/* Bouton cadeau */}
                    <motion.button
                      whileHover={{ scale: 1.05, x: 4 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-2 rounded-xl text-white bg-[#003459] hover:bg-white hover:text-black transition duration-300"
                    >
                      <img
                        src={cadeau}
                        alt="cadeau image"
                        className="w-5 h-5"
                      />
                      <span className="text-sm font-medium">
                        Free Toy & Free Shaker
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
