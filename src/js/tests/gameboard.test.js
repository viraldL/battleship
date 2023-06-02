import Gameboard from "../modules/gameboard";
import { shipClass, Ship } from "../modules/ship";


describe("horizontal ship placement", () => {
    const gameboard = Gameboard();
    const submarine = Ship(shipClass.submarine);

    test(" valid ship placement 1", () => {
        gameboard.placeShip(submarine, 0, 0);
        expect(gameboard.getBoard()[0]).toEqual( [{ship: submarine, i: 0}, {ship: submarine, i: 1}, {ship: submarine, i: 2}, null, null, null, null, null, null, null])
    });

    test(" valid ship placement 2", () => {
        gameboard.placeShip(submarine, 3, 3);
        expect(gameboard.getBoard()[3]).toEqual( [null, null, null, {ship: submarine, i: 0}, {ship: submarine, i: 1}, {ship: submarine, i: 2}, null, null, null, null])
    });

    test(" valid ship placement 3", () => {
        gameboard.placeShip(submarine, 2, 7);
        expect(gameboard.getBoard()[2]).toEqual( [null, null, null, null, null, null, null, {ship: submarine, i: 0}, {ship: submarine, i: 1}, {ship: submarine, i: 2}])
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
        expect(gameboard.getBoard()[0][0]).toEqual({ship: submarine, i: 0});
        expect(gameboard.getBoard()[1][0]).toEqual({ship: submarine, i: 1});
        expect(gameboard.getBoard()[2][0]).toEqual({ship: submarine, i: 2});
    });

    test("valid ship placement 2", () => {
        gameboard.placeShip(submarine, 3, 5);
        expect(gameboard.getBoard()[3][5]).toEqual({ship: submarine, i: 0});
        expect(gameboard.getBoard()[4][5]).toEqual({ship: submarine, i: 1});
        expect(gameboard.getBoard()[5][5]).toEqual({ship: submarine, i: 2});
    });

    test("valid ship placement 3", () => {
        gameboard.placeShip(submarine, 7, 1);
        expect(gameboard.getBoard()[7][1]).toEqual({ship: submarine, i: 0});
        expect(gameboard.getBoard()[8][1]).toEqual({ship: submarine, i: 1});
        expect(gameboard.getBoard()[9][1]).toEqual({ship: submarine, i: 2});
    });

    test("invalid ship placement", () => {
        expect(gameboard.placeShip(submarine, 8, 0)).toBe("Invalid placement");
    });
});

describe("receive attack" , () => {
    const gameboard = Gameboard();
    const destroyer = Ship(shipClass.destroyer);
    gameboard.placeShip(destroyer, 0, 0);
    test("ship got hit 1", () => {
        gameboard.receiveAttack(0, 0);
        expect(gameboard.getBoard()[0][0].ship.getHits()).toEqual(["hit", null, null]);
    });

    test("ship got hit 2", () => {
        gameboard.receiveAttack(0, 2);
        expect(gameboard.getBoard()[0][0].ship.getHits()).toEqual(["hit", null, "hit"]);
    });

    test("ship got hit and sunk", () => {
        gameboard.receiveAttack(0, 1);
        expect(gameboard.getBoard()[0][0].ship.getHits()).toEqual(["hit", "hit", "hit"]);
        expect(gameboard.getBoard()[0][0].ship.isSunk()).toBeTruthy();
    });

    test("missed hit", () => {
        gameboard.receiveAttack(1, 3);
        expect(gameboard.getBoard()[1][3]).toBe("miss");
    })

    test("test board", () => {
        expect(gameboard.getBoard()[0]).toEqual([{ship: destroyer, i: 0}, {ship: destroyer, i: 1}, {ship: destroyer, i: 2}, null, null, null, null, null, null, null]);
        expect(gameboard.getBoard()[1]).toEqual([null, null, null, "miss", null, null, null, null, null, null]);
    });


    const battleship = Ship(shipClass.battleship);
    battleship.changeDirection();
    gameboard.placeShip(battleship, 2, 1);
    test("vertical ship hit", () => {
        gameboard.receiveAttack(2, 1);
        expect(gameboard.getBoard()[2][1].ship.getHits()).toEqual(["hit", null, null, null]);
        gameboard.receiveAttack(3, 1);
        gameboard.receiveAttack(4, 1);
        gameboard.receiveAttack(5, 1);
        expect(gameboard.getBoard()[2][1].ship.getHits()).toEqual(["hit", "hit", "hit", "hit"]);
        expect(gameboard.getBoard()[2][1].ship.isSunk()).toBeTruthy();
    });
});


// [
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, AA, null, null, null, null, null, null, null, null],
//     [null, AA, null, null, null, null, null, null, null, null],
//     [null, AA, null, null, null, null, null, null, null, null],
//     [null, AA, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
// ]