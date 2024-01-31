import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import Stats from './Stats';

expect.extend({ toBeInTheDocument });

describe('Stats Component', () => {
    const mockStats = [
        { title: 'Attack', content: '80' },
        { title: 'Defense', content: '70' },
    ];

    it('renders stats correctly', () => {
        render(<Stats stats={mockStats} />);

        console.log('Component rendered successfully.');
        expect(screen.getByText('Pokemon Stats')).toBeInTheDocument();

        mockStats.forEach(({ title, content }) => {
            console.log(`Checking for stat: ${title}`);
            expect(screen.getByText(title)).toBeInTheDocument();
            
            console.log(`Checking for content: ${content}`);
            expect(screen.getByText(content.toString())).toBeInTheDocument();
        });

        console.log('Test completed.');
    });
});
