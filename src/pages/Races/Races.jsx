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
import { BsFillCheckCircleFill, BsEyeFill } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import BasicMenu from '../../components/Menu';

function Races() {
	const { year } = useParams();

	const { data, isLoading, error } = useFetch(`races/${year}`);
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
			<h1
				style={{
					textAlign: 'center',
					backgroundColor: 'white',
					color: 'var(--primary-color)',
				}}
			>
				{year}
			</h1>
			<Table stickyHeader={true} style={{ backgroundColor: 'white' }}>
				<TableHead styles={{ color: 'inherit' }}>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Track</TableCell>
						<TableCell>Start Date</TableCell>
						<TableCell>End Date</TableCell>
						<TableCell>Status</TableCell>
						<TableCell>View Session</TableCell>
					</TableRow>
				</TableHead>
				<TableBody styles={{ color: 'white' }}>
					{data.map((item) => (
						<TableRow key={item.race_id}>
							<TableCell style={{ whiteSpace: 'nowrap' }}>
								{item.name} ({item.country})
							</TableCell>
							<TableCell>{item.track}</TableCell>
							<TableCell>{item.start_date}</TableCell>
							<TableCell>{item.end_date}</TableCell>
							<TableCell>
								{item.status === 'Confirmed' ? (
									<BsFillCheckCircleFill color='green' />
								) : (
									<MdCancel color='red' />
								)}
							</TableCell>
							<TableCell>
								{item.status === 'Confirmed' ? (
									<BasicMenu options={item.sessions}>
										<BsEyeFill />
									</BasicMenu>
								) : (
									<MdCancel color='red' />
								)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}

export default Races;
