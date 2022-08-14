interface Props {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

const TimeCards: React.FunctionComponent<Props> = ({
	days,
	hours,
	minutes,
	seconds,
}) => {
	return (
		<div className='flex flex-row flex-wrap items-center justify-center gap-x-4 align-middle'>
			<div className='flex h-32 w-32 flex-col items-center justify-center gap-y-1 rounded-md bg-white align-middle'>
				<span className='text-4xl font-bold uppercase text-gray-900'>
					{days}
				</span>
				<span className='text-xl font-bold uppercase text-gray-600'>
					Days
				</span>
			</div>
			<div className='flex h-32 w-32 flex-col items-center justify-center gap-y-1 rounded-md bg-white align-middle'>
				<span className='text-4xl font-bold uppercase text-gray-900'>
					{hours}
				</span>
				<span className='text-xl font-bold uppercase text-gray-600'>
					Hours
				</span>
			</div>
			<div className='flex h-32 w-32 flex-col items-center justify-center gap-y-1 rounded-md bg-white align-middle'>
				<span className='text-4xl font-bold uppercase text-gray-900'>
					{minutes}
				</span>
				<span className='text-xl font-bold uppercase text-gray-600'>
					Minutes
				</span>
			</div>
			<div className='flex h-32 w-32 flex-col items-center justify-center gap-y-1 rounded-md bg-white align-middle'>
				<span className='text-4xl font-bold uppercase text-gray-900'>
					{seconds}
				</span>
				<span className='text-xl font-bold uppercase text-gray-600'>
					Seconds
				</span>
			</div>
		</div>
	);
};

export default TimeCards;
