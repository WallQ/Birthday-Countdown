import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Confetti from 'react-confetti';
import TimeCards from './TimeCards';

interface Props {
	birthdayDate: number;
}

const Countdown: React.FunctionComponent<Props> = ({ birthdayDate }) => {
	const [finish, setFinish] = useState<boolean>(false);
	const [countdownResult, setCountdownResult] = useState<any>({});
	useEffect(() => {
		const tick = setInterval(() => {
			let currentMoment = new Date().getTime();
			let distance = birthdayDate - currentMoment;
			let days = Math.floor(distance / (1000 * 60 * 60 * 24));
			let hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			let minutes = Math.floor(
				(distance % (1000 * 60 * 60)) / (1000 * 60)
			);
			let seconds = Math.floor((distance % (1000 * 60)) / 1000);
			setCountdownResult({
				days,
				hours,
				minutes,
				seconds,
			});
			if (distance < 0) setFinish(true);
		}, 1000);
		return () => {
			clearInterval(tick);
		};
	}, []);

	if (finish)
		return (
			<React.Fragment>
				<div className='flex flex-row items-center justify-center gap-x-2 align-middle'>
					<h1 className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-6xl font-extrabold uppercase tracking-wider text-transparent'>
						Happy Birthday!
					</h1>
					<span className='text-5xl'>🎉</span>
				</div>
				<Confetti />
			</React.Fragment>
		);

	return (
		<div className='flex flex-col flex-wrap items-center justify-center gap-y-6 align-middle'>
			<TimeCards
				days={countdownResult.days}
				hours={countdownResult.hours}
				minutes={countdownResult.minutes}
				seconds={countdownResult.seconds}
			/>
			<h1 className='text-4xl font-extrabold uppercase tracking-wider text-white'>
				{moment(birthdayDate).format('YYYY MMM DD')}
			</h1>
		</div>
	);
};

export default Countdown;
