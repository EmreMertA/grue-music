import SearchBar from '../src/components/SearchBar';
import { fireEvent, render, screen } from '@testing-library/react';

describe('SearchBar', () => {
  test('input', (done) => {
    render(<SearchBar />);
    const input = screen.getByRole('textbox');
    //const input = component.getByTestId('search-input');

    const text = 'Arctic Monkeys';
    fireEvent.change(input, { target: { value: text } });
    expect(input.value).toBe(text);
    done();
  });
});
