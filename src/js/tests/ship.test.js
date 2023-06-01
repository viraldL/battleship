import { Ship } from "../modules/ship";

const shipClass = {
    carrier: 5,
    battleship: 4,
    destroyer: 3,
    submarine: 3,
    patrolBoat: 2
}


describe("length", () => {
    test("return ship length", () => {
        expect(Ship(shipClass.battleship).length).toEqual(4);
    });
})

describe("hits", () => {
    const patrolBoat = Ship(shipClass.patrolBoat);

    test("return hit count", () => {
        expect(Ship(shipClass.patrolBoat).getHits()).toEqual([null, null]);
    });
    
    test("hit and return hit count", () => {
        patrolBoat.hit(1);
        expect(patrolBoat.getHits()).toEqual([null, "hit"]);
    });
});

describe("is ship sunk", () => {
    const submarine = Ship(shipClass.submarine);

    test("ship with no hits", () => {
        expect(submarine.getHits()).toEqual([null, null, null])
        expect(submarine.isSunk()).toBeFalsy();
    })

    test("ship with hits", () => {
        submarine.hit(1);
        submarine.hit(0);
        expect(submarine.getHits()).toEqual(["hit","hit",null])
        expect(submarine.isSunk()).toBeFalsy();
    })

    test("sunked ship", () => {
        submarine.hit(0);
        submarine.hit(1);
        submarine.hit(2);
        expect(submarine.getHits()).toEqual(["hit","hit","hit"])
        expect(submarine.isSunk()).toBeTruthy();
    })
})

describe("directions", () => {
    const destroyer = Ship(shipClass.destroyer);
    test("horizontal direction on start", () => {
        expect(destroyer.getDirection()).toBe("horizontal");
    });

    test("change direction", () => {
        destroyer.changeDirection();
        expect(destroyer.getDirection()).toBe("vertical");
    })
})
