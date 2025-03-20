import "./App.css";
import Accordian from "./components/acordion";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tabs-test";
import ModalTest from "./components/custom-modal/modal-test";

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
      {/* <QRCodeGenerator/> */}

      {/* Modo Oscuro/Claro */}
      {/* <LightDarkMode/> */}

      {/* Indicador Scroll */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}

      {/* Tabs Personalizadas */}
      {/* <TabTest/> */}

      {/* Modals */}
      <ModalTest/>
    </div>
  );
}

export default App;
