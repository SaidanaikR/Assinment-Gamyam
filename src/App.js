import './App.css';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Product Manager</span>
        </div>
      </nav>
      <div className="container-fluid px-4">
        <ProductList /> 
        
      </div>
    </div>
  );
}

export default App;
