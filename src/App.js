import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import BottomTabNavigator from './navigation/BottomTabNavigator'
import AddEditVitaminScreen from './screens/AddEditVitaminScreen'
import { useVitaminStore } from './store/vitaminStore'

const Stack = createStackNavigator()

const App = () => {
	const loadVitamins = useVitaminStore(state => state.loadVitamins)

	useEffect(() => {
		loadVitamins()
	}, [loadVitamins])

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen
					name='Root'
					component={BottomTabNavigator}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name='AddEditVitamin' component={AddEditVitaminScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
