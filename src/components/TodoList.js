import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';
import todos from '../reducers/todos';


const TodoList = ({ todos, toggleTodo }) => (

    <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <View style={{ padding: 20 }}>
            {todos.map(todo =>

                <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>

                    <Text style={{
                        fontSize: 24,
                        textDecorationLine: todo.completed ? 'line-through' : 'none'
                    }}>{todo.text}
                    </Text>



                </TouchableOpacity>


            )}
        </View>
    </ScrollView>
)

export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'


    },

})