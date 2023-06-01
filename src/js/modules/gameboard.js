function Gameboard() {

    let board = Array(10).fill(null).map(() => Array(10).fill(null));
    const getBoard = () => board;

    const placeShip = (ship, y, x) => {
        const direction = ship.getDirection();
        if(direction === "horizontal"){
            if((x+ship.length - 1) < 10) {
                for(let i = 0; i < ship.length; i++){
                    board[y][x] = ship;
                    x++;
                }
            } else {
                return "Invalid placement";
            }
        } else if(direction === "vertical") {
            if((y+ship.length - 1) < 10) {
                for(let i = 0; i < ship.length; i++){
                    board[y][x] = ship;
                    y++;
                }
            } else {
                return "Invalid placement";
            }
        }
    }

    return { getBoard, placeShip }
};

export default Gameboard;
