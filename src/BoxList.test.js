import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing.', function() {
	render(<BoxList />);
});

it('matches snapshot.', function() {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
});

it('should add new box.', function() {
	const { getByLabelText, getByText } = render(<BoxList />);
	const width = getByLabelText('Width');
	const height = getByLabelText('Height');
	const color = getByLabelText('Color');
	const submitButton = getByText('Add Box');
	fireEvent.change(width, { target: { value: '400px' } });
	fireEvent.change(height, { target: { value: '125px' } });
	fireEvent.change(color, { target: { value: 'purple' } });
	fireEvent.click(submitButton);
	const removeButton = getByText('X');
	expect(removeButton).toBeInTheDocument();
	fireEvent.click(removeButton);
	expect(removeButton).not.toBeInTheDocument();
});
