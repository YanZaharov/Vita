import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import AddEditVitaminScreen from '../screens/AddEditVitaminScreen'
import CalendarScreen from '../screens/CalendarScreen'
import HomeScreen from '../screens/HomeScreen'
import VitaminsScreen from '../screens/VitaminsScreen'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
					let iconName
					if (route.name === 'Home') {
						iconName = 'home'
					} else if (route.name === 'Vitamins') {
						iconName = 'list'
					} else if (route.name === 'AddVitamin') {
						iconName = 'plus-circle'
					} else if (route.name === 'Calendar') {
						iconName = 'calendar'
					}
					return <Icon name={iconName} size={size} color={color} />
				},
				tabBarActiveTintColor: '#3f72af',
				tabBarInactiveTintColor: 'gray',
			})}
		>
			<Tab.Screen name='Home' component={HomeScreen} />
			<Tab.Screen name='Vitamins' component={VitaminsScreen} />
			<Tab.Screen name='AddVitamin' component={AddEditVitaminScreen} />
			<Tab.Screen name='Calendar' component={CalendarScreen} />
		</Tab.Navigator>
	)
}

export default BottomTabNavigator
