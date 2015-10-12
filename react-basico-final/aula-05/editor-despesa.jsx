import React from 'react';

class EditorDespesa extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			descricao:  props.descricao || '',
			valor: props.valor || 0,
		}
	}

	_onChangeDescricao(e){
		this.setState({descricao: e.target.value})
	}

	_onChangeValor(e){
		if (!/^[0-9]*$/.test(e.target.value)){
			return;
		}

		this.setState({valor: e.target.value})
	}

	_acao(acao){
		this.props.onAcao(acao, {
			descricao: this.state.descricao,
			valor: this.state.valor,
		});

		this.setState({
			descricao: '',
			valor: 0,
		})
	}

	render(){
		return (
			<div>

				<input
					value={this.state.descricao} 
					onChange={(e) => this._onChangeDescricao(e)} 
					type="text" placeholder="digite aqui o nome da despesa"/>

				<input 
					value={this.state.valor} 
					onChange={(e) => this._onChangeValor(e)} 
					type="text" placeholder="$$$$$"/>

				{this.props.acoes.map((acao) => 
					<button 
						key={acao}
						disabled={this.state.descricao.length == 0 || parseInt(this.state.valor) <= 0} 
						onClick={() => this._acao(acao)}>{acao}</button>
				)}

			</div>
		);
	}
}
export default EditorDespesa;