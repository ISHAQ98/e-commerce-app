import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProductItem({ item, id }) {
  const { image, name, price } = item;

  const { currency } = useContext(ShopContext);

  return (
    <div>
      <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
        <div className="overflow-hidden">
          <img
            className="hover:scale-110 transition ease-out"
            src={image[0]}
            alt="img1"
          />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="font-medium text-sm">
          {currency}
          {price}
        </p>
      </Link>
    </div>
  );
}

ProductItem.propTypes = {
  item: PropTypes.node.isRequired, // Mark `children` as required
  id: PropTypes.node.isRequired, // Mark `children` as required
};

export default ProductItem;
