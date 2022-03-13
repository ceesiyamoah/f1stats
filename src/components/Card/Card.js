import React from 'react';
import './card.scss';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { FaFlagCheckered, FaTrophy } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
function Card({ year }) {
	const navigate = useNavigate();
	const onClickRaces = () => {
		navigate(`/races/${year}`);
	};
	const onClickDriver = () => {
		navigate(`/driverstandings/${year}`);
	};
	const onClickConst = () => {
		navigate(`/constructorstandings/${year}`);
	};

	return (
		<div className='card'>
			<h1>{year}</h1>
			<div className='options'>
				<FaFlagCheckered
					title='Races'
					className='icon'
					onClick={onClickRaces}
				/>
				<GiFullMotorcycleHelmet
					title='Driver Standings'
					className='icon'
					onClick={onClickDriver}
				/>
				<FaTrophy
					title='Constructor Standings'
					className='icon'
					onClick={onClickConst}
				/>
			</div>
		</div>
	);
}

export default Card;
