const shipClass = {
    carrier: 5,
    battleship: 4,
    destroyer: 3,
    submarine: 3,
    patrolBoat: 2
}

function Ship(shipType) {
    const length = shipType;

    let direction = "horizontal";
    const getDirection = () => direction;
    const changeDirection = () => {
        direction == "horizontal" ? direction = "vertical" : direction = "horizontal";
    }
    let hits = Array(length).fill(null);
    const hit = (i) => {hits[i] = "hit"};
    const getHits = () => {return hits};
    
    const isSunk = () => {return hits.every(spot => spot === "hit")};

    return {length, hit, getHits, isSunk, getDirection, changeDirection};
}

export { shipClass, Ship };