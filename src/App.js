import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import ScrollIndicator from './components/scroll-indicator';
import StarRating from './components/star-rating';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      <Accordian/>

      {/* Random Color Component */}
      <RandomColor/>

      {/* Star Rating Component */}
      <StarRating noOfStars={10}/>

      {/* Image Slider Component */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={'1'} limit={'10'}/>

      {/* Load More Data Component */}
      <LoadMoreData/>

      {/* Tree View Component/ Menu UI Component/ Recursive Navigation Menu */}
      <TreeView menus={menus}/>

      {/* QR Code Generator */}
      <QRCodeGenerator/>

      {/* Light Dark Mode */}
      <LightDarkMode/>

      {/* Scroll Indicator */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>
    </div>
  );
}

export default App;
