function Player() {
    const attack = (board, y, x) => {
        board.receiveAttack(y, x);
    }

    return { attack };
}

export default Player;