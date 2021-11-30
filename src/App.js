import logo from './logo.svg';
import './App.css';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProductList from './components/productList/productList';
import Contact from './components/contact/Contact';
import Menubar from './components/MenuBar/MenuBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blogs from './components/Blogs/Blogs';


function App() {
  return (
    <div className="App">
      {/* <Menubar></Menubar>
      <Intro></Intro>
      <About></About>
      <ProductList></ProductList>
      <Contact></Contact> */}


      <Router>
        <Menubar></Menubar>
        <Switch>
          
          <Route exact path="/">
            <Intro></Intro>
            <About></About>
            <ProductList></ProductList>
            <Contact></Contact>
          </Route>
          <Route path="/home">
            <Intro></Intro>
            <About></About>
            <ProductList></ProductList>
            <Contact></Contact>
          </Route>
          
          
          
          <Route path="/projects">
            <ProductList></ProductList>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          

        </Switch>
      
      </Router>

      
    </div>
  );
}

export default App;
