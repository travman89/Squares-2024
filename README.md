# Super Bowl Squares Board

This is a simple react app for creating a superbowl squares board.

## Running the project

`yarn && yarn run dev`

navigate in your browser to `http://localhost:5173/`

![default board](https://i.imgur.com/tOWDtvU.png)

## Populating the board

Change the fields in the .json files inside the `data` directory. You can shape this however you want, but by default each row is in its own file to limit mistakes.

`topRow.json` has a blank firs entry to keep the top left corner blank.

## Styling

This project isn't using any library, just plain old css. Most styling you'll have to do is in `App.css`.

## Potential Future Work

- Board auto generator from an input file
- Settings file
- Scoreboard with winner highlights
- On hover show winning numbers
- How to play link
- Refactor the json file structure and rendering.
