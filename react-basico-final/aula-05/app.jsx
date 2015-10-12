import React from 'react';
import ListDespesa from './lista-despesa.jsx';
import EditorDespesa from './editor-despesa.jsx';

class App03 extends React.Component{

	constructor(){
		super();
		this.state = {
			lista: [],
		}
	}

	_incluirDespesa(despesa){
		var lista = this.state.lista;
		lista.push({
			descricao: despesa.descricao,
			valor:  despesa.valor,
		})

		this.setState({
			lista: lista,
		})
	}

	_removerDespesa(index){
		var lista = this.state.lista
		lista.splice(index,1);
		this.setState({
			lista: lista,
		})
	}

	_alterarDespesa(index, despesa){
		var lista = this.state.lista

		lista[index] = {
			descricao: despesa.descricao,
			valor: despesa.valor,
		}

		this.setState({
			lista: lista,
		})
	}

	render(){
		return (
			<div>
				<EditorDespesa
					acoes={["Incluir"]}
					onAcao={(acao, despesa) => this._incluirDespesa(despesa)}
				/>

				<div>
					<ListDespesa despesas={this.state.lista} 
						onRemocao={(index) => this._removerDespesa(index)}
						onAlteracao={(index, despesaAlterada) => this._alterarDespesa(index, despesaAlterada)}
					/>
				</div>

			</div>
		);
	}

}
export default App03;