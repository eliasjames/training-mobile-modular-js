const GLOBAL_CONFIG = {
  game: {
    cliMode: false,
    movePromptObj: {
      'playerone': 'Player one, row and column',
      'playertwo': 'Player two, row and column',
      'winone': 'Player one wins',
      'wintwo': 'Player two wins',
      'badinput': 'Bad input, try again'
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
      boardLocation: 'board-location',
      currentPlayer: 'current-player',
      newGame:       'new-game'
    },
    events: {
      changePlayer: 'changePlayer'
    }
  }
};
