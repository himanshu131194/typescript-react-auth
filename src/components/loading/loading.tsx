import './loading.scss';

type Size = {
	width: string;
	height: string;
};

function Loading({ width = '2rem', height = '2rem' }: Size): JSX.Element {
	return (
		<div className="spinner-grow" role="status" style={{ width, height }}>
			<span className="visually-hidden">Loading...</span>
		</div>
	);
}

export default Loading;
