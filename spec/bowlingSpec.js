describe('Bowling', function(){

  var bowling;

  bowling = new Bowling();

  it('returns a number', function(){
    expect(bowling.get_number()).toEqual(20);

  });
})