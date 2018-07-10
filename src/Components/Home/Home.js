import React from 'react';

import StyleClass from './Home.css';
import Navigation from '../Navigation/Navigation';

const home = () => {
	return (
		<div id="Home" className={StyleClass.wrapper}>
			<div className={StyleClass.stars}></div>
			<div className={StyleClass.stars2}></div>
			<Navigation />
			<div className={StyleClass.flex}>
			    <div className={StyleClass.text}>
			       Hello, I'm <span className={StyleClass.highlight}>Manisha Basra</span>.
			       <br />
			       I'm a Web Developer.
			    </div>
			    <button className={StyleClass.btn}>View My Work &nbsp;
			    	<i className={[StyleClass.rotateArrow, 'fas', 'fa-angle-right'].join(' ')}></i>
			    </button>
			</div>     
		</div>
	);
}

export default home;
