import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StatusBar, View } from 'react-native'
import BottomTabNavigator from './navigation/BottomTabNavigator'
import { globalStyles } from './styles/globalStyles'

export default function App() {
	useEffect(() => {
		// Additional app setup if necessary
	}, [])

	return (
		<NavigationContainer>
			<StatusBar barStyle='dark-content' />
			<View style={globalStyles.container}>
				<BottomTabNavigator />
			</View>
		</NavigationContainer>
	)
}
