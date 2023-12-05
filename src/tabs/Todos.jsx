import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';
import todos from './../data/todos.json';

export class Todos extends Component {
  state = {
    todos: todos,
  };

  render() {
    const { todos } = this.state;
    return (
      <Grid>
        {todos.map(({id, text}, index) => (
          <GridItem key={id}>
            <Todo text={text} index={index + 1}/>
          </GridItem>
        ))}
      </Grid>
    );
  }
}
