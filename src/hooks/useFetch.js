import axios from 'axios';
import { useEffect, useState } from 'react';

const baseURL = 'https://f1-live-motorsport-data.p.rapidapi.com';

/**
 *
 * @param {string} url assume a base url of https://f1-live-motorsport-data.p.rapidapi.com so append just need part eg. /seasons
 * @returns data, isloading and error message associated if any
 */
function useFetch(url) {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const controller = new AbortController();
		setIsLoading(true);
		setData(null);
		setError(null);
		axios
			.get(url, {
				baseURL,
				signal: controller.signal,
				headers: {
					'x-rapidapi-host': 'f1-live-motorsport-data.p.rapidapi.com',
					'x-rapidapi-key':
						'585385de78mshcbb60f3d5da2a4ep11fe8ejsn0b4c4a8bd1d3',
				},
			})
			.then(({ data }) => {
				console.log(data);
				setData(data.results);
				setError(null);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				setError('An Error occured');
			});

		return () => {
			controller.abort();
		};
	}, [url]);

	return { isLoading, data, error };
}

export default useFetch;
