import './Box.css';

const Box = ({ id, width = '200px', height = '200px', color = 'blue', removeBox }) => {
	return (
		<div className="Box">
			<div className="Box-box" style={{ width: `${width}`, height: `${height}`, backgroundColor: `${color}` }} />
			<button className="Box-button" onClick={removeBox}>
				X
			</button>
		</div>
	);
};

export default Box;
