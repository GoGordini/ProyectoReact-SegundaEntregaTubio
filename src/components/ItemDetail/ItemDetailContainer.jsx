import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let productoBuscado = products.find(
      (producto) => producto.id === Number(id)
    );
    setProduct(productoBuscado);
  }, [id]);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};
//export default ItemDetailContainer;
