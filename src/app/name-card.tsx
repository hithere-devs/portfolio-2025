import Image from 'next/image';
import React from 'react';

type Props = {};

const NameCard = (props: Props) => {
	return (
		<div className=' flex flex-col items-center justify-center mb-8'>
			<div className='border border-bc p-8 rounded-lg w-full flex flex-col gap-8 relative'>
				<span className='text-[10px] absolute right-4 top-3'>(01)</span>
				<h1 className='text-[24px] mb-5 flex flex-wrap'>
					<span className='mr-1.5'>We'll get there eventually,</span>
					<span>One step at a time</span>
				</h1>
				<p
					className='text-[16px]'
					style={{
						fontFamily: 'Manrope',
					}}
				>
					Hi, I’m Azhar Mahmood, <span className='text-[10px]'>DEVELOPER</span>{' '}
					<br /> Your go-to{' '}
					<span className='underline text-[17px]'>Software Engineer</span> for
					elevating your brand perception. Let's design the experience you want
					to see tomorrow.{' '}
				</p>
				<div>
					<Image
						src={'/sign.svg'}
						className='text-white'
						width={225}
						height={70}
						alt='Signature of the Website Owner'
					/>
				</div>
			</div>
		</div>
	);
};

export default NameCard;
