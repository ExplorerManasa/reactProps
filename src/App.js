//import ClassComponent from './ClassComponent'
//import PropsExample from './PropsExample'
import StateExample from './StateExample'
import FuncProps from './FuncProps'
import DemoExample from './DemoExample'
import Events from './Events'
import JSX from './JSX'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'

  
  function App(){
  return(
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
    

   {/*<StateExample/>
   {/* //<JSX/>
  <Events/>
    <DemoExample price="this is manasa"/>
    <DemoExample cost="this is renu"/>*/}



     {/*<section>
    <PropsExample name="manasa" age="20"/>
    <PropsExample name="renu" age="23"/>
      <p>chinni</p>
      <h1>manasa</h1>
      <img src="https://images.immediate.co.uk/production/volatile/sites/4/2018/07/GettyImages-175622118-5109db9.jpg?quality=90&resize=768,574" width="20%" alt="firstimage"/>
      <ClassComponent/>
      </section>*/}
   {/*   <StateExample/>
        <FuncProps carname="rolls royce" year="1998"/>
        <h1>good afternoon</h1>
      </div>*/}
      </div>

      )
}
export default App