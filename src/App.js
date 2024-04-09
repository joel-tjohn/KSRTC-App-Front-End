import logo from './logo.svg';
import './App.css';
import AddBus from './Components/AddBus';
import SearchBus from './Components/SearchBus';
import DeleteBus from './Components/DeleteBus';
import ViewAll from './Components/ViewAll';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<ViewAll/>}/>
    <Route path='/m' element={<AddBus/>}/>
    <Route path='/s' element={<SearchBus/>}/>
    <Route path='/d' element={<DeleteBus/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
