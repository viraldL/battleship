function Gameboard() {

    let board = Array(10).fill(null).map(() => Array(10).fill(null));
    const getBoard = () => board;

    const placeShip = (ship, y, x) => {
        const direction = ship.getDirection();
        if(direction === "horizontal"){
            if((x+ship.length - 1) < 10) {
                for(let i = 0; i < ship.length; i++){
                    board[y][x] = {ship, i};
                    x++;
                }
            } else {
                return "Invalid placement";
            }
        } else if(direction === "vertical") {
            if((y+ship.length - 1) < 10) {
                for(let i = 0; i < ship.length; i++){
                    board[y][x] = {ship, i};
                    y++;
                }
            } else {
                return "Invalid placement";
            }
        }
    }

    const receiveAttack = (y, x) => {
        if(board[y][x] !== null){
            const index = board[y][x].i;
            board[y][x].ship.hit(index);
        } else {
            board[y][x] = "miss";
        }
    }

    return { getBoard, placeShip, receiveAttack }
};


export default Gameboard;
