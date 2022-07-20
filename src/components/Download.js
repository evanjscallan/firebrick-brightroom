import React, { useEffect, useState } from "react";
import Image from "./Image";
import html2canvas from "html2canvas";
import screenshot from "image-screenshot";
import "./../styles/styles.css";

const Download = (props) => {
	const [image, setImage] = React.useState(props.imageDL);

	function screenShotImage(e) {
		e.preventDefault()
		if ( image !== null ){
			const img = document.getElementById("imageFormat");
			screenshot(img).download();
		}
	}



	return (
		<>	
			<button className='exportButton' onClick={(e) => screenShotImage(e)}>EXPORT...</button>
		</>
	)};
export default Download;

/*
	//Custom html2canvas METHOD -- DOES NOT ALLOW FOR CSS FILTERS
	async function exportImage(){
		if (image !== null){

			html2canvas(document.querySelector("#imageFormat"), {
				allowTaint: true,
				useCORS: true,
				logging: true,
				taintTest: false,
				crossOrigin: "Anonymous"
			}).then(canvas => {
			    let link = document.createElement('a')
			    const imageURL = canvas.toDataURL('image/jpeg', 1.0)
		
			    link.href = imageURL
			    link.download = ""+canvas+""
			    document.body.appendChild(link)
			    link.click()
			    document.body.removeChild(link)
			    return canvas;
				});
	<button onClick={exportImage}>EXPORT...</button>

*/
