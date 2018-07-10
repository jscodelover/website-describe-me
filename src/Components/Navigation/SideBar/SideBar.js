import React from 'react';

import StyleClass from './SideBar.css';
import Aux from '../../../hoc/Aux';

const sidebar = props => {
	let classes=[StyleClass.menuIcon, 'fas', 'fa-align-justify'];
	let hint="Menu";
	if(props.show){
		classes= ['far', 'fa-times-circle', StyleClass.menuIcon];
		hint="Close";
	}
	return (
 				<Aux>
 					<i className={classes.join(' ')} title={hint} onClick={props.toggle}></i>
 					{
 						props.show ? 
 						<ul className={StyleClass.sidebar_items}>
 							{
 								props.items.map(v => {
 									let address = '#'+v;
									return <li key={v}><a  href={address} onClick={props.toggle}>{v}</a></li>
 								})
 							}	
 						</ul>
 						:
 						null	
 					}
 				</Aux>
		   );
}

export default sidebar;