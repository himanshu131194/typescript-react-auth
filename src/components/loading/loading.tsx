import './loading.scss';

type Size = {
	width: string;
	height: string;
};

function Loading({ width, height }: Size): JSX.Element {
	return (
		<p className="text-center vertical-center">
			<div
				className="spinner-grow"
				role="status"
				style={{ width, height }}
			>
				<span className="visually-hidden">Loading...</span>
			</div>
		</p>
	);
}

export default Loading;
