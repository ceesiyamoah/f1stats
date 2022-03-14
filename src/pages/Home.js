import { Skeleton } from '@mui/material';
import React from 'react';
import Card from '../components/Card/Card';
import useFetch from '../hooks/useFetch';

function Home() {
	const { data, isLoading, error } = useFetch('/seasons');
	if (isLoading)
		return (
			<>
				<Skeleton height={'30vh'} />
				<Skeleton animation='wave' height={'30vh'} />
				<Skeleton animation={false} height={'30vh'} />
			</>
		);
	if (error) {
		return <h1>{error}</h1>;
	}

	if (!data) {
		return <p>No data found</p>;
	}

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
