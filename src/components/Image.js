import React, { useState } from 'react'
import ReactDOM from "react-dom";
import './../styles/styles.css'
import Download from './Download.js'
import placeHolder from './../img/test.jpg'


const Image = (props) => {
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
		<form className='flex-col-ctr'>
		<div>
		<label className='enterURL' htmlFor='file'>Enter Image URL:</label>
				<input
					type="text"
					id="file"

					name="file"
					onChange={(event) => onImageChange(event)}
				/>
				
		</div>
			<div className="button-box importer flex-row">
		
			
				<Download imageDL={userImage}/>
			</div>
		</form>
		</div>

		
		</>

		)
}

export default Image;