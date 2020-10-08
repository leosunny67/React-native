import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {

    state = {
        text: ''
    }

    addTodo = (text) => {

        if (!text.trim()) {
            alert(' Enter Something');
            return;
        }

            this.props.dispatch(addTodo(text))
            this.setState({ text: '' })
        
    }
    

    render() {
        return (
            <View style={styles.viewstyle}>

                <TextInput
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="Eg:Create New Video"
                    style={styles.textstyle}
                    
                />
                

                <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                    <View style={styles.iconstyle}>
                        <Ionicons name="md-add" size={30} style={{
                            color: "#de9595",
                            padding: 10
                        }} />
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewstyle: {
        flexDirection: 'row',
        marginHorizontal: 20,
        /* marginTop: 40 */

    },
    textstyle: {
        borderWidth: 1,
        borderColor: "#f2f2e1",
        backgroundColor: '#eaeaea',
        height: 60,
        flex: 1,
        padding: 5
    },
    iconstyle: {
        height: 60,
        backgroundColor: '#eaeaea',
        justifyContent: 'center',
        alignItems: 'center'

    }
})