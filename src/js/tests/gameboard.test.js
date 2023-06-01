import Gameboard from "../modules/gameboard";
import { shipClass, Ship } from "../modules/ship";


describe("horizontal ship placement", () => {
    const gameboard = Gameboard();
    const submarine = Ship(shipClass.submarine);

    test(" valid ship placement 1", () => {
        gameboard.placeShip(submarine, 0, 0);
        expect(gameboard.getBoard()[0]).toEqual( [submarine, submarine, submarine, null, null, null, null, null, null, null])
    });

    test(" valid ship placement 2", () => {
        gameboard.placeShip(submarine, 3, 3);
        expect(gameboard.getBoard()[3]).toEqual( [null, null, null, submarine, submarine, submarine, null, null, null, null])
    });

    test(" valid ship placement 3", () => {
        gameboard.placeShip(submarine, 2, 7);
        expect(gameboard.getBoard()[2]).toEqual( [null, null, null, null, null, null, null, submarine, submarine, submarine])
    });

    test("invalid ship placement", () => {
        expect(gameboard.placeShip(submarine, 0, 9)).toBe("Invalid placement");
    })
});

describe("vertical ship placement", () => {
    const gameboard = Gameboard();
    const submarine = Ship(shipClass.submarine);
    submarine.changeDirection();

    test("valid ship placement 1", () => {
        gameboard.placeShip(submarine, 0, 0);
        expect(gameboard.getBoard()[0][0]).toEqual(submarine);
        expect(gameboard.getBoard()[1][0]).toEqual(submarine);
        expect(gameboard.getBoard()[2][0]).toEqual(submarine);
    });

    test("valid ship placement 2", () => {
        gameboard.placeShip(submarine, 3, 5);
        expect(gameboard.getBoard()[3][5]).toEqual(submarine);
        expect(gameboard.getBoard()[4][5]).toEqual(submarine);
        expect(gameboard.getBoard()[5][5]).toEqual(submarine);
    });

    test("valid ship placement 3", () => {
        gameboard.placeShip(submarine, 7, 1);
        expect(gameboard.getBoard()[7][1]).toEqual(submarine);
        expect(gameboard.getBoard()[8][1]).toEqual(submarine);
        expect(gameboard.getBoard()[9][1]).toEqual(submarine);
    });

    test("invalid ship placement", () => {
        expect(gameboard.placeShip(submarine, 8, 0)).toBe("Invalid placement");
    });
})



// [
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
// ]