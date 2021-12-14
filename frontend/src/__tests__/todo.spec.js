import { render, screen, cleanup } from '@testing-library/react';
import Todo from '../components/todo';
 
afterEach(cleanup);
describe('Todo Component', () => {
    it('should have Todo content', () => {
        render(<Todo todo={{content:"Read Book"}} />);
        const todo = screen.getByText(/Read Book/i);
        expect(todo).toBeInTheDocument();
    })
});