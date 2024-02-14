/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect, describe, it, vi } from "vitest"
import {
  randomizeArray,
  verifySquareCount,
  buildSquareArray,
  shuffle,
  Player,
  formatPlayerArray,
  randomNumberArray,
} from "../helpers"

describe("randomizeArray tests", () => {
  it("should return an empty array when given an empty array", () => {
    const input: any[] = []
    const output = randomizeArray(input)
    expect(output).toEqual([])
  })

  it("should return the same array when given an array with a single element", () => {
    const input = [1]
    const output = randomizeArray(input)
    expect(output).toEqual([1])
  })

  // Test for an array with multiple elements
  it("should return an array with the same elements as the input array, in a different order", () => {
    const input = [1, 2, 3, 4, 5]
    const output = randomizeArray(input)
    // Ensure that the length of the output array is the same as the input array
    expect(output.length).toEqual(input.length)
    // Ensure that the output array contains all elements of the input array
    input.forEach((element) => {
      expect(output).toContain(element)
    })
    // Ensure that the output array is not the same as the input array (order is different)
    expect(output).not.toEqual(input)
  })

  // Test for array containing different types of elements
  it("should return an array with the same elements as the input array, in a different order, when the input array contains elements of different types", () => {
    const input = [1, "two", { three: 3 }, [4, 5], true]
    const output = randomizeArray(input)
    // Ensure that the length of the output array is the same as the input array
    expect(output.length).toEqual(input.length)
    // Ensure that the output array contains all elements of the input array
    input.forEach((element) => {
      expect(output).toContain(element)
    })
    // Ensure that the output array is not the same as the input array (order is different)
    expect(output).not.toEqual(input)
  })
})

describe("buildSquareArray tests", () => {
  // Test for an empty array of players
  it("should return an empty array when given an empty array of players", () => {
    const players: Player[] = []
    const result = buildSquareArray(players)
    expect(result).toEqual([])
  })

  // Test for an array of players with one player having one square
  it("should return an array with one entry when given an array with one player having one square", () => {
    const players: Player[] = [{ name: "Player1", squares: 1 }]
    const result = buildSquareArray(players)
    expect(result).toEqual(["Player1"])
  })

  // Test for an array of players with multiple players and squares
  it("should return an array with correct entries when given an array of players with multiple squares", () => {
    const players: Player[] = [
      { name: "Player1", squares: 2 },
      { name: "Player2", squares: 3 },
      { name: "Player3", squares: 1 },
    ]
    const result = buildSquareArray(players)
    // Expected output should concatenate player names based on their squares
    expect(result).toEqual([
      "Player1",
      "Player1",
      "Player2",
      "Player2",
      "Player2",
      "Player3",
    ])
  })
})

describe("verifySquareCount tests", () => {
  // Test when the total number of squares is 100
  it("should return true when the total number of squares is 100", () => {
    const players: Player[] = [
      { name: "Player1", squares: 50 },
      { name: "Player2", squares: 50 },
    ]
    const result = verifySquareCount(players)
    expect(result).toBe(true)
  })
  it("should log an error message and return false when the total number of squares is less than 100", () => {
    const players: Player[] = [
      { name: "Player1", squares: 30 },
      { name: "Player2", squares: 40 },
    ]
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(vi.fn())
    const processExitSpy = vi.spyOn(process, "exit").mockImplementation(vi.fn())

    const result = verifySquareCount(players)

    expect(result).toBe(false)
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Only 70 squares found in the player list. Fill the board with 100 to generate it."
    )
    expect(processExitSpy).toHaveBeenCalled()
  })
})

describe("shuffle tests", () => {
  it("should shuffle and build a player array", () => {
    const input: Player[] = [
      { name: "Player1", squares: 30 },
      { name: "Player2", squares: 40 },
      { name: "Player3", squares: 30 },
    ]
    const output = shuffle(input)

    let playerCount = 0
    let sequentialIndex = -1
    let sequentialCheck = true
    let isSequential = true

    output?.forEach((name, i) => {
      if (name === "Player1") {
        playerCount += 1
        if (sequentialCheck) {
          if (sequentialIndex === -1) {
            sequentialIndex = i
          } else {
            if (i - sequentialIndex > 1) {
              isSequential = false
              sequentialCheck = false
            }
          }
        }
      }
    })
    expect(playerCount).toBe(30)
    expect(isSequential).toBe(false)
  })
})

describe("formatPlayerArray tests", () => {
  it("should return a propperly formatted RowEntry array", () => {
    const input = ["a", "b", "c"]
    expect(formatPlayerArray(input)).toEqual([
      { text: "a" },
      { text: "b" },
      { text: "c" },
    ])
  })
})

describe("randomNumberArray tests", () => {
  it("randomNumberArray should return an array with entries 0-9 randomized", () => {
    const randomArray = randomNumberArray()
    const comparisonArray = [
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
    ]
    expect(randomArray).not.toEqual(comparisonArray)
  })
})
