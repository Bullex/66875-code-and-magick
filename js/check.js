function getMessage(a, b) {
    var resultStr = '';
    switch (typeof a) {
        case 'boolean':
            a ? resultStr = 'Я попал в ' + b : resultStr = 'Я никуда не попал';
            break;
        case 'number':
            resultStr = 'Я прыгнул на ' + a * 100 + ' сантиметров';
            break;
        case 'object':
            if (typeof b === 'object') {
                var length = 0,
                    minElem = Math.min(a.length, b.length);
                for (var i = 0; i < minElem; i++) {
                    length += a[i] * b[i];
                }
                resultStr = 'Я прошел ' + length + ' метров';
            } else {
                var sum = 0;
                a.forEach(function(element) { sum += element; })
                resultStr = 'Я прошел ' + sum + ' шагов';
            }
            break;
    }
    return resultStr;
}