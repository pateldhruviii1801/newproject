// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home1 from './pages/home';
import Musicandvids from './pages/music&vids';
import About from './pages/about';
import Login from './pages/login';
import Register from './pages/registration';
import Blog from './pages/blog';

function App() {
  return (
    <>
<Router>
<Header/>
<Routes>
<Route exact path='/' element={<Home1/>} />
<Route exact path='/music' element={<Musicandvids/>} />
<Route exact path='/about' element={<About/>} />
<Route exact path='/login' element={<Login/>} />
<Route exact path='/register' element={<Register/>} />
<Route exact path='/blog' element={<Blog/>} />

</Routes>
<Footer/>
</Router>
    </>
  );
}

export default App;
