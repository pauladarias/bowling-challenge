describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  })

  it('returns 0 for no score in any rolls', function(){
    for (let i = 0; i < 20; i ++) {
      game.roll(0);
    }
    expect(game.score).toEqual(0);
  });

  it('returns 20 for 1 score in each roll', function(){
    for (let i = 0; i < 20; i ++) {
      game.roll(1);
    }
    expect(game.score).toEqual(20);
  }) 
  it('returns correspondent points when spare', function(){
    game.roll(5);
    game.roll(5);
    game.roll(4);
    for (let i = 0; i < 18; i ++) {
      game.roll(0)
    }
    expect(game.score).toEqual(18);
  })
  it('retrurns correspondent points when strike', function(){
    game.roll(10);
    game.roll(1);
    game.roll(1);
    for (let i = 0; i < 17; i ++) {
      game.roll(0)
    }
    expect(game.score).toEqual(14)
  })
})  