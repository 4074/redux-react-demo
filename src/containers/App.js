import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisiabilityFilter, VisiabilityFilters } from '../actions'

import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

class App extends Component {
    render() {
        const {dispatch, visiableTodos, visiabilityFilter} = this.props
        return (
            <div>
                <AddTodo onAddClick={text => 
                    dispatch(addTodo(text))
                } />
                <TodoList
                    todos={visiableTodos}
                    onTodoClick={index =>
                        dispatch(completeTodo(index))
                    }
                />
                <Footer
                    filter={visiabilityFilter}
                    onFilterChange={filter =>
                        dispatch(setVisiabilityFilter(filter))
                    }
                />
            </div>
        )
    }
}

App.propTypes = {
    visiableTodos: TodoList.propTypes.todos,
    visiabilityFilter: Footer.propTypes.filter
}

function selectTodos(todos, filter) {
    switch (filter) {
        case VisiabilityFilters.SHOW_ALL:
            return todos
        case VisiabilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case VisiabilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
        default:
            return []
    }
}

function select(state) {
    return {
        visiableTodos: selectTodos(state.todos, state.visiabilityFilter),
        visiabilityFilter: state.visiabilityFilter
    }
}

export default connect(select)(App)