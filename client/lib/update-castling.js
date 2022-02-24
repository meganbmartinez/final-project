export default function updateCastling(gamestate, runway, runwayOpen) {
  let turn, kingMovedKey, rookMovedKey, canCastleKey;
  if (runway === 'wk') {
    turn = 'wb';
    kingMovedKey = 'whiteKingMoved';
    rookMovedKey = 'whiteKingRookMoved';
    canCastleKey = 'whiteKingCanCastle';
  } else if (runway === 'wq') {
    turn = 'wb';
    kingMovedKey = 'whiteKingMoved';
    rookMovedKey = 'whiteQueenRookMoved';
    canCastleKey = 'whiteQueenCanCastle';
  } else if (runway === 'bk') {
    turn = 'bw';
    kingMovedKey = 'brownKingMoved';
    rookMovedKey = 'brownKingRookMoved';
    canCastleKey = 'brownKingCanCastle';
  } else if (runway === 'bq') {
    turn = 'bw';
    kingMovedKey = 'brownKingMoved';
    rookMovedKey = 'brownQueenRookMoved';
    canCastleKey = 'brownQueenCanCastle';
  }

  if (runwayOpen && !gamestate[kingMovedKey] && !gamestate[rookMovedKey] && !gamestate.check[turn]) {
    gamestate[canCastleKey] = true;
  } else {
    gamestate[canCastleKey] = false;
  }
}
