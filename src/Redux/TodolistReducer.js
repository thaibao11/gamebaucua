import { ToDoListDarkTheme } from "../JSS_StyleComponent/Themes/TodoListDarkTheme";
import { arrTheme } from "../JSS_StyleComponent/Themes/ThemeManager";
const stateTodo = {
  theme: ToDoListDarkTheme,
  todos: [],
};

const TodoListReducer = (state = stateTodo, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD": {
      if (action.todo.name === "") {
        alert("vui long nhap gi do");
      } else {
        state.todos = [...state.todos, action.todo];
      }
    }

    case "change_theme": {
      let theme_present = arrTheme.find((theme) => theme.id === action.id);

      if (theme_present) {
        state.theme = { ...theme_present.theme };
      }

      console.log({ ...state });
      return { ...state };
    }
    case "remove_task": {
      console.log(state.todos);
      state.todos = state.todos.filter((todo) => todo.id !== action.value.id);
      state.todos = [...state.todos];
      return { ...state };
    }

    case "check_task": {
      let index = state.todos.findIndex((item) => item.id === action.value.id);
      if (index !== -1) {
        state.todos[index] = { ...action.value, done: true };
        state.todos = [...state.todos];
      }

      console.log(state.todos);
      return { ...state };
    }
  }
  return { ...state };
};

export default TodoListReducer;
