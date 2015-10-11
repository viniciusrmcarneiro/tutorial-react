class App03 extends React.Component{
	constructor(){
		super()
		this.state = {
			despesa: {
				descricao: '',
				valor: 0,
			},
			lista: [],
		};
	}

	_incluirDespesa(){
		var despesa = this.state.despesa;
		var lista = this.state.lista;
		lista.push({...despesa});

		despesa = {
			descricao: '',
			valor: 0,
		}

		this.setState({
			lista: lista,
			despesa: despesa,
		})
	}

	_onChangeDescricao(e){
		var despesa = this.state.despesa;
		despesa.descricao = e.target.value;
		this.setState({
			despesa: despesa,
		})
	}
	_onChangeValor(e){
		if (!/^[0-9]*$/.test(e.target.value)){
			return;
		}

		var despesa = this.state.despesa;
		despesa.valor = e.target.value;
		this.setState({
			despesa: despesa,
		})
	}

	_salvarEdicao(){
		var lista = this.state.lista;
		lista[this.state.editandoIndex] = this.state.despesaEditanto;
		this.setState({
			lista: lista,
			despesaEditanto: null,
			editandoIndex: null,
		})
	}
	_onChangeDescricaoEditando(e){
		var despesa = this.state.despesaEditanto;
		despesa.descricao = e.target.value;
		this.setState({
			despesaEditanto: despesa,
		})

	}
	_onChangeValorEditando(e){
		if (!/^[0-9]*$/.test(e.target.value)){
			return;
		}

		var despesa = this.state.despesaEditanto;
		despesa.valor = e.target.value;
		this.setState({
			despesaEditanto: despesa,
		})
	}
	_removerDespesa(index){
		var lista = this.state.lista;
		lista.splice(index, 1);
		this.setState({
			lista: lista,
		});
	}
	_editarDespesa(index){
		this.setState({
			editandoIndex: index,
			despesaEditanto: {...this.state.lista[index]},
		})
	}
	_cancelarEdicao(){
		this.setState({
			editandoIndex: null,
			despesaEditanto: null,
		})
	}

	render(){
		var total = this.state.lista.reduce((total, item) => total + parseInt(item.valor), 0);
		return (
			<div>
				<input 
					type="text" 
					placeholder="digite aqui no da despesa"
					value={this.state.despesa.descricao}
					onChange={(e) => this._onChangeDescricao(e)}
				/>
				<input 
					type="text"
					placeholder="$ quanto custou?"
					value={this.state.despesa.valor}
					onChange={(e) => this._onChangeValor(e)}
				/>

				<button 
					disabled={this.state.despesa.descricao.length == 0 ||
						this.state.despesa.valor <= 0
					}
					onClick={() => this._incluirDespesa()}
				>Incluir</button>

				<div>
					<ul>
					{this.state.lista.map((item, index)=>{
						if (this.state.editandoIndex == index){
							return <li key={index}>
								<input 
									type="text" 
									placeholder="digite aqui no da despesa"
									value={this.state.despesaEditanto.descricao}
									onChange={(e) => this._onChangeDescricaoEditando(e)}
								/>
								<input 
									type="text"
									placeholder="$ quanto custou?"
									value={this.state.despesaEditanto.valor}
									onChange={(e) => this._onChangeValorEditando(e)}
								/>
								<button 
									onClick={() => this._salvarEdicao()}
									disabled={ this.state.despesaEditanto.descricao.length == 0 ||
										this.state.despesaEditanto.valor <= 0
									}
									>Salvar</button>
								<button onClick={() => this._cancelarEdicao()}>Cancelar</button>
							</li>
						}
						return <li key={index}>
							<button onClick={ () => this._removerDespesa(index)}>Remover</button>
							<button onClick={() => this._editarDespesa(index)}>Alterar</button>
							{`${item.descricao} - ${item.valor}`}
						</li>
					})
					}
					</ul>
				</div>
				<strong>{`Até agora você gastou ${total}`}</strong>
			</div>
		);
	}
}

export default App03;