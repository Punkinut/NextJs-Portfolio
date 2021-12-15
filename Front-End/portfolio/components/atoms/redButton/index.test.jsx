import React from 'react';
import { render, screen } from '@testing-library/react';
import RedButton from './index';

describe('Red button tests', () => {
    it('Should render', () => {
        const { container } = render(<RedButton value={'Value'} />);

        expect(container.innerHTML).toBeDefined();
        expect(container.innerHTML).toContain('Value');
    });
});
