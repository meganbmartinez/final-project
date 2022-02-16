export default class GameState {
  constructor() {
    this.turn = 'wb';
    this.nextTurn = 'bw';
    this.turnNum = 1;
    this.seeingOptions = false;
    this.start = 0;

    this.check = {
      wb: false,
      bw: false
    };
    this.checkmate = false;

    this.whiteQueenCanCastle = false;
    this.whiteKingCanCastle = false;
    this.whiteKingMoved = false;
    this.whiteQueenRookMoved = false;
    this.whiteKingRookMoved = false;

    this.brownQueenCanCastle = false;
    this.brownKingCanCastle = false;
    this.brownKingMoved = false;
    this.brownQueenRookMoved = false;
    this.brownKingRookMoved = false;

    this.promoting = null;

    this.enPassantWhite = 0;
    this.enPassantBlack = 0;

    this.draw = false;
    this.drawCase = null;
    this.pastBoards = [];
    this.pawnKingMoveCounter = 0;
  }

}
