/**
 * Created by jiaow on 23/03/2018.
 */
//binary gap
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    arr = [];
    function binary(N) {

        if (N === 1) {
            arr.splice(0, 0, N)
            console.log(arr)
            return arr
        }
        else {
            arr.splice(0, 0, N % 2);
            N = (N - N % 2) / 2
            return binary(N, arr)
        }


    }

    function gap(array) {

        var max = 0;
        var count = 0;
        var index1 = 0;
        var index2 = 0;
        for (var i = 0; i < array.length; i++) {

            // if (array[i] === 0 && i !== array.length-1) {
            //
            //     count++
            //
            //     if (count > max && array.indexOf(1,i)!==-1 ) {
            //
            //         max = count
            //     }
            // }
            // else {
            //
            //     count = 0
            // }

            index1 = array.indexOf(1, i);

            if (index1 !== -1) {
                index2 = array.indexOf(1, index1 + 1);
                if (index2 !== -1) {
                    count = index2 - index1 - 1;
                    if (count > max) {
                        max = count;

                    }

                    else count = 0

                    // index1 = index2;
                }
            }
        }

        return max
    }

    return gap(binary(N))

}

//array rotation

function rotation(A, K) {
    var left, right, temp, first, last;


    for (var i = 0; i < K; i++) {
        if (A.length === 0)
            return A
        else if (A.length === 1) {
            return A
        }
        else if (A.length < 3) {
            temp = A[0];
            A[0] = A[1];
            A[1] = temp;

        }
        else {

            temp = A[1];
            A[1] = A[0];
            A[0] = A[A.length - 1];
            A.pop();
            A.splice(2, 0, temp)

        }

    }
    return A


    console.log(A)
}

//OddOccurrencesInArray, performance low n^2

function OddOccurrencesInArray(A) {
    // while (A.length > 0) {
    //     var a = A.indexOf(A[0]);
    //
    //
    //     if (a !== -1 && A.indexOf(A[0], 1) !== -1) {
    //
    //         A.splice(A.indexOf(A[0], 1), 1);
    //         A.shift();
    //     }
    //     else {
    //         return A[0]
    //     }
    // }

    var a = A.indexOf(A[0]);
    var b=A.indexOf(A[0], 1)
    if(A.length===1)
        return A[0];
    else if (a !== -1 && b !== -1) {

        A.splice(b, 1);
        A.shift();
        return OddOccurrencesInArray(A)
    }
    else {
        return A[0]
    }

}

function TapeEquilibrium(A) {

    var left, right;

    left = A[0];
    right = A.reduce(function (acc, curVal) {
            return acc + curVal
        }) - left;

    var min = Math.abs(left - right);
    if (A.length === 2)
        return min

    for (var i = 1; i < A.length - 1; i++) {
        var cur = A[i];
        var cuMin;
        left += cur;
        right -= cur;
        cuMin = Math.abs(left - right)
        if (cuMin < min) {
            min = cuMin
        }
    }

    return min

}

function FrogJmp() {

}
console.log(OddOccurrencesInArray([9,3,9,3,9,7,9]))


