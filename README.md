### MY APPROACH 
---

Objective --> knock 10 pins (Strike) in 10 rounds

1. Each game --> 10 frames with 2 rolls each 
2. Each frame --> objective: to knock down 10 pins 

- Spare: knocking down 10 pins in 2 rolls
     - Spare points: 10 (from knocking down 10 pins in 2 rolls)
                    +
                     pins knocked down in the roll (1st on the next frame)

- Strike: knocking down all 10 pins on the FIRST ROLL on each frame 
    - Strike points: 10 (stike points)
                    +
                    pins knocked down in the next TWO rolls

3. Last frame --> strickes or spares in the last frame allow the player to have one (for a spare) or two extra rolls (for strike)

---


### STRUCTURE 


| Class       |    Methods  |
|-------------| ----------  |
| Game        | roll        |
|             | score       |


1. simplest implementation no points: 

```
_/_  _/_  _/_  _/_  _/_  _/_  _/_  _/_  _/_  _/_ = 0 points (20 times roll  = 0 points)
``` 
2. simplest implementation minimum points: 

```
1/1  1/1  1/1  1/1  1/1  1/1  1/1  1/1  1/1  1/1 = 20 points (20 times roll = 20 points)
```
3. simplest implementation spare case:

```
5/5  4/_  _/_  _/_  _/_  _/_  _/_  _/_  _/_  _/_  = 18 points (10 from the spare + 4 from the first roll + 4 from the first roll)
```


 







Bowling Challenge
=================


* Challenge time: rest of the day and weekend.
* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or student, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9am Monday week

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

As usual please start by

* Forking this repo

* Finally submit a pull request before Monday week at 9am with your solution or partial solution.  However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am.  And since next week is lab week you have a full extra week to work on this.

___STRONG HINT, IGNORE AT YOUR PERIL:___ Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

You might even want to start with ESLint early on in your work — to help you
learn Javascript conventions as you go along.

## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

## Code Review

In code review we'll be hoping to see:

* All tests passing
* The code is elegant: every class has a clear responsibility, methods are short etc.

Reviewers will potentially be using this [code review rubric](docs/review.md).  Note that referring to this rubric in advance may make the challenge somewhat easier.  You should be the judge of how much challenge you want.
