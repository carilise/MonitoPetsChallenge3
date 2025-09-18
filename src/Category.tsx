import Headers from "./components/Headers";
import BreadcrumbMarketSVG from "./components/pages/BreadcrumbMarketStyle";
import Filter from "./components/pages/Filter";
import Footer from "./components/pages/Footer";
import HeroDogsBanner from "./components/pages/HeroDogsBanner";
import { motion } from "framer-motion";

const scrollFade = {
 initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.3 },
}


export default function Category() {
  return (
    <div className="">
    <motion.div {...scrollFade}>
        <Headers />
      </motion.div>

      <motion.div {...scrollFade} transition={{ duration: 0.5, delay: 0.1 }}>
        <BreadcrumbMarketSVG />
      </motion.div>

      <motion.div {...scrollFade} transition={{ duration: 0.5, delay: 0.2 }}>
        <HeroDogsBanner />
      </motion.div>

        <Filter />

      <motion.div {...scrollFade} transition={{ duration: 0.5, delay: 0.4 }}>
        <Footer />
      </motion.div>
     
    </div>
  );
}
