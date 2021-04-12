import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

const BoxList = () => {
	// const INITIAL_STATE = [ { id: uuid(), width: '150px', height: '300px', color: 'blue' } ];
	const INITIAL_STATE = [];

	const [ boxes, setBoxes ] = useState(INITIAL_STATE);

	const addBox = newBox => {
		setBoxes(boxes => [ ...boxes, { ...newBox, id: uuid() } ]);
	};

	const removeBox = id => {
		setBoxes(boxes.filter(b => b['id'] !== id));
	};

	return (
		<div>
			<NewBoxForm addBox={addBox} />
			<div>
				{boxes.map(({ id, width, height, color }) => (
					<Box id={id} width={width} height={height} color={color} key={id} removeBox={() => removeBox(id)} />
				))}
			</div>
		</div>
	);
};

export default BoxList;
