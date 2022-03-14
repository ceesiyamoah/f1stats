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
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { randomHexColorCode } from '../../utils';
ChartJS.register(ArcElement, Tooltip, Legend);

function ConstStandings() {
	const { year } = useParams();

	const { data, isLoading, error } = useFetch(
		`/constructors/standings/${year}`
	);
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

	const colors = [
		'#00D2BE',
		'#0600EF',
		'#DC0000',
		'#FF8700',
		'#0090FF',
		'#2B4562',
		'#006F62',
		'#005AFF',
		'#900000',
		'#FFFFFF',
	];
	const dat = {
		labels: data.map((item) => item.team_name),
		datasets: [
			{
				label: '# of Votes',
				data: data.map((item) => +item.points),
				backgroundColor: colors,
				borderColor: colors,
				borderWidth: 1,
			},
		],
	};
	return (
		<div>
			<h1
				style={{
					textAlign: 'center',
					backgroundColor: 'white',
					color: 'var(--primary-color)',
					width: '100vw',
				}}
			>
				{year}
			</h1>
			<Pie
				data={dat}
				style={{
					maxWidth: 'min(90vw,500px)',
					maxHeight: 'min(90vh,500px)',
					paddingBottom: '20px',
					marginLeft: 'auto',
					marginRight: 'auto',
				}}
			/>
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
