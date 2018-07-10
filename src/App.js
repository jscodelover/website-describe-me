import React, { Component } from 'react';

import StyleClass from './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
    	<div className={StyleClass.wrapper}>
	        <Home />
	        <About />
	        <Projects />
	        <Resume />
	        <Contact />
	        <Footer />
	    </div>
    );
  }
}

export default App;



/*

@import url('https://fonts.googleapis.com/css?family=Raleway:400,600,700,700i');
 font-family: 'Raleway', sans-serif;


*/ 