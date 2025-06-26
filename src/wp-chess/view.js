/**
 * The chessboard view file.
 */

/* global Chessboard */

import '@chrisoakman/chessboardjs/dist/chessboard-1.0.0.js';
import '@chrisoakman/chessboardjs/dist/chessboard-1.0.0.css';

// Importing images.
import blackKing from './assets/bK.png';
import whiteKing from './assets/wK.png';
import blackQueen from './assets/bQ.png';
import whiteQueen from './assets/wQ.png';
import blackRook from './assets/bR.png';
import whiteRook from './assets/wR.png';
import blackBishop from './assets/bB.png';
import whiteBishop from './assets/wB.png';
import blackKnight from './assets/bN.png';
import whiteKnight from './assets/wN.png';
import blackPawn from './assets/bP.png';
import whitePawn from './assets/wP.png';

( function () {
	const boards = document.querySelectorAll( '.fen-position-board' ),
		boardInstances = {};
	let counter = 1;

	boards.forEach( ( node ) => prepareBoard( node ) );

	function prepareBoard( node ) {
		const id = 'wp-chess-fen-' + counter;
		node.setAttribute( 'id', id );

		boardInstances[ counter ] = Chessboard( id, {
			draggable: false,
			dropOffBoard: 'trash',
			sparePieces: false,
			pieceTheme,
			position: node.getAttribute( 'data-fen' ),
		} );

		counter++;
	}

	function pieceTheme( piece ) {
		switch ( piece ) {
			case 'wK':
				return whiteKing;
			case 'bK':
				return blackKing;
			case 'wQ':
				return whiteQueen;
			case 'bQ':
				return blackQueen;
			case 'wR':
				return whiteRook;
			case 'bR':
				return blackRook;
			case 'wB':
				return whiteBishop;
			case 'bB':
				return blackBishop;
			case 'wN':
				return whiteKnight;
			case 'bN':
				return blackKnight;
			case 'wP':
				return whitePawn;
			case 'bP':
				return blackPawn;
		}
	}
} )();
