import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import {
	AccountsList,
	Balance,
	Header,
	StatusBar,
	Text,
	TransactionsList
} from "../components";

import { getAccounts, getTransactions } from "../api/firebase";
import { mock, theme } from "../constants";

export default class Home extends React.Component {
	state = {
		accounts: [],
		transactions: [],
		balance: 0
	};

	getBalance = accounts =>
		accounts.reduce((balance, account) => balance + account.balance, 0);

	componentDidMount() {
		const accounts = getAccounts();
		const transactions = getTransactions(8);
		Promise.all([accounts, transactions])
			.then(values => {
				this.setState({
					accounts: values[0],
					transactions: values[1],
					balance: this.getBalance(values[0])
				});
			})
			.catch(error => console.log("HomeError-01", error));
	}

	render() {
		const { balance } = this.state;
		const accountsTitleStyle = [
			styles.title,
			{
				marginHorizontal: theme.sizes.base * 3
			}
		];

		return (
			<View style={styles.container}>
				<StatusBar backgroundColor={theme.colors.lightGrey} dark />
				<ScrollView showsVerticalScrollIndicator={false}>
					<Header
						style={styles.header}
						navigation={this.props.navigation}
					/>
					<View style={styles.balance}>
						<Balance balance={balance} />
					</View>
					<View style={styles.accounts}>
						<Text normal weight="black" style={accountsTitleStyle}>
							Cuentas
						</Text>
						<AccountsList accounts={this.state.accounts} />
					</View>
					<View style={styles.transactions}>
						<Text normal weight="black" style={styles.title}>
							Transacciones Recientes
						</Text>
						<TransactionsList
							transactions={this.state.transactions}
							onPress={() =>
								this.setState({ modalVisible: true })
							}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start"
	},
	header: {
		marginBottom: theme.sizes.base * 3,
		marginHorizontal: theme.sizes.base * 3
	},
	balance: {
		marginBottom: theme.sizes.base * 3,
		marginHorizontal: theme.sizes.base * 3
	},
	accounts: { marginBottom: theme.sizes.base * 3 },
	transactions: {
		marginHorizontal: theme.sizes.base * 3
	},
	title: {
		marginBottom: theme.sizes.base,
		textTransform: "uppercase"
	}
});
