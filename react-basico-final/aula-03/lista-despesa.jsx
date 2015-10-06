import React from 'react';
import EditorDespesa from './editor-despesa.jsx';

class ListaDespesa extends React.Component {

	constructor(){
		super();
		this.state = {
			indexEditando: -1,
		}
	}

	_editarDespesa(index){
		this.setState({
			indexEditando: index,
		})
	}

	_alterarDespesa(index, despesaAlterada){
		this.props.onAlteracao(index, despesaAlterada);
		this.setState({
			indexEditando: -1,
		})
	}

	_removerDespesa(index, despesa){
		this.props.onRemocao(index, despesa);
	}

	_cancelarEdicao(index, despesaAtual, despesaAlterada){
		this.setState({
			indexEditando: -1,
		})
	}

	renderDespesa(index, despesa){
		if (index == this.state.indexEditando){
			return (
				<EditorDespesa
					key={index}
					descricao={despesa.descricao}
					valor={despesa.valor}
					acoes={["Cancelar","Salvar"]}
					onAcao={(acao, despesaAlterada) => 
						acao == "Salvar" 
							? this._alterarDespesa(index, despesaAlterada) 
							: this._cancelarEdicao(index, despesa, despesaAlterada) 
					}
				/>
			);
		}

		return ["Remover","Alterar"].map((acao) => 
			<button 
				key={acao}
				onClick={() => acao == "Remover" 
					? this._removerDespesa(index, despesa)
					: this._editarDespesa(index)
				}>{acao}
			</button>
			).concat(<span key={'view'}>{`${despesa.descricao} - ${despesa.valor}`}</span>);
	}

	render(){
		var total = this.props.despesas.reduce((total, item) => total + parseInt(item.valor), 0);
		return (
			<div>
				<ul>
					{this.props.despesas.map((despesa, index) =><li key={index}>
						{this.renderDespesa(index, despesa)}
					</li>)}
				</ul>

				<strong>
					{total == 0 
						? 'Por enquanto você não tem despesa!'
						: `Valor total gasto é: R$ ${total},00`
					}
				</strong>

			</div>
		);
	}
}

export default ListaDespesa;