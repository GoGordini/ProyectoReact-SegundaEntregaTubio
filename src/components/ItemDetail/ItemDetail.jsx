import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./ItemDetail.module.css";

export const ItemDetail = ({ product }) => {
  return (
    <div
      className={styles.detailView}
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      //   justifyContent: "center",
      // }}
    >
      <h2>{product.title}</h2>
      <h3>{product.description}</h3>
      <h3>${product.price}</h3>
      <div>
        <img
          src={product.img}
          alt="foto producto"
          style={{ height: "200px" }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/">
          <Button variant="contained" size="small" color="success">
            VOLVER
          </Button>
        </Link>
      </div>
    </div>
  );
};
//export default ItemDetail;
