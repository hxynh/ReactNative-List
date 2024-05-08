import { useState } from 'react';
import { Button, FlatList,  StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)
  
  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)

  }

  function addGoalHandler(enteredGoalText) {
    setGoals(
      (prevGoals) => [...prevGoals, {id: Math.random().toString(), text: enteredGoalText}]
    )
    endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setGoals(
      prevGoals => {
        return prevGoals.filter(goal => goal.id != id)
      }
    )
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#a065ec" onPress={startAddGoalHandler}/>
      <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        {/* ScrollView is good for standard size list and not for long list. For long list, use FlatList
         <ScrollView alwaysBounceVertical={false}>
        {
          goals.map((goal) => 
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          )
        }
        </ScrollView> */}
        <FlatList 
          data={goals} 
          renderItem={itemData => {
            return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>
          }} 
          keyExtractor={(item, index) => {
            return item.id
          }}
          alwaysBounceVertical={false} />
        
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  
  goalsContainer: {
    flex: 5
  },
  
});
