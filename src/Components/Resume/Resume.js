import React from 'react';

import StyleClass from './Resume.css';
import File from '../../Assets/Manisha_Basra.pdf';

const resume = () => {
	return (
				<div id="Resume" className={StyleClass.resume}>
				    <h2>Hire Me</h2>
				    <hr />
				    <div className="container">
				        <div className="row">
				            <div className={[StyleClass.button_col, "col-md-12"].join(' ')}>
				                <a href={File} target="_black" className={StyleClass.button}>Download My Resume</a>
				            </div>
				        </div>
				    </div>
				</div>
			);
}

export default resume;