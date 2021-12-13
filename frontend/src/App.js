import { useState } from 'react';

import todoApi from './api/todo.api'
const App = ({ testSubmit }) => {
  const [todo, setTodo] = useState("");
  const [loading, setLoading] = useState(false);
  const addTodo = () => {
    if (testSubmit) {
      testSubmit();
    } else {
      setLoading(true);
      todoApi.add(todo)
        .then((res) => {
          console.log(res);
        })
        .catch(err => console.log(err))
        .finally(() => {
          setTodo("");
          setLoading(false);
        });
    }
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-sky-200 font-mono" id="container">
      <div className="bg-gray-50 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 id="header" className="text-black-700 text-center">Todo List</h1>
          <div className="flex mt-4">
            <input
              id="todo-input"
              className="shadow appearance-none border focus:outline-teal-500 rounded w-9/12 py-2 px-3 mr-4 text-grey-darker"
              required
              value={todo}
              onChange={e => setTodo(e.target.value)}
              placeholder="Add Todo" />
            <button
              type="button"
              id="add-button"
              data-testid="add-button"
              className="inline-flex items-center justify-center w-3/12 p-2 border-2 rounded   border-teal hover:text-white  bg-teal-400 hover:bg-teal-500"
              onClick={addTodo}
              disabled={loading || !todo.length ? true : false}
            >
              {loading ?
                <svg data-testid="loading-svg" className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg> :
                <span className="text-white">Add Todo</span>
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
