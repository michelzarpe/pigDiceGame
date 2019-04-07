// Projeto - Pig Dice Game

/*
Regras do Jogo

- O jogo tem 2 jogadores, jogando em rodadas.
- Em cada rodada, um jogador joga um dado quantas vezes quiser. Cada resultado é adicionado à sua pontuação.
- Mas, se o jogador obtiver o valor 1 ao jogar o dado, toda a sua pontuação será perdida naquela rodada. Depois disso, é a vez do próximo jogador.
- O jogador pode optar por 'Passar a vez', o que significa que sua pontuação atual é adicionada à sua pontuação global. Depois disso, é a vez do próximo jogador.
- O primeiro jogador a atingir 100 pontos na pontuação global vence o jogo.

*/

var scores = [0, 0];
var roundScore = 0;
var activePlayer = 0;

document.querySelector('.dice').style.display = 'none';
document.querySelector('#current-' + 0).textContent = '0';
document.querySelector('#current-' + 1).textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function () {
        //numero randomico
        var dice = Math.floor(Math.random() * (6) + 1);

        //mostrar resultado
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'dice-' + dice + '.png';

        //atualizar a pontuacao da rodada se o numero nao for 1
        if (dice !== 1) {
                roundScore = roundScore + dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
                document.querySelector('#current-' + activePlayer).textContent = '0';
                activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
                roundScore = 0;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
                document.querySelector('.player-0-panel').classList.toggle('active');
                document.querySelector('.player-1-panel').classList.toggle('active');
                document.querySelector('.dice').style.display = 'none';
        }
})

document.querySelector('.btn-hold').addEventListener('click', function () {

        if (activePlayer === 0) {
                scores[activePlayer] = scores[activePlayer] + roundScore;
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                if (scores[activePlayer] >= 100) {
                        document.querySelector('#name-0-' + activePlayer).textContent = 'Vencedor';
                }

                roundScore = 0;
                activePlayer = 1
        } else {
                scores[activePlayer] = scores[activePlayer] + roundScore;
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                if (scores[activePlayer] >= 100) {
                        document.querySelector('#name-0-' + activePlayer).textContent = 'Vencedor';
                }
                roundScore = 0;
                activePlayer = 0;
        }

        document.querySelector('#current-0').textContent = '0';
        document.querySelector('#current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';

})



document.querySelector('.btn-new').addEventListener('click', function () {
        scores = [0, 0];
        roundScore = 0;
        activePlayer = 0;
        document.querySelector('#score-0').textContent = '0';
        document.querySelector('#score-1').textContent = '0';
        document.querySelector('#current-0').textContent = '0';
        document.querySelector('#current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
})










































