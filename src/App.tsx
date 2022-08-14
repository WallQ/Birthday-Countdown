import React, { ChangeEvent, useState } from 'react';
import Countdown from './components/Countdown';
import moment from 'moment';

import PeepoHappy from './assets/Peepo Happy.svg';

const App: React.FunctionComponent = () => {
	const currentDate = moment(new Date(Date.now()))
		.add(1, 'day')
		.format('YYYY-MM-DD');
	const [birthdayDate, setBirthdayDate] = useState<number>(NaN);
	const [showCountdown, setShowCountdown] = useState<boolean>(false);

	const handleBirthdayDateChange = (event: ChangeEvent<HTMLInputElement>) => {
		setBirthdayDate(new Date(event.target.value).getTime());
	};

	const handleSubmitButton = () => {
		if (!isNaN(birthdayDate)) setShowCountdown(true);
	};

	return (
		<div className='relative m-auto flex h-screen flex-col items-center justify-center bg-gray-900'>
			<img
				src={PeepoHappy}
				alt='Peepo Happy'
				className='absolute bottom-0 left-0 h-96 w-96'
			/>
			{!showCountdown ? (
				<div className='flex flex-col flex-wrap gap-y-6'>
					<h1 className='text-4xl font-extrabold uppercase tracking-wider text-white'>
						Enter your birthday Date 📅🥳
					</h1>
					<div className='flex flex-row flex-wrap items-center justify-center gap-x-4 align-middle'>
						<input
							type='date'
							name='BirthdayDate'
							onChange={(event) =>
								handleBirthdayDateChange(event)
							}
							min={currentDate}
							required={true}
							className='rounded-md border-none px-4 py-2 text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500'
						/>
						<button
							type='button'
							onClick={handleSubmitButton}
							className='flex flex-row items-center justify-center rounded-md border-none bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-4 py-2 align-middle text-base font-medium text-white shadow-sm hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white'>
							Submit
						</button>
					</div>
				</div>
			) : (
				<Countdown birthdayDate={birthdayDate} />
			)}
		</div>
	);
};

export default App;
