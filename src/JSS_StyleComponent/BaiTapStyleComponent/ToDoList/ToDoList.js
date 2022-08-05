import React, { Component } from "react";
import { Container } from "../../ComponentTodoList/Container";
import { TodoListDarkTheme } from "../../Themes/TodoListDarkTheme";
import { TodoListLightTheme } from "../../Themes/TodoListLightTheme";
import { ToDoListPrimaryTheme } from "../../Themes/ToDoListPrimaryTheme";
import { ThemeProvider } from "styled-components";
import { Dropdown } from "../../ComponentTodoList/Dropdown";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../../ComponentTodoList/Heading";
import { TextField, Label, Input } from "../../ComponentTodoList/TextField";
import { Button } from "../../ComponentTodoList/Button";
import { Table, Tr, Td, Th, Thead, Tbody } from "../../ComponentTodoList/Table";
import { connect } from "react-redux";
import { arrTheme } from "../../Themes/ThemeManager";
class ToDoList extends Component {
  state = {
    value_input: "",
  };
  getValue = (e) => {
    this.setState({
      value_input: e.target.value,
    });
  };

  renderTaskList = () => {
    return this.props.todos
      .filter((todo) => !todo.done)
      .map((todo, index) => {
        return (
          <>
            <Tr key={index}>
              <Th>{todo.name}</Th>
              <Th className="text-right">
                <Button>
                  <i
                    className="fa fa-edit"
                    onClick={() => this.props.editTask(todo)}
                  ></i>
                </Button>
                <Button>
                  <i
                    className="fa fa-check"
                    onClick={() => this.props.checkTask(todo)}
                  ></i>
                </Button>

                <Button>
                  <i
                    className="fa fa-trash"
                    onClick={() => this.props.removeTask(todo)}
                  ></i>
                </Button>
              </Th>
            </Tr>
          </>
        );
      });
  };

  renderTaskCompleted = () => {
    return this.props.todos
      .filter((todo) => todo.done)
      .map((todo, index) => {
        return (
          <>
            <Tr key={index}>
              <Th>{todo.name}</Th>
              <Th className="text-right">
                <Button>
                  <i className="fa fa-trash"></i>
                </Button>
              </Th>
            </Tr>
          </>
        );
      });
  };

  renderTheme = () => {
    return arrTheme.map((theme) => {
      return (
        <>
          <option value={theme.id}>{theme.name}</option>
        </>
      );
    });
  };

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Container className="w-50">
          <Dropdown onChange={(e) => this.props.getTheme(e)}>
            {this.renderTheme()}
          </Dropdown>

          <Heading3>To do list</Heading3>

          <TextField
            value={this.state.value_input}
            label="task name"
            className="w-50 input_todo"
            onChange={(e) => this.getValue(e)}
          ></TextField>

          <Button
            className="ml-2"
            onClick={() => this.props.addToDo(this.state.value_input)}
          >
            <i className="fa fa-plus"></i>Add Task
          </Button>
          <Button className="ml-2">
            <i className="fa fa-update"></i>Update Task
          </Button>
          <hr />
          <Heading3>Task to do</Heading3>
          <Table>
            <Thead>{this.renderTaskList()}</Thead>
          </Table>
          <Heading3>Task Complete</Heading3>
          <Table>
            <Thead>{this.renderTaskCompleted()}</Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (value) => {
      let action = {
        type: "ADD",
        todo: {
          id: Math.floor(Math.random() * 1000),
          name: value,
          done: false,
        },
      };
      dispatch(action);
    },

    getTheme: (e) => {
      let action = {
        type: "change_theme",
        id: e.target.value,
      };
      dispatch(action);
    },
    removeTask: (todo) => {
      let action = {
        type: "remove_task",
        value: todo,
      };
      dispatch(action);
    },
    checkTask: (todo) => {
      let action = {
        type: "check_task",
        value: todo,
      };
      dispatch(action);
    },
    editTask: (todo) => {
      let action = {
        type: "edit_task",
        value: todo,
      };
      dispatch(action);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    todos: state.stateTodo.todos,
    theme: state.stateTodo.theme,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
