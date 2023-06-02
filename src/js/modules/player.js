function Player() {
    const attack = (board, y, x) => {
        board.receiveAttack(y, x);
    }

    const randomAttack = (board) => {
        let y = Math.floor(Math.random() * 10);
        let x = Math.floor(Math.random() * 10);
        const spot = board.getBoard()[y][x];

        if(spot === "hit" || spot === "miss") {
            randomAttack(board);
        } else {
            board.receiveAttack(y, x);
        }
    }

    return { attack, randomAttack };
}

export default Player;