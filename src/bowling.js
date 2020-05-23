class Game {
  constructor() {
    this.rolls = []
  }
 
  roll(pins) {
    this.rolls.push(pins);
  }

  get score() {
    let score = 0;
    let rollIndex = 0;

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      //First -strike Logic
      if(this.rolls[rollIndex] === 10) {
        score += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]
        rollIndex++; 
        continue;
      }
        

      let frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];
      //Second Spare Logic
      if (frameScore === 10) { // if the player gets a spare
        score += 10 + this.rolls[rollIndex + 2]; // player gets a bonus
      } else  {
        score += frameScore;
      }
      rollIndex += 2;
    }
    return score;
  } 
}  