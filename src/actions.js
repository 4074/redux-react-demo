
export const ADD_TODO = "ADD_TODO"
export const COMPLETE_TODO = "COMPLETE_TODO"
export const SET_VISIABILITY_FILTER = "SET_VISIABILITY_FILTER"

export const VisiabilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function completeTodo(index) {
    return { type: COMPLETE_TODO, index }
}

export function setVisiabilityFilter(filter) {
    return { type: SET_VISIABILITY_FILTER, filter }
}