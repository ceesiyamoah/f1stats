import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Skeleton,
} from '@mui/material';

function ConstStandings() {
	const { year } = useParams();
	const data = [
		{
			position: 0,
			points: '0',
			team_id: 33121,
			team_name: 'Red Bull',
			season: 2022,
		},
		{
			position: 0,
			points: '0',
			team_id: 56525,
			team_name: 'McLaren',
			season: 2022,
		},
		{
			position: 0,
			points: '0',
			team_id: 183197,
			team_name: 'Ferrari',
			season: 2022,
		},
		{
			position: 0,
			points: '0',
			team_id: 31205,
			team_name: 'Alpine',
			season: 2022,
		},
		{
			position: 0,
			points: '0',
			team_id: 58685,
			team_name: 'Mercedes',
			season: 2022,
		},
		{
			position: 0,
			points: '0',
			team_id: 71583,
			team_name: 'Alfa Romeo Racing',
			season: 2022,
		},
		{
			position: 0,
			points: '0',
			team_id: 65311,
			team_name: 'Aston Martin',
			season: 2022,
		},
		{
			position: 0,
			points: '0',
			team_id: 163637,
			team_name: 'Williams',
			season: 2022,
		},
		{
			position: 0,
			points: '0',
			team_id: 199493,
			team_name: 'AlphaTauri',
			season: 2022,
		},
		{
			position: 0,
			points: '0',
			team_id: 143585,
			team_name: 'Haas',
			season: 2022,
		},
	];
	// 	const { data, isLoading, error } = useFetch(
	// 		`/constructors/standings/${year}`
	// 	);
	// 	if (isLoading) return (<>
	// 	<Skeleton height={'30vh'} />
	// 	<Skeleton animation='wave' height={'30vh'} />
	// 	<Skeleton animation={false} height={'30vh'} />
	// </>);
	// 	if (error) {
	// 		return <h1>{error}</h1>;
	// 	}
	// 	console.log(data);

	// 	if (!data) {
	// 		return <p>No data found</p>;
	// 	}
	return (
		<div>
			<Table
				stickyHeader={true}
				style={{ backgroundColor: 'white', color: 'white' }}
			>
				<TableHead>
					<TableRow>
						<TableCell>Position</TableCell>
						<TableCell>Team Name</TableCell>
						<TableCell>Points</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((team) => (
						<TableRow key={team.team_id}>
							<TableCell>{team.position}</TableCell>
							<TableCell>{team.team_name}</TableCell>
							<TableCell>{team.points}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}

export default ConstStandings;
