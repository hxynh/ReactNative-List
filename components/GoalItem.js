import { StyleSheet, View, Text, Pressable } from "react-native"

export default function GoalItem(props) {
    
    return (
        <View style={styles.goalItem}>
            <Pressable 
                android_ripple={{color: '#dddddd'}} 
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => {pressed  && styles.pressedItem}} 
                // android_ripple does not work on ios so we have to apply some styles 
                >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#a065ec',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        padding: 8,
        color: 'white'
      }
})