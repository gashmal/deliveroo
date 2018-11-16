import React from "react";
import Title from "./Title";

class Form extends React.Component {
	state = {
		etage: "",
		digicode: "",
		adresse: "",
		zipCode: "",
		city: "",
		phone: "",
		instructions: ""
	};

	handleSubmit = event => {
		alert("A truc was submitted: " + this.state);
		console.log(this.state);

		event.preventDefault(); // cette ligne est indispensable pour empêcher le navigateur de changer de page automatiquement lorsque le formulaire est soumis.
	};

	handleInputChange = event => {
		const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value // permet de créer une clé qui aura pour nom la valeur de la variable `name`
		});
	};

	render() {
		return (
			<div className="white-back  form lilPad fadeIn">
				<Title text={this.props.resto} />
				<form className="center" onSubmit={this.handleSubmit}>
					<h3 className="text-center">Adresse de livraison</h3>
					<div className="flex-row between">
						<label className="column halfForm">
							Etage et numéro d'appartement:
							<input
								name="etage"
								type="text"
								placeholder={"2ème Etage, Apt 213"}
								value={this.state.etage}
								onChange={this.handleInputChange}
							/>
						</label>
						<label className="column halfForm">
							Digicode
							<input
								name="digicode"
								type="number"
								placeholder={"56432A"}
								value={this.state.digicode}
								onChange={this.handleInputChange}
							/>
						</label>
						<label className="column all">
							Adresse
							<input
								name="adresse"
								type="text"
								placeholder={"88 rue du Faubourg du Temple"}
								value={this.state.adresse}
								onChange={this.handleInputChange}
							/>
						</label>
						<label className="column halfForm">
							Code postal
							<input
								name="zipCode"
								type="number"
								placeholder={"75019"}
								value={this.state.zipCode}
								onChange={this.handleInputChange}
							/>
						</label>
						<label className="column halfForm">
							Ville
							<input
								name="city"
								type="text"
								placeholder={"Paris"}
								value={this.state.city}
								onChange={this.handleInputChange}
							/>
						</label>
						<label className="column all">
							Numéro de téléphone
							<input
								name="phone"
								type="tel"
								value={this.state.phone}
								placeholder={"+33 473123456"}
								onChange={this.handleInputChange}
							/>
						</label>
						<label className="column all">
							Insturctions pour votre livreur ?
							<input
								name="instructions"
								type="text"
								placeholder={"Assure, dépêche toi !!!"}
								value={this.state.instructions}
								onChange={this.handleInputChange}
							/>
						</label>
					</div>
					<div className="flex-row">
						<input
							className="onSubmit"
							type="submit"
							value="💸 Confirmer et Payer !"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default Form;
