import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves: Square[] = [];

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (board.board[i][j]) {
                    for (let k = 0; k < 8; k++) {
                        if (k == j) {
                            continue;
                        }
                        moves.push(Square.at(i, k));
                    }
                    for (let k = 0; k < 8; k++) {
                        if (k == i) {
                            continue;
                        }
                        moves.push(Square.at(k, j));
                    }
                    break;
                }
            }
        }

        return moves;
    }
}
