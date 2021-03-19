import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent, {specialChars} from '@testing-library/user-event';

import SearchBar from './SearchBar';

const props = {
    onSubmit: jest.fn()
};

describe('SearchBar', () => {
    test('should update searchTerm on change', () => {
        render(<SearchBar {...props} />);
        userEvent.type(screen.getByRole('textbox'), 'Hello, World!');

        expect(screen.getByRole('textbox')).toHaveValue('Hello, World!');
    });

    test('should call onSubmit when the search button is clicked', () => {
        render(<SearchBar {...props} />);

        userEvent.type(screen.getByRole('textbox'), 'testTerm');
        userEvent.click(screen.getByRole('button'));

        expect(props.onSubmit).toHaveBeenCalledWith('testTerm');
    });

    test('should call onSubmit when the form is submitted', () => {
        render(<SearchBar {...props} />);

        userEvent.type(screen.getByRole('textbox'), 'testTermSubmit');
        userEvent.type(screen.getByRole('textbox'), '{enter}');

        expect(props.onSubmit).toHaveBeenCalledWith('testTermSubmit');
    });
});
