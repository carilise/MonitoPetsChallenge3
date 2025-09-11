import product1 from "../../assets/img/Products/Product1.png";
import product2 from "../../assets/img/Products/Product2.png";
import product3 from "../../assets/img/Products/Product3.png";
import product4 from "../../assets/img/Products/Product4.png";
import product5 from "../../assets/img/Products/Product5.png";
import product6 from "../../assets/img/Products/Product6.png";
import product7 from "../../assets/img/Products/Product7.png";
import product8 from "../../assets/img/Products/Product8.png";
import paginates from "../../assets/img/Paginate.png";

const products = [
  {
    code: "MQ231",
    age: "Pomeranian White",
    breed: "Dog Food",
    price: "385 kg",
    gender: "6.000.000 VND",
    image: product1,
  },
  {
    code: "MQ502",
    age: "Poodle Tiny Yellow",
    breed: "cat Food",
    price: "1.5kg",
    gender: "6.000.000 VND",
    image: product2,
  },
  {
    code: "MQ231",
    age: "Pomeranian White",
    breed: "Toy",
    gender: "6.000.000 VND",
    image: product3,
  },
  {
    code: "MQ502",
    age: "Poodle Tiny Yellow",
    breed: "Toy",
    gender: "6.000.000 VND",
    image: product4,
  },
  {
    code: "MQ231",
    age: "Pomeranian White",
    breed: "Dog Food",
    price: "385gm",
    gender: "6.000.000 VND",
    image: product5,
  },
  {
    code: "MQ502",
    age: "Poodle Tiny Yellow",
    breed: "Costume",
    price: "1.5kg",
    gender: "6.000.000 VND",
    image: product6,
  },
  {
    code: "MQ231",
    age: "Pomeranian White",
    breed: "Costume",
    gender: "6.000.000 VND",
    image: product7,
  },
  {
    code: "MQ502",
    age: "Poodle Tiny Yellow",
    breed: "Toy",
    gender: "6.000.000 VND",
    image: product8,
  },
    {
    code: "MQ231",
    age: "Pomeranian White",
    breed: "Dog Food",
    price: "385 kg",
    gender: "6.000.000 VND",
    image: product1,
  },
  {
    code: "MQ502",
    age: "Poodle Tiny Yellow",
    breed: "cat Food",
    price: "1.5kg",
    gender: "6.000.000 VND",
    image: product2,
  },
  {
    code: "MQ231",
    age: "Pomeranian White",
    breed: "Toy",
    gender: "6.000.000 VND",
    image: product3,
  },
  {
    code: "MQ502",
    age: "Poodle Tiny Yellow",
    breed: "Toy",
    gender: "6.000.000 VND",
    image: product4,
  },
  {
    code: "MQ231",
    age: "Pomeranian White",
    breed: "Dog Food",
    price: "385gm",
    gender: "6.000.000 VND",
    image: product5,
  },
  {
    code: "MQ502",
    age: "Poodle Tiny Yellow",
    breed: "Costume",
    price: "1.5kg",
    gender: "6.000.000 VND",
    image: product6,
  },
  {
    code: "MQ231",
    age: "Pomeranian White",
    breed: "Costume",
    gender: "6.000.000 VND",
    image: product7,
  },

];
export default function Filter() {
  return (
    <section className="mt-8 max-w-[1500px] mx-auto px-8">
      <div className="grid grid-cols-4 gap-6 px-6 py-10">
        {/*  Colonne filtre  */}
        <div className="bg-white rounded-xl p-6 shadow-md w-full space-y-8">
          <h2 className="text-xl font-bold text-[#003459]">Filter by</h2>

          {/* Gender */}
          <div>
            <h3 className="text-sm font-semibold text-[#667479] mb-2">
              Gender
            </h3>
            <div className="flex flex-col flex-col-1 gap-2">
              <label className="flex items-center gap-2 text-sm text-[#003459]">
                <input type="checkbox" className="accent-[#003459]" />
                Male
              </label>
              <label className="flex items-center gap-2 text-sm text-[#003459]">
                <input type="checkbox" className="accent-[#003459]" />
                Female
              </label>
            </div>
          </div>

          {/*  Color */}
          <div>
            <h3 className="text-sm font-semibold text-[#667479] mb-2">Color</h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: "Red", color: "#FF0000" },
                { name: "Apricot", color: "#FBCEB1" },
                { name: "Black", color: "#000000" },
                {
                  name: "Black & White",
                  color: "linear-gradient(to right, #000, #fff)",
                },
                { name: "Silver", color: "#C0C0C0" },
                { name: "Tan", color: "#D2B48C" },
              ].map(({ name, color }, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 text-sm text-[#003459]"
                >
                  <input type="checkbox" className="accent-[#003459]" />
                  <span
                    className="w-4 h-4 rounded-full border"
                    style={{
                      background: color.includes("gradient")
                        ? undefined
                        : color,
                      backgroundImage: color.includes("gradient")
                        ? color
                        : undefined,
                      borderColor: "#99A2A5",
                    }}
                  />
                  {name}
                </label>
              ))}
            </div>
          </div>

          {/*  Price */}
          <div>
            <h3 className="text-sm font-semibold text-[#667479] mb-2">
              Price (VND)
            </h3>
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Min"
                className="w-full px-3 py-2 rounded-md text-sm text-[#003459] placeholder-[#99A2A5] focus:outline-none focus:ring-2 focus:ring-[#003459]"
              />
              <input
                type="number"
                placeholder="Max"
                className="w-full px-3 py-2 rounded-md text-sm text-[#003459] placeholder-[#99A2A5] focus:outline-none focus:ring-2 focus:ring-[#003459]"
              />
            </div>
          </div>

          {/* Breed */}
          <div>
            <h3 className="text-sm font-semibold text-[#667479] mb-2">
              Breed Size
            </h3>
            <div className="flex gap-4 flex-col flex-col-1">
              <label className="flex items-center gap-2 text-sm text-[#003459]">
                <input type="checkbox" className="accent-[#003459]" />
                Small
              </label>
              <label className="flex items-center gap-2 text-sm text-[#003459]">
                <input type="checkbox" className="accent-[#003459]" />
                Medium
              </label>
              <label className="flex items-center gap-2 text-sm text-[#003459]">
                <input type="checkbox" className="accent-[#003459]" />
                Large
              </label>
            </div>
          </div>
        </div>

        {/* Colonne produits*/}
        <div className="col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 py-1">
            {products.map((product, index) => (
              <div
                key={index}
                className="p-1 bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.breed}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4 space-y-1">
                  <h3 className="text-[#003459] font-semibold text-lg">
                    {product.code} - {product.breed}
                  </h3>
                  <p className="text-[#667479] text-sm">
                    Gender: {product.gender}
                  </p>
                  <p className="text-[#667479] text-sm">Age: {product.age}</p>
                  <p className="text-black font-bold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center items-center">
            <img src={paginates} alt="paginates img" />
            </div>
        </div>
      </div>
    </section>
  );
}
