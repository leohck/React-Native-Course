import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = goalTitle => {
        setCourseGoals(currentGoals => [...currentGoals, {
            id: Math.random().toString(),
            value: goalTitle
        }]);
    };

    const removeGoalHandler = goalId => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        });
    }

    return (
        <View style={styles.screen}>
            <GoalInput
                onAddGoal={addGoalHandler}
            />
            <FlatList
                keyExtractor={(item) => item.id}
                data={courseGoals}
                renderItem={goal =>
                    <GoalItem
                        id={goal.item.id}
                        title={goal.item.value}
                        onDelete={removeGoalHandler}
                    />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 60
    }
});
