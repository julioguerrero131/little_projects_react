import "./App.css";
import Accordian from "./components/acordion";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";

function App() {
  return (
    <div className="App">
      {/* Acordion */}
      {/* <Accordian/> */}

      {/* Color Random */}
      {/* <RandomColor/> */}

      {/* Estrellas */}
      {/* <StarRating numOfStars={10}/> */}

      {/* Image Slider */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      /> */}

      {/* Cargar Mas Contenido */}
      {/* <LoadMoreData/> */}

      {/* Menu Arbol */}
      {/* <TreeView menus={menus}/> */}

      {/* Generador QR */}
      <QRCodeGenerator/>
    </div>
  );
}

export default App;
