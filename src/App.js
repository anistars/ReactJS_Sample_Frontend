import './App.css';
import NavBar  from './components/Navbar';
import All_Products from './components/All_Products';

import{
  BrowserRouter as Router,
  Route,
  Routes 
} from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
      <NavBar/>
      
      <Routes>
        <Route exact path='/' element={<All_Products key="" category=""/>}></Route>
        <Route exact path='/blush' element={<All_Products key="blush" category="blush"/>}></Route>
        <Route exact path='/bronzer' element={<All_Products key="bronzer" category="bronzer"/>}></Route>
        <Route exact path='/eyeliner' element={<All_Products key="eyeliner" category="eyeliner"/>}></Route>
        <Route exact path='/eyebrow' element={<All_Products key="eyebrow" category="eyebrow"/>}></Route>
        <Route exact path='/eyeshadow' element={<All_Products key="eyeshadow" category="eyeshadow"/>}></Route>
        <Route exact path='/foundation' element={<All_Products key="foundation" category="foundation"/>}></Route>
        <Route exact path='/lip_liner' element={<All_Products key="lip_liner" category="lip_liner"/>}></Route>
      </Routes>
      </Router>
    </div>
      
    
  );
}

export default App;
