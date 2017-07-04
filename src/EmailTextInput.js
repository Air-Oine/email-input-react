import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

const lodash = require('lodash');

export default class EmailTextInput extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            textValid: true
        }

        this.text
        this.textError = '';

        this.onEndEditing = this.onEndEditing.bind(this);
        this.getTextErrorInput = this.getTextErrorInput.bind(this);
    }

    onEndEditing(text) {
        let textValid = true
        const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        //Validation of email input
        if(lodash.isEmpty(text.text)) {
            this.textError = "L'email est requis"
            textValid = false
        }
        else if(!text.text.match(regex)) {
            this.textError = "L'email est invalide"
            textValid = false
        }

        this.setState({textValid})
    }

    //Generate error if text invalid
    getTextErrorInput() {
        if(!this.state.textValid) {
            return (
                <Text 
                    style={styles.textError}>
                    {this.textError}
                </Text>
            )
        }
    }

    render() {
        const textError = this.getTextErrorInput()

        return (
        <View>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onEndEditing={(text) => this.onEndEditing({text: text.nativeEvent.text})}
                keyboardType='email-address'
                autoFocus={true}
                value={this.text}
            />
            <View>
                {textError}
            </View>
        </View>
        );
    }
    
}

const styles = StyleSheet.create({
    textError: {
        backgroundColor: 'red',
        color: 'white'
    }
});