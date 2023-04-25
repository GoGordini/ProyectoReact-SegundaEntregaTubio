import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import styles from "./ItemList.module.css";
import { products } from "../../productsMock";
//import useCounter from "../../utils/hooks/useCounter";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
  let greeting = "BIENVENIDOS A HAPPY SKIN";
  //const { counter, increase, decrease, reset } = useCounter();
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  // useEffect(() => {
  //   const tarea = new Promise((resolve, reject) => {
  //     resolve(products);
  //   });

  //   tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  // }, []);
  useEffect(() => {
    const productsFiltered = products.filter(
      (producto) => producto.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productsFiltered : products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);
  return (
    <div className={styles.texto}>
      <ItemList greeting={greeting} items={items} />
      {/* <h2>{counter}</h2>
      <button onClick={increase}>Add</button>
      <button onClick={decrease}>Remove</button>
      <button onClick={reset}>Reset</button> */}
    </div>
  );
};

export default ItemListContainer;

// La parte previa al return es de lógica (el contenido), en JS, y se llama contenedor.
// La parte del return es jsx. En esta parte, las cosas que vienen de JS van entre llaves. Lo que se recibe como
// parámetro es un objeto que se denomina props. La props se envían desestructuradas.
