import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card/Card';
import useFetch from '../hooks/useFetch';

function Home() {
	// const { data, isLoading, error } = useFetch('/seasons');
	// if (isLoading) return <h1>Loading...</h1>;
	// if (error) {
	// 	return <h1>{error}</h1>;
	// }
	// console.log(data);

	// if (!data) {
	// 	return <p>No data found</p>;
	// }

	const data = [
		{
			season: '2022',
		},
		{
			season: '2021',
		},
		{
			season: '2020',
		},
		{
			season: '2019',
		},
	];

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexWrap: 'wrap',
			}}
		>
			{data.map(({ season }) => (
				<Card key={season} year={season} />
			))}
		</div>
	);
}

export default Home;
