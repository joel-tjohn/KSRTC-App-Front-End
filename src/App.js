import logo from './logo.svg';
import './App.css';
import AddBus from './Components/AddBus';
import SearchBus from './Components/SearchBus';
import DeleteBus from './Components/DeleteBus';

function App() {
  return (
    <div className="App">
    
    <AddBus/>
    <SearchBus/>
    <DeleteBus/>
    </div>
  );
}

export default App;
