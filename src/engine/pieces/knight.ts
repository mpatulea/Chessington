import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves: Square[] = [];

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (board.board[i][j]) {
                    for (let k = i - 2; k <= i + 2; k++) {
                        for (let t = j - 2; t <= j + 2; t++) {
                            if (i == k || j == t || k == t || Math.abs(k - t) > 3 || (Math.abs(k-i) == 1 && Math.abs(t-j) == 1)) {
                                continue;
                            }
                            moves.push(Square.at(k, t));
                        }
                    }
                    break;
                }
            }
        }

        return moves;
    }
}
