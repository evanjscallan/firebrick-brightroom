import './../styles/styles.css'
import React, { useRef, useState } from 'react';
import Image from './Image.js'
import HSB from './HSB.js'
import Download from './Download.js'
import html2canvas from 'html2canvas';

import fireBrickIcon from "./../img/Logo.png";

const Layout = () => {
	
	return(
		<>
		<div className='layout flex-col-ctr'>
	
			<div className='titleText flex-row'>
				<img
					className="icon-main"
					src={fireBrickIcon}
					alt="logo icon"
				/>
				<h1>Fire-Brick Brightroom&trade;</h1>
			</div>
				<HSB/>
			</div>
		</>

		)
}


export default Layout