import {
  shuffle,
  formatPlayerArray,
  randomNumberArray,
  generateTopRow,
  generateRow,
} from "./helpers.ts";
import settings from "../settings.json" assert { type: "json" };

const generateBoard = () => {
  const playerArray = formatPlayerArray(shuffle(settings.players)!);
  const randomRowScores = randomNumberArray();
  generateTopRow();
  for (let i = 0; i < 10; i++) {
    generateRow(
      i + 1,
      randomRowScores[i].text,
      playerArray.slice(i * 10, 10 * i + 10)
    );
  }
};

generateBoard();
