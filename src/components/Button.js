import React from 'react';
import { TouchableOpacity, Text } from 'react-native'

const Button = props => {
	let defaultButtonColor = props.btnColor ? props.btnColor : "#3949ab";

	const styles = {
		regularButton: {
			width: 300,
			borderColor: defaultButtonColor,
			backgroundColor: defaultButtonColor,
			height: 50,
			borderRadius: 5,
			marginTop: 20,
			justifyContent: 'center',
			shadowOffset:{  width: 2,  height: 2,  },
			shadowColor: defaultButtonColor,
			shadowOpacity: 0.2,
		},
		btnText: {
			textAlign: 'center',
			fontSize: 20,
			color: '#fcfcfc',
			fontWeight: '600'
		}
	}
	return (
		<TouchableOpacity 
			onPress={props.onPress}
			style={styles.regularButton}>
			<Text style={styles.btnText}>
				{props.content}
			</Text>
		</TouchableOpacity>	
	)
}

export default Button;