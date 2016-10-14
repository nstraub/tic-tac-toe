/**
 *  Unit testing is crucial when dealing with algorithms. They will inevitably be refactored
 *  as time passes and their functional correctness is paramount to that of the application.
 *  In this spec, each possible winning condition is tested, to ensure it will remain
 *  functionally correct if and when it is altered.
 *
 *  Furthermore, it is tested against the interface of the function, which means it is only
 *  concerned with passing in a matrix (the board) and receiving a boolean. This implies
 *  it is agnostic of the implementation, making changes less likely to require changing
 *  the tests.
 **/
describe('Check Winner', function () {
    describe('True Outcome Cases', function () {
        /** When unit testing, you must understand you're testing atomic units of code,
         *  and should strive to make the tests as atomic as possible (i.e. it's better
         *  to have ten tests with one assertion each than to have one test with ten
         *  assertions). Atomic tests enable a much easier way of pinpointing errors.
         */

        // An initializer. this function is made to avoid having to write the contained
        // boilerplate code in every test.
        function makeBoard(row, col) {
            var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

            if (row) {
                board[row - 1] = [1, 1, 1];
            } else if (col) {
                board[0][col - 1] = 1;
                board[1][col - 1] = 1;
                board[2][col - 1] = 1;
            }
            return board;
        }

        it('should return true with top row', function () {
            expect(checkWinner(makeBoard(1))).toBeTruthy();
        });

        it('should return true with middle row', function () {
            expect(checkWinner(makeBoard(2))).toBeTruthy();
        });

        it('should return true with bottom row', function () {
            expect(checkWinner(makeBoard(3))).toBeTruthy();
        });

        it('should return true with left column', function () {
            expect(checkWinner(makeBoard(0, 1))).toBeTruthy();
        });

        it('should return true with middle column', function () {
            expect(checkWinner(makeBoard(0, 2))).toBeTruthy();
        });

        it('should return true with right column', function () {
            expect(checkWinner(makeBoard(0, 3))).toBeTruthy();
        });

        it('should return true with diagonal line', function () {
            expect(checkWinner([[1, 0, 0], [0, 1, 0], [0, 0, 1]])).toBeTruthy();
        });

        it('should return true with anti-diagonal line', function () {
            expect(checkWinner([[0, 0, 1], [0, 1, 0], [1, 0, 0]])).toBeTruthy();
        });
    });

    describe('False Outcome Cases', function () {
        /*
        *  Verifying true cases is pretty straightforward, since there is a finite amount
        *  of distributions that result in a win, and they are well known. false cases,
        *  on the other hand, are multiple and organic in nature. This is why they are
        *  grouped into one test.
        *
        *  Throughout your career as a software developer you will encounter many situations
        *  where you'll have to draw a line between thoroughness and overkill. This is one of
        *  cases.
        *
        *  I have chosen to arbitrarily select a few distributions I believe might trip
        *  the algorithm up. If I encounter a bug that returns a false positive for a specific
        *  distribution, I will add the board to this list while fixing it.
        **/
        it('should return false with no matching line', function () {
            expect(checkWinner([[1, 0, 1], [0, 0, 0], [1, 0, 1]])).toBeFalsy();
            expect(checkWinner([[0, 1, 0], [1, 0, 1], [0, 1, 0]])).toBeFalsy();
            expect(checkWinner([[1, 0, 1], [1, 1, 0], [0, 1, 0]])).toBeFalsy();
            expect(checkWinner([[0, 1, 0], [0, 1, 1], [1, 0, 1]])).toBeFalsy();
        });
    });
});
