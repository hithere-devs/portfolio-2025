import React from 'react';

const LocationCard = () => {
	return (
		<div className=' flex flex-col items-center justify-center mb-8'>
			<div className='border border-bc p-5 rounded-lg w-full flex flex-col text-right min-h-60 h-full justify-between'>
				<h3>49.1579° N 121.9515° W</h3>
				<h1 className='text-[24px] w-full'>11:00 IST</h1>
			</div>
		</div>
	);
};

export default LocationCard;
