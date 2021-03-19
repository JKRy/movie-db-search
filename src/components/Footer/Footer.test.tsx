import React from 'react';
import {render, screen} from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
    test('should render Footer without crashing', () => {
        render(<Footer />);
        screen.getByText('© 2021 Jessica Ryan');
    });
});
