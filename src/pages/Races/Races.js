import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

function Races() {
	const { year } = useParams();
	const { data, isLoading, error } = useFetch(`races/${year}`);
	if (isLoading) return <h1>Loading...</h1>;
	if (error) {
		return <h1>{error}</h1>;
	}
	console.log(data);

	if (!data) {
		return <p>No data found</p>;
	}
	return <div>{data.length}</div>;
}

export default Races;