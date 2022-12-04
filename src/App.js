import './App.css';
import Header from './components/common/header';
import Home from './pages/home'
import Projects from './pages/projects'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route  path='/' element = {<Home/>} />
        <Route path='/projects' element = {<Projects/>}>
        </Route>
      </Routes>
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
