
 import Home from "./component/home/Home"
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Topoffer from './component/topoffer/Topoffer';
import Grocery from "./component/grocery/Grocery"
import Mobile from "./component/mobile/Mobile"
import Fashion from "./component/Faishon/Fashion"
import Homes from './component/homes/Homes';
import Electronic from './component/Electronic/Electronic';
import Appliances from "./component/appliances/Appliances"
import Travel from './component/travel/Travel';
import Beauty from './component/beauty_toy/Beauty';
import Login from './component/login/Login';
import About from "./component/about/About"
import Contact from "./component/contact/Contact"
import Form2 from './component/register/Form2';
import { useSelector} from 'react-redux'
// import Account from './component/Account/Account';
import Cart from './component/cart/Cart';
const App = () => {
  const checking = useSelector((state) => state.counter.value1)
  return (
    <>
    
    <BrowserRouter>
    
    <Routes>
    
    <Route path="/" element={<Home/>}/>
     
    
    <Route path="/Top-offers" element={<Topoffer/>}/>
    <Route path="/grocery" element={<Grocery/>}/>
    <Route path="/Mobiles" element={<Mobile/>}/>
    <Route path="/Fashion" element={<Fashion/>}/>
    <Route path='/Homes' element={<Homes/>}/>
    <Route path="/Electronics" element={<Electronic/>}/>
    <Route path='/Appliances' element={<Appliances/>}/>
    <Route path="/Travel" element={<Travel/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path='/Beauty-Toys-More' element={<Beauty/>}/>
    <Route path='/Login'  element={checking === false ? <Login   /> :"/"}/>
    <Route path="/Signup" element={<Form2/>}/>
    <Route path="/Cart" element={checking?<Cart/>:<Login/>}/>
    <Route path="*" element={<Form2/>}/>
   

    
   

    
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App