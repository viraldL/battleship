import Player from "../modules/player";
import Gameboard from "../modules/gameboard";
import { shipClass, Ship } from "../modules/ship";

describe("player attack", () => {
    const player1 = Player();
    const enemyGameboard = Gameboard();
    const patrolBoat = Ship(shipClass.patrolBoat);
    enemyGameboard.placeShip(patrolBoat, 1, 1)
    test("player attack and miss", () => {
        player1.attack(enemyGameboard, 2, 3);
        expect(enemyGameboard.getBoard()[2][3]).toBe("miss");
    });

    test("player attack and hit", () => {
        player1.attack(enemyGameboard, 1, 2);
        expect(enemyGameboard.getBoard()[1][2].ship.getHits()).toEqual([null, "hit"]);
    })
})
