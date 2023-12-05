import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';
import todos from './../data/todos.json';

export class Todos extends Component {
  state = {
    todos: todos,
    search: '',
  };
  handlerChangeSearch = e => {
    this.setState({ search: e.target.value });
  };
  handlerDelete = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(el => el.id !== id),
    }));
  };
  getFilteredTodos = () => {
    return this.state.todos.filter(({ text }) =>
      text.toLowerCase().includes(this.state.search.toLowerCase())
    );
  };
  render() {
    const { todos } = this.state;
    const filteredTodos = this.getFilteredTodos();
    return (
      <>
        <SearchForm
          onSearch={this.handlerChangeSearch}
          search={this.state.search}
        />
        <Grid>
          {filteredTodos.map(({ id, text }, index) => (
            <GridItem key={id}>
              <Todo
                id={id}
                text={text}
                index={index + 1}
                onDelete={this.handlerDelete}
              />
            </GridItem>
          ))}
        </Grid>
      </>
    );
  }
}
