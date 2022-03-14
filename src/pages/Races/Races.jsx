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
import { BsFillCheckCircleFill, BsEyeFill, BsClockFill } from 'react-icons/bs';
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

	if (!data) {
		return <p>No data found</p>;
	}

	const returnStatus = (status) => {
		let BaseIcon;
		console.log(status);
		switch (status) {
			case 'Confirmed':
				BaseIcon = <BsFillCheckCircleFill color='grey' />;
				break;
			case 'Complete':
				BaseIcon = <BsFillCheckCircleFill color='green' />;
				break;
			case 'Postponed':
				BaseIcon = <BsClockFill />;
				break;

			case 'Cancelled':
				BaseIcon = <MdCancel color='red' />;
				break;
			default:
				BaseIcon = <BsFillCheckCircleFill color='green' />;

				break;
		}
		return BaseIcon;
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
							<TableCell>{returnStatus(item.status)}</TableCell>
							<TableCell>
								{item.sessions.length > 0 ? (
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
