import './App.css';
import Accordian from './components/accordian';
import ModalTest from './components/custom-modal-popup/modal-test';
import TabTest from './components/custom-tabs/tab-test';
import FeatureFlags from './components/feature-flag';
import FeatureFlagsGlobalState from './components/feature-flag/context';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import ScrollIndicator from './components/scroll-indicator';
import ScrollToTopAndBottom from './components/scroll-to/scroll-to-top-and-bottom';
import StarRating from './components/star-rating';
import TicTacToe from './components/tic-tac-toe';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import UseOutsideClickHookTest from './components/use-outside-click/test';
import UseWindowResizeCustomHook from './components/use-window-resize/test';

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

      {/* Custom Tabs Component */}
      <TabTest/>

      {/* Custom MOdal Popup Component */}
      <ModalTest/>

      {/* Tic Tac Toe Component */}
      <TicTacToe/>

      {/* Feature Flag Component */}
      <FeatureFlagsGlobalState>
        <FeatureFlags/>
      </FeatureFlagsGlobalState>

      {/* useOutSideClick custom hook */}
      <UseOutsideClickHookTest/>

      {/* use-window-resize custom hook */}
      <UseWindowResizeCustomHook/>

      {/* scroll-to-top-and-bottom */}
      <ScrollToTopAndBottom/>
    </div>
  );
}

export default App;
