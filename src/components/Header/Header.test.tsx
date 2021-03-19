import React from 'react';
import {render, screen} from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
    test('should render Header without crashing', () => {
        render(<Header />);
        screen.getByRole('heading');
    });

    test('should render a logo image', () => {
        render(<Header />);
        screen.getByAltText('Logo');
    });
});
