import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves: Square[] = [];

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (board.board[i][j]) {
                    for (let k = 0; k < 7; k++) {
                        if (i == k && j == k + 1) {
                            continue;
                        }
                        moves.push(Square.at(k, k + 1));
                    }
                    let sum = i + j;
                    for (let k = 0; k <= sum; k ++) {
                        if (i == k && j == sum - k) {
                            continue;
                        }
                        moves.push(Square.at(k, sum - k));
                    }
                    break;
                }
            }
        }

        return moves;
    }
}
