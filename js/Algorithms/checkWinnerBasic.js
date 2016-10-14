var checkWinner = (function () {
    /**
     *  This is the algorithm that checks to see if a board has a winner.
     *  It has two private (encapsulated) functions, `checkHorizontalAndVertical`
     *  and `checkDiagonal`, that perform the operations.
     *
     *  Its contract (interface) is a function called checkWinner, which receives a 3x3
     *  matrix and returns true if there is a row, column or diagonal lane full of ones.
     **/
    function checkHorizontalAndVertical(board){
        var result = false;

        // One of the most basic winner-check algorithms. Checks one row and one column at a time.
        for (var i = 0; i < 3; i++) {
            result = board[i][0] && board[i][1] && board[i][2] ||
                (board[0][i] && board[1][i] && board[2][i]);

            if (result) {
                break;
            }
        }

        return result;
    }

    /**
     *  This algorithm relies on the fact that diagonal lanes require the center piece to be true,
     *  and evaluates that first, short-circuiting if false and avoiding unnecessary checks
     *  (see https://en.wikipedia.org/wiki/Short-circuit_evaluation#Common_use).
     **/
    function checkDiagonal(board) {
        return board[1][1] && (board[0][0] && board[2][2] || board[2][0] && board[0][2]);
    }

    /**
     *  The public interface for this algorithm, it requires a 3x3 matrix to be passed
     *  and returns whether there is a win or not.
     *
     *  In other words, its signature is `checkWinner(board : Array[3][3]) : bool`
     **/
    return function (board) {
        return !!(checkHorizontalAndVertical(board) || checkDiagonal(board));
    };
}());