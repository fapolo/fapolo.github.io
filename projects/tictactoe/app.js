const ticTacToe = {
	
	//para salvar as jogadas feitas
	board: ["","","","","","","","",""],

	//sequências para vitória
	winSequences: [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	],
	
	//controle do turno dos jogadores e símbolos disponíveis (index do turno itera entre jogadores)
	player: {
		opt: ["x", "o"],
		turnIndex: 0,
		change: function() {
			this.turnIndex = ( this.turnIndex === 0 ? 1:0 );
		}
	},
	//usado para salvar o container div game
	container: null,
	//controla se o jogo acabou
	gameOver: false,

	restartButton: document.querySelector(".restart"),

	//passa o div game para uso
	init: function(container) {
		this.gameContainer = container;
	},

	//realiza jogada
	makePlay: function(position) {
		if (this.gameOver) return false;
		//se a posição estiver vazia, prossegue com a jogada
		if (this.board[position]  === ""){
			//coloca na posição clicada o símbolo da jogada correspondente, baseado no index do turno
			this.board[position] = this.player.opt[this.player.turnIndex];
			
			//depois da jogada, redesenha todos os quadros para mostrar as jogadas
			this.draw();

			//Verifica se as jogadas que já existem fecham uma jogada vencedora | finaliza se sim, troca player se não
			let winSequenceIndex = this.checkWin( this.player.opt[this.player.turnIndex] );
			if (winSequenceIndex >= 0){
				this.finishGame();
			} else {
				this.player.change();	
			}
			return true;
		} else {
			return false;
		}
	},

	finishGame: function() {
		this.gameOver = true;
		console.log("=== GAME OVER ===");
		this.restartButton.style.opacity = 1;
	},

	checkWin: function(player) {
		for (i in this.winSequences) {
			if (this.board[ this.winSequences[i][0] ] == player &&
				this.board[ this.winSequences[i][1] ] == player &&
				this.board[ this.winSequences[i][2] ] == player){
					console.log("Sequencia Vencedora: " + i + " (" + this.winSequences[i] +")");
					return i;
			}
		}
		return -1;
	},

	//função para iniciar/reiniciar jogo
	start: function() {
		this.board.fill("");
		this.draw();
		this.gameOver = false;
		this.restartButton.style.opacity = 0;
	},

	//Desenha os quadrados do tabuleiro
	draw: function() {
		//variável para stackar os divs de cada área
		let content = '';

		//iteração para adicionar a quantidade de divs + o valor já salvo das jogadas feitas
		for ( i in this.board ) {
			content += '<div onClick="ticTacToe.makePlay(' + i + ')">' + this.board[i] + '</div>';
		}

		//aplica os divs dentro do container (que é o div game, passado no HTML)
		this.gameContainer.innerHTML = content;
	}
};
