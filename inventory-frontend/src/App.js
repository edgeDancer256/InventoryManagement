/*
  @author Sharat C S
*/
import './App.css';
import InvenAppbar from './components/InvenAppbar';
import Item from './components/Item';
import { Routes, Route } from "react-router-dom";
import ItemList from './components/ItemList';
import Supplier from './components/Supplier';
import SupplierList from './components/SupplierList';

function App() {  
  
  return (
    <div className="App">
      <InvenAppbar />
      <Routes>
        <Route path="/" element = { <ItemList /> } />
        <Route path="/add-item" element = { <Item /> } />
        <Route path="/add-supp" element = { <Supplier /> } />
        <Route path="/supp-list" element = { <SupplierList /> } />
      </Routes>
    </div>
  );
}

export default App;
