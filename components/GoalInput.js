import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"
import { useState } from "react";

export default function GoalInput (props) {
    const [enteredText, setEnteredText] = useState('');

    function goalInputHandler(text) {
        setEnteredText(text)
      }
    
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
            <Image source={require('../assets/goal.png')} style={styles.image}/>
            <TextInput 
                placeholder="Your course goal!" 
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredText}/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button 
                    title="Add Goal" 
                    onPress={() => {
                        props.onAddGoal(enteredText)
                        setEnteredText('')
                    }}
                    color='#b180f0'
                    />
                </View>
                <View style={styles.button}>
                    <Button title="Cancel" onPress={() => {
                        props.onCancel()
                        setEnteredText('')
                        }}
                        color='#f31282'

                        />
                </View>
            {/* Button does not have style prop */}
            </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b'
      },
      buttonContainer: {
        flexDirection: 'row',
        marginVertical: 15
      },
      button: {
        width: '20%',
        marginHorizontal: 8
      },
      image: {
        width: 200,
        height: 200,
        marginBottom: 20
      },
      textInput: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        width: '80%',
        padding: 10,
      },
})