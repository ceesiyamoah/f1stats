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

function DriverStandings() {
	const { year } = useParams();
	const { data, isLoading, error } = useFetch(`/drivers/standings/${year}`);
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
	console.log(data);

	if (!data) {
		return <p>No data found</p>;
	}
	return (
		<div>
			<Table
				stickyHeader={true}
				style={{ backgroundColor: 'white', color: 'white' }}
			>
				<TableHead>
					<TableRow>
						<TableCell>Position</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Country</TableCell>
						<TableCell>Points</TableCell>
						<TableCell>Team</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((team) => (
						<TableRow key={team.driver_id}>
							<TableCell>{team.position}</TableCell>
							<TableCell>{team.driver_name}</TableCell>
							<TableCell>{team.nationality}</TableCell>
							<TableCell>{team.points}</TableCell>
							<TableCell>{team.team_name}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}

export default DriverStandings;
