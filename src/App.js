import './App.css';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import { DataProvider } from './Context/DataContext';

function App() {
  return (
    <>
      <Header/>
      
      <DataProvider>
        <Body></Body>
      </DataProvider>
      <Footer/>
      
    </>
  );
}

export default App;
