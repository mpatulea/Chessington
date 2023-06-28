import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves: Array<Square> = [];
        moves.push(Square.at(1, 0));
        moves.push(Square.at(6, 7));
        return moves;
    }
}
