import React from "react";
import Image from "./Image";
import hueScale from './../img/hueScaleRefactored.png'

const HSB = () => {
	//Primary Edit Tools
	const [satVal, setSatVal] = React.useState(100);
	const [brightnessVal, setBrightnessVal] = React.useState(100);
	const [contrastVal, setContrastVal] = React.useState(100);
	const [hueVal, setHueVal] = React.useState(0);
	//Color Channel Shift 
	const [red1Val, setRed1Val] = React.useState(0);
	const [blue1Val, setBlue1Val] = React.useState(0);
	const [green1Val, setGreen1Val] = React.useState(0);

	const onSatChange = (e) => {
		document.querySelector("#imageFormat");
		setSatVal(e.target.value);
	};

	const onContrastChange = (e) => {
		document.querySelector("#imageFormat");
		setContrastVal(e.target.value);
	};

	const onBrightnessChange = (e) => {
		document.querySelector("#imageFormat");
		setBrightnessVal(e.target.value);
	};

	const onHueChange = (e) => {
		document.querySelector("#imageFormat");
		setHueVal(e.target.value);
	};


	const onRed1Change = (e: number) => {
		document.querySelector("#imageFormat");
		setRed1Val(e.target.value);
	};

	const onBlue1Change = (e: number) => {
		document.querySelector("#imageFormat");
		setBlue1Val(e.target.value);
	};

	const onGreen1Change = (e: number) => {
		document.querySelector("#imageFormat");
		setGreen1Val(e.target.value);
	};


	const resetButton = (event: number) => {
		document.querySelector("#mainImage");
		setSatVal(100);
		setBrightnessVal(100);
		setContrastVal(100);
		setHueVal(0);

	};

	return (
		<>	

			<Image
				sat="saturate"
				satVal={satVal}
				contrast="contrast"
				contrastVal={contrastVal}
				brightness="brightness"
				brightnessVal={brightnessVal}
				hue="hue-rotate"
				hueVal={hueVal}
			/>

		<div className='control-panel-primary'>		
		
				<h2 style={{'text-align': 'center'}}>Controls</h2>
				<label htmlFor="brightness" className="sliderlist">
					Brightness
				</label>
				<input
					id="brightness"
					type="range"
					max={200}
					value={brightnessVal}
					onChange={(e) => onBrightnessChange(e)}
				/>

				<label htmlFor="sat" className="sliderlist">
					Saturation
				</label>
				<input
					id="sat"
					type="range"
					max={200}
					value={satVal}
					onChange={(e) => onSatChange(e)}
				/>

				<label htmlFor="contrast" className="sliderlist">
					Contrast
				</label>
				<input
					id="sat"
					type="range"
					max={200}
					value={contrastVal}
					onChange={(e) => onContrastChange(e)}
				/>

				<label htmlFor="hue" className="sliderlist">
					Hue
				</label>
				<input
					id="hue"
					type="range"
					max={360}
					value={hueVal}
					onChange={(e) => onHueChange(e)}
				/>
				<img
					className="hueScale"
					src={hueScale}
					alt="hue scale"/>

		</div>
			
		</>
	);
};
export default HSB;
