const Todo = ({ todo, index }) => {
    return (
        <div id={"todo-" + index} className="todo flex todo mb-3 items-center border-sky-200 border-2 hover:border-sky-400 rounded-lg">
            <p className="w-full py-2 px-3 ml-1 text-grey-darkest break-words">{todo.content}</p>
        </div>
    );
}
export default Todo;