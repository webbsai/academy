export type SvgType = {
	className?: string;
	height?: string | number;
	width?: string | number;
};

export function RightArrow({ className }: SvgType) {
	return (
		<svg
			className={className ?? ''}
			width='28'
			height='28'
			viewBox='0 0 28 28'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M23.3334 14L16.3334 7M23.3334 14L16.3334 21M23.3334 14H11.0834M4.66671 14H7.58337'
				stroke='white'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

export function Search({ className, height, width }: SvgType) {
	return (
		<svg
			className={className ?? ''}
			width={height ?? 24}
			height={width ?? 24}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M21 21.0002L16.657 16.6572M16.657 16.6572C17.3998 15.9143 17.9891 15.0324 18.3912 14.0618C18.7932 13.0911 19.0002 12.0508 19.0002 11.0002C19.0002 9.9496 18.7932 8.90929 18.3912 7.93866C17.9891 6.96803 17.3998 6.08609 16.657 5.34321C15.9141 4.60032 15.0321 4.01103 14.0615 3.60898C13.0909 3.20693 12.0506 3 11 3C9.94936 3 8.90905 3.20693 7.93842 3.60898C6.96779 4.01103 6.08585 4.60032 5.34296 5.34321C3.84263 6.84354 2.99976 8.87842 2.99976 11.0002C2.99976 13.122 3.84263 15.1569 5.34296 16.6572C6.84329 18.1575 8.87818 19.0004 11 19.0004C13.1217 19.0004 15.1566 18.1575 16.657 16.6572Z'
				stroke='white'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}
