import React from 'react';

const ESTCard = () => {
	return (
		<div className=' flex flex-col items-center justify-center mb-8'>
			<div className='border border-bc p-5 rounded-lg w-full flex flex-col min-h-60 h-full justify-between'>
				<h1 className='text-[24px] mb-5 flex flex-wrap'>EST. 1999</h1>

				<div>
					<div className='text-[14px] flex flex-col my-3'>
						<span className='text-[8px]'>Born in</span>
						<span className='flex items-center gap-2'>
							<span>Johennesburg</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='19.2px'
								height='12.8px'
								viewBox='0 0 90 60'
							>
								<title>Flag of South Africa</title>
								<defs>
									<clipPath id='t'>
										<path d='m0 0 45 30L0 60z'></path>
									</clipPath>
									<clipPath id='f'>
										<path d='m0 0h90v60H0z'></path>
									</clipPath>
								</defs>
								<path fill='#e03c31' d='m0 0h90v30H45z'></path>
								<path fill='#001489' d='m0 60h90V30H45z'></path>
								<g clipPath='url(#f)' fill='none'>
									<path
										stroke='#fff'
										strokeWidth='20'
										d='m90 30H45L0 0v60l45-30'
									></path>
									<path
										fill='#000'
										stroke='#ffb81c'
										strokeWidth='20'
										clipPath='url(#t)'
										d='m0 0 45 30L0 60'
									></path>
									<path
										stroke='#007749'
										strokeWidth='12'
										d='m0 0 45 30h45M0 60l45-30'
									></path>
								</g>
							</svg>
						</span>
					</div>
					<div className='text-[14px] flex flex-col my-3'>
						<span className='text-[8px]'>Currently live in</span>
						<span className='flex items-center gap-2'>
							<span>Chilliwack</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='19.2px'
								height='12.8px'
								viewBox='0 0 9600 4800'
							>
								<title>Flag of Canada</title>
								<path
									fill='#f00'
									d='m0 0h2400l99 99h4602l99-99h2400v4800h-2400l-99-99h-4602l-99 99H0z'
								></path>
								<path
									fill='#fff'
									d='m2400 0h4800v4800h-4800zm2490 4430-45-863a95 95 0 0 1 111-98l859 151-116-320a65 65 0 0 1 20-73l941-762-212-99a65 65 0 0 1-34-79l186-572-542 115a65 65 0 0 1-73-38l-105-247-423 454a65 65 0 0 1-111-57l204-1052-327 189a65 65 0 0 1-91-27l-332-652-332 652a65 65 0 0 1-91 27l-327-189 204 1052a65 65 0 0 1-111 57l-423-454-105 247a65 65 0 0 1-73 38l-542-115 186 572a65 65 0 0 1-34 79l-212 99 941 762a65 65 0 0 1 20 73l-116 320 859-151a95 95 0 0 1 111 98l-45 863z'
								></path>
							</svg>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ESTCard;
