describe('Game', function(){

  var game;

  game = new Game();

  it('returns a number', function(){
    for (let i = 0; i < 20; i ++) {
      game.roll(0)
    }
    expect(game.score(0)).toEqual(0);

  });
})