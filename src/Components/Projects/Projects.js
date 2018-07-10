import React from 'react';

import StyleClass from './Projects.css';
import burger from '../../Assets/burger.png';
import doc from '../../Assets/doc.png';
import mg from '../../Assets/mg.png';

const projects = () => {
	return (
		<div id="Projects" className={StyleClass.wrapper}>
			<div className="projectBlock">
				<div className="row">
					<div className="col-sm-12">
						<h2 className={StyleClass.aboutHeading}>Projects</h2>
						<hr />
					</div>
				</div>
				<div className="row">
					<div className={['col-sm-6', 'col-lg-4', StyleClass.projectCont].join(' ')}>	
						<a href="https://burger-builder-app1.firebaseapp.com/" target="_blank">
						    <img src={burger} alt="burger" className={StyleClass.src} />
						    <div className={StyleClass.middle}>
						        <div className={StyleClass.text}>
						        	ReactJS
						        	<br />
						        	Burger Builder website it build burger acc to user choose. This website uses firebase for the database.
						        </div>
						    </div>
						</a>
					</div>	
					<div className={['col-sm-6', 'col-lg-4', StyleClass.projectCont].join(' ')}>	
						<a href="https://doc-builder-app.firebaseapp.com/" target="_blank">
						    <img src={doc} alt="doc" className={StyleClass.src} />
						    <div className={StyleClass.middle}>
						        <div className={StyleClass.text}>
						            ReactJS
						            <br />
						            Doc-Creator is website in which more than 1 user can build the doc by sharing the link or profile. Doc creator also give us information about how many users are working on particular doc.
						        </div>
						    </div>
						</a>
					</div>	
					<div className={['col-sm-6', 'offset-sm-3' , 'col-lg-4', StyleClass.projectCont].join(' ')}>	
						<a href="https://limitless-thicket-76604.herokuapp.com/" target="_blank">
						    <img src={mg} alt="mg" className={StyleClass.src} />
						    <div className={StyleClass.middle}>
						        <div className={StyleClass.text}>
						            NodeJS
						            <br />
						            Multiplier Game is simple website which is build using socket.io. If link is open in 4 tabs then there will be 4 rocket on all the tabs with each user having a control to his rocket.
						        </div>
						    </div>
						</a>
					</div>	
				</div>
			</div>	
		</div>
	);
}

export default projects;
