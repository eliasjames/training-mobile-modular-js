module.exports = (function() {
  let multiCounter = makeCounter();
  function makeCounter() {
    let gameId = 0;

    function counter() {
      return gameId++; 
    }
    return counter;
  }

  return {
    game: {
      cliMode: false,
      movePromptObj: {
        'playerone': 'Player one, row and column',
        'playertwo': 'Player two, row and column',
        'winone': 'Player one wins',
        'wintwo': 'Player two wins',
        'badinput': 'Bad input, try again'
      }, 
      getMultiGameId: ()=>{
        return multiCounter();
      },
      playerAttributesObj: [
        { 
          'letter': 'x', 
          'name'  : 'one',
          'number'  : 1
        }, 
        { 
          'letter': 'o',
          'name'  : 'two',
          'number'  : 2
        }
      ],
      moveStorage: []
    },
    ui: {
      els: {
        boardClass:    'tictactoe-board',
        currentPlayer: 'current-player',
        gameLocation:  'game-location',
        newGame:       'new-game'
      },
      events: {
        changePlayer:  'changePlayer'
      }
    }
  };
})();
