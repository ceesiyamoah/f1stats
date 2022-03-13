import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

function ConstStandings() {
	const { year } = useParams();
	const { data, isLoading, error } = useFetch(
		`/constructors/standings/${year}`
	);
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

export default ConstStandings;
