import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';
import todos from './../data/todos.json';

export class Todos extends Component {
  state = {
    todos: todos,
  };

  handlerDelete = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(el => el.id !== id),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <Grid>
        {todos.map(({ id, text }, index) => (
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
    );
  }
}
