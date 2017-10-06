import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves: Square[] = [];

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (board.board[i][j] && i == 1) {
                    moves.push(Square.at(2, j));
                    moves.push(Square.at(3, j));
                } else if (board.board[i][j] && i == 6) {
                    moves.push(Square.at(5, j));
                    moves.push(Square.at(4, j));
                } else if (board.board[i][j]) {
                    if (this.player == Player.WHITE) {
                        moves.push(Square.at(i + 1, j));
                    } else {
                        moves.push(Square.at(i - 1, j));
                    }
                }
            }
        }

        return moves;
    }

    public moveTo(board: Board, newSquare: Square) {
        super.moveTo(board, newSquare);
    }
}
