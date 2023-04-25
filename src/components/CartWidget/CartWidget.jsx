import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <div>
        <BsCart4 size={20} />
        <span style={{ "font-size": "15px" }}>0</span>
      </div>
    </Link>
  );
};

export default CartWidget;
