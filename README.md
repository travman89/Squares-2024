# Super Bowl Squares Board

This is a simple react app for creating a superbowl squares board.

## Running the project

`yarn && yarn run dev`

navigate in your browser to `http://localhost:5173/`

![default board](https://i.imgur.com/tOWDtvU.png)

## Populating the board

Fill out `settings.json` with the data of your players, and the teams in the game.

Run `yarn board-gen`, and the script will take your data from `settings.json` and generate your board with randomly assigned player squares and numbers for the teams playing.

You can manually edit each of the row json files if you want to assign speccific squares to your players

`topRow.json` has a blank first entry to keep the top left corner blank.

## Styling

This project isn't using any library, just plain old css. Most styling you'll have to do is in `App.css`.

## Potential Future Work

- Board auto generator from an input file
- Settings file
- Scoreboard with winner highlights
- On hover show winning numbers
- How to play link
- Refactor the json file structure and rendering.
