import React, { Component } from 'react';
import $ from 'jquery';

import StyleClass from './Navigation.css';
import SideBar from './SideBar/SideBar';

class Navigation extends Component {
	state={
		screenWidth : window.innerWidth,
		navItems : ['Home', 'About', 'Projects', 'Resume', 'Contact'],
		showMenu : false
	}
	componentDidMount(){
		$(window).resize(() => {
		    this.setState({screenWidth : window.innerWidth});
		});


		[0,1,2,3,4].forEach(i => {
			$( "#"+i ).click(() => {
				$('html, body').animate({
					scrollTop:$('#'+this.state.navItems[i]).offset().top - 48
				}, 'slow');
			});
		});
			

	}
	toggleMenu= () =>{
		let prevState = this.state.showMenu;
		this.setState({showMenu : !prevState});
	}
	render() {
		return (
					<nav>
						{this.state.screenWidth <768 ? 
							<SideBar items={this.state.navItems} toggle={this.toggleMenu} show={this.state.showMenu}/> 
	 						:
							<ul className={StyleClass.nav_list_items}>
								{ this.state.navItems.map( (v,i) => {
										let address = '#'+v;
										return <li key={v}><a id={i} href={address}>{v}</a></li>
								   })
							    }
							</ul>
						}
					</nav>	
	           ); 
	}
}


export default Navigation;


		// $( "#0" ).click(function() {
		// 	$('html, body').animate({
		// 		scrollTop:$('#Home').offset().top - 48
		// });
		// $( "#1" ).click(function() {
		// 	$('html, body').animate({
		// 		scrollTop:$('#About').offset().top - 48
		// 	}, 'slow');
		// })