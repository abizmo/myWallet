import React from "react";
import {
	Image,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	View,
	KeyboardAvoidingView
} from "react-native";
import validate from "validate.js";
import { Card, Text } from "../components";
import { theme } from "../constants";
import firebase from "../api/firebase";

export default class Login extends React.Component {
	state = {
		email: undefined,
		password: undefined
	};

	componentDidMount() {
		firebase
			.auth()
			.onAuthStateChanged(
				user => user && this.props.navigation.navigate("main")
			);
	}

	handleLogin = () => {
		const { navigation } = this.props;
		const { email, password } = this.state;
		const constraints = {
			email: {
				presence: { message: "is required!" },
				email: { message: "is not valid!" }
			},
			password: {
				presence: { message: "is required!" }
			}
		};

		const error = validate({ email, password }, constraints, {
			format: "flat"
		});
		if (error) return this.setState({ error });
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				this.setState({ user });
				navigation.navigate("main");
			})
			.catch(error =>
				this.setState({ error: ["Wrong email/password!"] })
			);
	};

	render() {
		const { navigation } = this.props;
		const { email, password } = this.state;

		return (
			<View style={styles.container}>
				<Image
					source={require("../assets/images/logo.png")}
					resizeMode="contain"
					style={styles.logo}
				/>
				<KeyboardAvoidingView
					keyboardVerticalOffset={56}
					behavior="padding"
					style={{ width: "100%" }}
				>
					<Card style={styles.card}>
						<TextInput
							style={styles.input}
							onChangeText={email => this.setState({ email })}
							value={email}
							placeholder="your@email"
							autoCompleteType="email"
							keyboardType="email-address"
							autoCapitalize="none"
						/>
						<TextInput
							style={styles.input}
							onChangeText={password =>
								this.setState({ password })
							}
							value={password}
							placeholder="U0rp4ssw0rd"
							autoCompleteType="password"
							secureTextEntry={true}
						/>
						{this.state.error && (
							<Text
								color="red"
								weight="black"
								style={{ textAlign: "center" }}
							>
								{this.state.error[0]}
							</Text>
						)}
						<TouchableOpacity
							onPressOut={() => this.handleLogin(navigation)}
							style={styles.button}
						>
							<Text
								color="white"
								weight="black"
								style={styles.label}
							>
								Login
							</Text>
						</TouchableOpacity>
					</Card>
				</KeyboardAvoidingView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: theme.sizes.base * 3
	},
	logo: {
		width: "100%"
	},
	card: {
		width: "100%",
		paddingHorizontal: theme.sizes.base * 3,
		paddingVertical: theme.sizes.base * 6,
		marginTop: theme.sizes.base * 10,
		backgroundColor: theme.colors.lightGrey
	},
	input: {
		borderBottomColor: theme.colors.darkerGrey,
		borderBottomWidth: 1,
		paddingVertical: theme.sizes.base / 2,
		marginBottom: theme.sizes.base,
		...theme.fonts.big
	},
	button: {
		marginTop: theme.sizes.base * 3,
		backgroundColor: theme.colors.blue,
		borderRadius: theme.sizes.radius * 2,
		paddingVertical: theme.sizes.base * 2,
		alignItems: "center"
	},
	label: {
		textTransform: "uppercase"
	}
});
