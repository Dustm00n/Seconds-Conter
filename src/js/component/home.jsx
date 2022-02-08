import React from "react";
import ReactDOM from "react-dom";

//include images into your bundle
import SecondsCounter from "./CounterSeconds.jsx";

let countingNumber = 0;
setInterval(function () {
	let Seis = Math.floor(countingNumber / 100000);
	let Cinco = Math.floor(countingNumber / 10000);
	let Cuatro = Math.floor(countingNumber / 1000);
	let Tres = Math.floor(countingNumber / 100);
	let Dos = Math.floor(countingNumber / 10);
	let Uno = Math.floor(countingNumber / 1);
	countingNumber++;
	ReactDOM.render(
		<SecondsCounter
			digitUno={Uno}
			digitDos={Dos}
			digitTres={Tres}
			digitCuatro={Cuatro}
			digitCinco={Cinco}
			digitSeis={Seis}
		/>,
		document.querySelector("#app")
	);
}, 1000);

export default Home;
