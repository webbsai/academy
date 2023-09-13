interface Props {
	date: Date;
}

function FormattedDate(props: Props) {
	const { date } = props;

	return (
		<time datetime={date.toISOString()}>
			{date.toLocaleDateString('en-us', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			})}
		</time>
	);
}

export default FormattedDate;
