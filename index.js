/**
 *
 * translate arabic number to chinese
 *
 * */

(function() {
    var digitPositionNames = ['千', '百', '十', ''];
    var tenPositionName = digitPositionNames[2];
    var digitPositionNumbers = [0, 0, 0, 0];

    function initDigitPositionNumbers(int_n) {
        // thousand
        digitPositionNumbers[0] = Math.floor(int_n/1000);
        digitPositionNumbers[1] = Math.floor((int_n % 1000) / 100);
        digitPositionNumbers[2] = Math.floor((int_n % 100) / 10);
        digitPositionNumbers[3] = Math.floor(int_n % 10);
    }

    function isLastOnPosition(index) {
        return index === (digitPositionNumbers.length - 1);
    }
    function isTenPosition(index) {
        return index === (digitPositionNumbers.length - 2);
    }
    function afterOneIs0(index) {
        return !isLastOnPosition(index) && (digitPositionNumbers[index + 1] === 0);
    }
    function isZero(index) {
        return digitPositionNumbers[index] === 0;
    }
    function isEqualOne(index) {
        return digitPositionNumbers[index] === 1;
    }
    function hasAnyNumberMoreThan0Before(index) {
        for(var i = 0, len = digitPositionNumbers.length; i<index && i<len; i++) {
            if(digitPositionNumbers[i] > 0) return true;
        }
        return false;
    }
    
    /**
     * @param {number} num 0 <= n < 10000 n should be an integer
     * @return string
     * */
    function araToCh(num) {
        if(typeof num !== 'number') {
            throw new Error('param ' + num + 'should be a number');
        }
        var i_n = Math.floor(num);
        if(i_n < 0 || i_n >= 9999) {
            throw new Error('invalid param: ' + num);
        }

        initDigitPositionNumbers(i_n);

        var result = '';
        for(var i = 0, len = digitPositionNumbers.length; i<len; i++) {
            var n = digitPositionNumbers[i];

            if(isZero(i)) {
                if(hasAnyNumberMoreThan0Before(i)) {
                    if(afterOneIs0(i)) {
                        // do nothing
                    } else {
                        if(isLastOnPosition(i)) {
                            // do nothing
                        } else {
                            result += '零';
                        }
                    }
                } else {
                    result += (isLastOnPosition(i) ? '零' : '');
                }
            } else {
                if(isLastOnPosition(i)) {
                    result += nToUpperCase(n);
                } else {
                    if(isTenPosition(i)) {
                        if(isEqualOne(i)) {
                            if(hasAnyNumberMoreThan0Before(i)) {
                                result += nToUpperCase(n);
                                result += tenPositionName;
                            } else {
                                result += tenPositionName;
                            }
                        } else {
                            result += nToUpperCase(n);
                            result += tenPositionName;
                        }
                    } else {
                        result += nToUpperCase(n);
                        result += digitPositionNames[i];
                    }
                }
            }

        }
        return result;

    }


    /**
     * @param {number} n  0<= n <=9   integer
     * @return string  一 二  ...
     * */
    function nToUpperCase(n) {
        var i_n = Math.floor(n);
        if(isNaN(i_n) || i_n < 0 || i_n > 9) {
            throw new Error('invalided number n: ' + n);
        }
        var chineseNumbers = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
        return chineseNumbers[i_n];
    }

    window.araToCh = araToCh;

})()


