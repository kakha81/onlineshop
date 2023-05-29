import styled from "styled-components";
import Product from "./Product";
import { AnimatePresence, motion } from "framer-motion";

const Container = styled.div`
  margin: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: white;
`;

const Products = ({ card }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.7 }}
    >
      <AnimatePresence>
        <Container>
          {card.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </Container>
      </AnimatePresence>
    </motion.div>
  );
};

export default Products;
