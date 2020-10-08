import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddTodo from './containers/AddTodo'
import VisibileTodos from './containers/VisibileTodos'

class TodoApp extends Component {

    /* state = {
        Todos: [],
        visibilityFilter: 'SHOW-ALL-TODOS'
    } */

    render() {
        return (
            <View style={styles.container}>
                <AddTodo />

                <View>
                    <VisibileTodos />
                </View>
            </View>
        )
    }
}

export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40

    }
})