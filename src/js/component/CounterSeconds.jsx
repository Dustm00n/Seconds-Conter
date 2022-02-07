import React from "react";
import PropTypes from "prop-types";
const SecondsCounter = (props) => {
	return (
		<div className="Caja bg-dark">
			<div className="cajita2 main-cotainer d-flex justify-content-center">
				<div className="clock-calendar">
					<i className="far fa-clock"></i>
				</div>
				<div className="Seis">{props.digitSeis % 10}</div>
				<div className="Cinco">{props.digitCinco % 10}</div>
				<div className="Cuatro">{props.digitCuatro % 10}</div>
				<div className="Tres">{props.digitTres % 10}</div>
				<div className="Dos">{props.digitDos % 10}</div>
				<div className="Uno">{props.digitUno % 10}</div>
			</div>
		</div>
	);
};
SecondsCounter.propTypes = {
	digitSeis: PropTypes.number,
	digiCinco: PropTypes.number,
	digitCuatro: PropTypes.number,
	digitTres: PropTypes.number,
	digitDos: PropTypes.number,
	digitUno: PropTypes.number,
};
export default SecondsCounter;
