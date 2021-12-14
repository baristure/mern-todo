import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import App from '../App';
import { act } from "react-dom/test-utils";

afterEach(cleanup);

describe('Layout', () => {
    it('has Todo header, input and submit button and todo list', () => {
        render(<App />);
        const header = screen.getByText(/Todo List/i);
        expect(header).toBeInTheDocument();
        const todoInput = screen.getByPlaceholderText("Add Todo");
        expect(todoInput).toBeInTheDocument();
        const button = screen.getByTestId("add-button");
        expect(button).toBeInTheDocument();
        const todoList = screen.getByTestId("todo-list");
        expect(todoList).toBeInTheDocument();
    })
    it('should submit valid todo when click to button', async () => {
        // Arrange
        const mockOnSubmit = jest.fn();
        const { getByPlaceholderText, getByTestId } = render(
            <App testSubmit={mockOnSubmit} />
        );
        // Act
        await act(async () => {
            const todoInput = getByPlaceholderText("Add Todo");
            fireEvent.change(todoInput, {
                target: { value: "Read Book" },
            });
        });
        await act(async () => {
            fireEvent.click(getByTestId("add-button"));
        });
        // Assert
        expect(mockOnSubmit).toHaveBeenCalled();
    })

    it('should not click to button with empty input', async () => {
        // Arrange
        const mockOnSubmit = jest.fn();
        const { getByRole } = render(
            <App testSubmit={mockOnSubmit} />
        );
        // Act
        await act(async () => {
            fireEvent.click(getByRole("button", { name: /Add Todo/i }));
        });
        // Assert
        expect(mockOnSubmit).toHaveBeenCalledTimes(0);
    })
    
})