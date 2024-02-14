import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export type Player = {
  name: string
  squares: number
}

export type RowArrayEntry = {
  text: string
}

const exit = () => {
  console.error("\n\n Game board generation failed.\n\n")
  process.exit(0)
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const randomizeArray = (array: any): any[] => {
  const newArray = [...array]
  let currentIndex = array.length,
    randomIndex

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ]
  }
  return newArray
}

const shuffle = (array: Player[]) => {
  if (verifySquareCount(array)) {
    const squareArray = randomizeArray(buildSquareArray(array)) as string[]
    return squareArray
  }
}

const verifySquareCount = (players: Player[]): boolean => {
  let squareCount = 0
  for (let i = 0; i < players.length; i++) {
    squareCount += players[i].squares
  }
  if (squareCount === 100) {
    return true
  }
  console.error(
    `Only ${squareCount} squares found in the player list. Fill the board with 100 to generate it.`
  )
  exit()
  return false
}

const buildSquareArray = (players: Player[]): string[] => {
  const squareArray = [] as string[]
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].squares; j++) {
      squareArray.push(players[i].name)
    }
  }
  return squareArray
}

const formatPlayerArray = (playerArray: string[]): RowArrayEntry[] => {
  return playerArray.map((player) => ({ text: player }))
}
const randomNumberArray = (): RowArrayEntry[] => {
  return randomizeArray([
    { text: "0" },
    { text: "1" },
    { text: "2" },
    { text: "3" },
    { text: "4" },
    { text: "5" },
    { text: "6" },
    { text: "7" },
    { text: "8" },
    { text: "9" },
  ])
}

const generateTopRow = () => {
  let rowArray = [{ text: "" }]
  rowArray = rowArray.concat(randomNumberArray())
  writeFile(__dirname.replace("scripts", `data/topRow.json`), rowArray)
}

const generateRow = (
  rowIndex: number,
  rowStart: string,
  rowArray: RowArrayEntry[]
) => {
  let formattedRowArray = [{ text: rowStart }]
  formattedRowArray = formattedRowArray.concat(rowArray)
  writeFile(
    __dirname.replace("scripts", `data/row${rowIndex}.json`),
    formattedRowArray
  )
}

const writeFile = (fileName: string, rowArray: RowArrayEntry[]) => {
  fs.writeFile(fileName, JSON.stringify(rowArray), (err) => {
    if (err) {
      console.error(`Error writing file: ${fileName}`, err)
      exit()
    } else {
      console.log(`Successfully wrote file ${fileName}.`)
    }
  })
}
export {
  shuffle,
  verifySquareCount,
  generateTopRow,
  formatPlayerArray,
  randomNumberArray,
  generateRow,
  randomizeArray,
  buildSquareArray,
}
