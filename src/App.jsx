import "./App.css";
import Accordian from "./components/acordion";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

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
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      />
    </div>
  );
}

export default App;
