import React, {state, useState} from 'react';
import { Text,KeyboardAvoidingView,StyleSheet,Image,TextInput,TouchableOpacity,Platform } from 'react-native';
import logo from '../assets/logo.png';
import { withNavigation } from 'react-navigation'; 

export default function Login({navigation}){
	const [user, setUser] = useState('');
	function handleLogin(){
		console.log(user);
		navigation.navigate('Main');
	}
	return(
		<KeyboardAvoidingView 
			behavior="padding"
			enabled={Platform.OS === 'ios'}
			style={styles.container}>
			<Image source={logo} /> 
			<TextInput 
				autoCorrect={false}
				autoCapitalize="none"
				value={user}
				onChangeText={setUser}
				style={styles.input} 
				placeholder="Digite o user do github"
				placeholderTextColor="#999"
			/>
			<TouchableOpacity onPress={handleLogin} style={styles.button}>
				<Text style={styles.buttonText}>Entrar</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: "#f5f5f5",
		justifyContent: 'center',
		alignItems: 'center',
		padding: 30,
	},
	input:{
		height: 46,
		alignSelf: 'stretch',
		backgroundColor: '#FFF',
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 4,
		marginTop: 20,
		paddingHorizontal: 15,
	},
	button:{
		height: 40,
		alignSelf: 'stretch',
		backgroundColor: '#df4723',
		borderRadius: 4,
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center', 
	},
	buttonText:{
		color: '#FFF',
		fontSize: 16,
		fontWeight: 'bold',
	},
});