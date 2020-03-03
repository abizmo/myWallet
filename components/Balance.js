import React from "react";
import {
	Dimensions,
	Image,
	StyleSheet,
	TouchableOpacity,
	View
} from "react-native";

import Card from "./Card";
import Modal from "./Modal";
import Text from "./Text";
import { images, theme } from "../constants";
import { formatCurrency } from "../utils";

const { icons } = images;
const { width } = Dimensions.get("window");
const { colors } = theme;

export default class Balance extends React.Component {
	state = {
		modalVisible: false
	};

	_renderModal() {
		let transactionColor = colors.red;
		return (
			<Modal
				isVisible={this.state.modalVisible}
				onClose={() => this.setState({ modalVisible: false })}
			>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginBottom: 24
					}}
				>
					<Text>Formulario</Text>
					<TouchableOpacity
						onPressOut={() =>
							this.setState({ modalVisible: false })
						}
						style={{
							backgroundColor: transactionColor,
							borderColor: transactionColor,
							borderWidth: 2,
							borderRadius: 16,
							paddingHorizontal: 24,
							paddingVertical: 8,
							alignSelf: "center",
							marginTop: 32
						}}
					>
						<Text
							normal
							weight="black"
							color="white"
							style={{ textTransform: "uppercase" }}
						>
							Cerrar
						</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		);
	}

	render() {
		const { balance } = this.props;
		return (
			<View>
				{this._renderModal()}
				<Card style={styles.card}>
					<View style={styles.info}>
						<Text big>Balance</Text>
						<Text biggest>{formatCurrency(balance)}</Text>
					</View>
					<View style={styles.actions}>
						<TouchableOpacity
							onPressOut={() => console.log("Add Income")}
							style={styles.action}
						>
							<Image source={icons.income} style={styles.icon} />
							<Text small>Ingreso</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPressOut={() => console.log("Add Movement")}
							style={styles.action}
						>
							<Image
								source={icons.movement}
								style={styles.icon}
							/>
							<Text small>Movimiento</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPressOut={() =>
								this.setState({ modalVisible: true })
							}
							style={styles.action}
						>
							<Image source={icons.expense} style={styles.icon} />
							<Text small>Gasto</Text>
						</TouchableOpacity>
					</View>
				</Card>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	card: {
		width: width - theme.sizes.base * 6,
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingHorizontal: 16,
		paddingVertical: 12
	},
	info: {
		marginBottom: 12,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	actions: {
		borderTopColor: theme.colors.grey,
		borderTopWidth: 1,
		paddingTop: 12,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end"
	},
	action: {
		alignItems: "center"
	},
	icon: { marginBottom: theme.sizes.base / 2 }
});
