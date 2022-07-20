import React, { useState } from 'react'
import ReactDOM from "react-dom";
import './../styles/styles.css'
import Download from './Download.js'
import placeHolder from './../img/test.jpg'
import SMPTE from './../img/SMPTE_color_bars.jpg'


const Image = (props, {children}) => {
	let [ userImage, setUserImage ] = React.useState(placeHolder)

	async function onImageChange(event){
		if (event.target.value !== ""){
			await fetch(event.target.value).then(data =>
				setUserImage(event.target.value)
				)
		}
		if (event.target.value === ""){
			setUserImage(placeHolder)
		}
	}

	function handleClickCalibrate(event){
		event.preventDefault()
		setUserImage(SMPTE)
	}

	return(

		<>

		<div className='image-container'>
			<img 
			id='imageFormat'
			src={userImage}
			crossOrigin="Anonymous"
			contentEditable="true"
			style={{
				filter: 
					`${props.sat}(${props.satVal}%)
					 ${props.contrast}(${props.contrastVal}%)
					 ${props.brightness}(${props.brightnessVal}%)
					 ${props.hue}(${props.hueVal}deg)`,}}/>
	
		</div>

		<div>
		<form>
		<div >
		<label className='enterURL'htmlFor='file'>ENTER IMG URL:</label>

				<input
					type="text"
					id="file"
					name="file"
					onChange={(event) => onImageChange(event)}
				/>

				<div>
					
					<Download imageDL={userImage}/>
					<button onClick={event => handleClickCalibrate(event)}>CALIBRATE</button>
				</div>
				
		</div>
		</form>
		
		
		</div>

		
		</>

		)
}

export default Image;