import React, { useState, useEffect } from 'react';
import Map from './components/Map';

function App() {
	const [ eventData, setEventData ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		const getEvents = async () => {
			setLoading(true);
			const res = await axios.get('https');
			const { events } = await axios.get('', res.json());

			setEventData(events);
			setLoading(false);
		};
	});

	return (
		<div className="App">
			<Map />
		</div>
	);
}

export default App;
