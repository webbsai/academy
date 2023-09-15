import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

function CarouselSection() {
	return (
		<Splide
			hasTrack={false}
			options={{
				height: 'auto',
				perPage: 1,
				gap: '2rem',
				arrows: false,
				type: 'loop',
				pauseOnHover: false,
				perMove: 1,
				pagination: false,
				autoplay: true,
				padding: '4rem',
			}}
		>
			<SplideTrack>
				<SplideSlide>
					<div>
						<h4 className='px-2 text-[#1565C0]'>TEST</h4>
					</div>
				</SplideSlide>
			</SplideTrack>
		</Splide>
	);
}

export default CarouselSection;
