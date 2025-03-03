import './App.css'
import Accordian from './components/acordion'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'

function App() {

  return (
    <div className='App'>
      {/* Acordion */}
      {/* <Accordian/> */}

      {/* Color Random */}
      {/* <RandomColor/> */}

      {/* Estrellas */}
      <StarRating numOfStars={10}/>
    </div>
  )
}

export default App
