import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import logoHappySkin from "../../assets/images/logohappyskin.png";
import { Outlet, Link } from "react-router-dom";
import { style } from "@mui/system";
const Navbar = () => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            className={styles.image}
            src={logoHappySkin}
            alt="Logo de Happy Skin"
          />
        </Link>
        <div className={styles.nav}>
          <Link to="/category/Guashas">GUASHAS</Link>
          <Link to="/category/Rollers">ROLLERS</Link>
          <Link to="/category/Sets">SETS</Link>
        </div>
        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;

// // Para crear un componente (obs: es una función):
// 1) en src crear una carpeta "components"
// 2) dentro de components crear una carpeta con el nombre del componente -con mayúscula-;
// 3) dentro de esa carpeta, un archivo con el mismo nombre -con mayúscula- .jsx
// 4) se le puede poner tb un archivo idem pero .css
// 5) en el .jsx va un const y el nombre del componenente, función flecha, y en el return algo.
// 6) post función, se exporta por default con export default "Componente"
// 7) Luego ir a App.js para usarlo llamando el componente dentro del div ClassName= "App" (hay que importarlo ahí, según el método para exportar es cómo se importa luego pero VS lo hace solo).
// // Ejemplo. En Navbar.jsx va:
// const Navbar = () => {
//     return <h1> Este es el NavBar</h1>;
//   };

//   export default Navbar;

// // y en App.js va:
// import Navbar from "./components/Navbar/Navbar";

// function App() {
//   return (
//     <div className="App">
//       <h1>Home</h1>
//       <Navbar />
//     </div>
//   );
// }

// export default App;

// Class se reemplaza por ClassName.
