// import photo from "./photo.jpg"
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import FeaturedWork from './components/FeaturedWork/FeaturedWork';

function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      <FeaturedWork/>
      
    </div>
  );
}

export default App;
