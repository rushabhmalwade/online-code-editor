import logo from './logo.svg';
import './App.css';
import Home from './components/Home';


import DataProvider from './context/DataProvider';
//components

function App() {
  return (
    <div className="App">
    <DataProvider>
      <Home />
    </DataProvider>
    </div>
 
  );
}

export default App;
