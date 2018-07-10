import React from 'react';

import StyleClass from './Contact.css';

const contact = () => {
	return (
		<div id="Contact" className={StyleClass.wrapper}>
	        <div className="row">
				<div className="col-sm-12">
					<h2 className={StyleClass.aboutHeading}>Contact Me</h2>
					<hr />
				</div>
			</div>

	        <p>I am available for hire and I'd Love to hear from you! 
	        <br />
	        {/*Please fill out the form to start the cool new project!*/}</p>

	        <div className={[StyleClass.contact_info, "container"].join(' ')}>
	        	<div className="row">
	        		<div className="col-sm-12 col-md-6">
	        			<div className={StyleClass.vcard}>
	        			    <dl className={[StyleClass.dl, StyleClass.dl_vertical].join(' ')}>
	        			      <dt>E-mail:</dt>
	        			      <dd>
	        			        <a href="mailto:manisha.4918@gmail.com"><i className="fas fa-envelope"></i> 																																																																																																																																																																																																						manisha.4918@gmail.com</a>
	        			      </dd>

	        			      <dt>&nbsp;</dt>
	        			      <dd></dd>

	        			      <dt>LinkedIn:</dt>
	        			      <dd>
	        			        <a href="http://linkedin.com/in/manisha-basra-037095118"><i className="fab fa-linkedin-in"> manisha</i></a>
	        			      </dd>
																																																																												
	        			      <dt>Github:</dt>
	        			      <dd>
	        			        <a href="http://github.com/manisha1896"><i className="fab fa-github"></i> manisha1896</a>
	        			      </dd>

	        			      <dt>AngelList:</dt>
	        			      <dd>
	        			        <a href="https://angel.co/manisha-basra"><i className="fab fa-angellist"></i> manisha-basra</a>
	        			      </dd>

	        			    </dl>
	        			  </div>
	        		</div>
	        		<div className="col-md-6 d-none d-md-block">
	        			<form>
		        			  <div className="form-group">
		        			    	<input className={StyleClass.formControl} type="text" placeholder="Name" />
		        			  </div>
		        			  <div className="form-group">
		        			  		<input className={StyleClass.formControl} type="email" placeholder="E-mail" />
		        			  </div>
		        			  <div className="form-group">
		        			  		<textarea cols="30" rows="5" className={StyleClass.formControl} placeholder="Message"></textarea>
		        			  </div>
		        			  <div className={StyleClass.button_col}>
		        			            <button className={StyleClass.send_e_button}>Send</button>
		        	          </div>
	        			</form>
	        		</div>
	        		{/*<div className="d-md-none">
	        		<p> hidden on large </p>
	        		</div>*/}
	        	</div>
	        </div>
		</div>
	);
}

export default contact;
