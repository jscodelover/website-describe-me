import React,{ Component } from 'react';
import $ from 'jquery';

import StyleClass from './About.css';

class About extends Component {

	componentDidMount(){
		$(document).ready(function () {
			$('.html').animate({width:'90%'},2000);
        		$('.css').animate({width:'75%'},2000);
        		$('.js').animate({width:'50%'},2000);
        		$('.php').animate({width:'70%'},2000);
        		$('.ajax').animate({width:'45%'},2000);
		})
		
 
	}

	render(){
		const skills= [{name : 'CSS', level: 70}, {name: 'HTML', level : 80}, {name: 'ReactJS', level : 70}, {name: 'Redux', level : 50}, 
		               {name: 'JS (ES6)', level : 70}, {name: 'NodeJS', level : 50}, {name: 'Python', level : 30}, {name: 'Java', level : 40}];
		return (
			<div id="About" className={StyleClass.wrapper}>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2 className={StyleClass.aboutHeading}>About</h2>
							<hr />
						</div>
					</div>
					<div className="row mt-5">
						<div className="col-md-12 col-lg-6">
							<div>
								<div className={StyleClass.octo}>
								<div className={StyleClass.octo1}>
									<img src="http://farm3.staticflickr.com/2441/3657346647_a11111ed39_z.jpg?zz=1" alt="" width="'320'" height="316" />
								</div>
								</div>
								<div className={StyleClass.intro}>
									<p className={StyleClass.ques}>Who Am I ?</p>
									<p>I have done <span className={StyleClass.highlight}>Btech</span> in <span className={StyleClass.highlight}>Computer Science </span> 
									 with <span className={StyleClass.highlight}>CGPA 8.5</span>
									<br />
									 I am available for website development and design work. I am growing my skill set daily and excited to take on greater
									 challenges. In the project section of my portfolio, link of some websites are given.
									</p>
								</div>
							</div>

						</div>	
						<div className="col-md-12 col-lg-6">	
							<h2>Skills</h2>
							{
								skills.map(skill => {
									return (
												<div className={StyleClass.progressBar} key={skill.name}>
													<div className={StyleClass.title}>{skill.name}</div>
													<div className={StyleClass.progress} style={{width : `${skill.level+10}%`}}></div>
													<div className={StyleClass.progress_value}>{skill.level}%</div>
												</div>
										   );
								})
							}
								
						</div>							
					</div>
					<div className="row mt-4">
						<div className={['col-sm-6', 'col-lg-4', StyleClass.hobbyDiv].join(' ')}>	
							<i className="fa-3x fa fa-code"></i>
							<h3 className={StyleClass.imageHead}>Programming</h3>
							<p >It's pretty much everything I do all day</p>
						</div>	
						<div className={['col-sm-6', 'col-lg-4', StyleClass.hobbyDiv].join(' ')}>	
							<i className="fa-3x fa fa-book-open"></i>
							<h3 className={StyleClass.imageHead}>Reading</h3>
							<p >I love reading books, and it's one of the things I do before sleeping.</p>
						</div>		
						<div className={['col-sm-12', 'col-lg-4', StyleClass.hobbyDiv].join(' ')}>
							<i className="fa-3x fa fa-music"></i>
							<h3 className={StyleClass.imageHead}>Music</h3>
							<p >I love music, and it's part of my daily routine to listen to music.</p>
						</div>	
					</div>
				</div>	
			</div> 
		   );
	}
} 

export default About;																																																																																																																									