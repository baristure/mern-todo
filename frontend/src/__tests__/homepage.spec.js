import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Layout',()=>{
    it('has Todo header',()=>{
        render(<App />);
        const header = screen.getByText(/Todo List/i);     
        expect(header).toBeInTheDocument();
    })
})