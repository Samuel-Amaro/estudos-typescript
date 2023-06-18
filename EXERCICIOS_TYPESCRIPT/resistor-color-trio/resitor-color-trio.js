function decodedResistorValue(colors) {
    var colorBands = [
        {
            name: "black",
            number: 0
        },
        {
            name: "brown",
            number: 1
        },
        {
            name: "red",
            number: 2
        },
        {
            name: "orange",
            number: 3
        },
        {
            name: "yellow",
            number: 4
        },
        {
            name: "green",
            number: 5
        },
        {
            name: "blue",
            number: 6
        },
        {
            name: "violet",
            number: 7
        },
        {
            name: "grey",
            number: 8
        },
        {
            name: "white",
            number: 9
        }
    ];
    function addZeros(str, numberFromZeros) {
        for (var i = 0; i < numberFromZeros; i++) {
            str = str + 0;
        }
        return str;
    }
    function formatResult(str) {
        //console.log(str);
        var parsedNumber = parseFloat(str);
        var parsedString = parsedNumber.toLocaleString();
        var resultFormat = parseFloat(parsedString) * 1;
        //console.log(parsedNumber);
        if (parsedNumber > 1000) {
            return "".concat(resultFormat, " kiloohms");
        }
        else {
            return "".concat(resultFormat, " ohms");
        }
    }
    var result = "";
    for (var i = 0; i < colors.length; i++) {
        for (var j = 0; j < colorBands.length; j++) {
            if (colors[i].toLowerCase() === colorBands[j].name.toLowerCase() && i !== colors.length - 1) {
                result = result + colorBands[j].number;
            }
            else if (colors[colors.length - 1] && colors[i].toLowerCase() === colorBands[j].name.toLowerCase()) {
                result = addZeros(result, colorBands[j].number);
            }
        }
    }
    return formatResult(result);
}
console.log(decodedResistorValue(['orange', 'orange', 'black'])); //'33 ohms'
console.log(decodedResistorValue(['blue', 'grey', 'brown'])); //'680 ohms'
console.log(decodedResistorValue(['red', 'black', 'red'])); //'2 kiloohms'
console.log(decodedResistorValue(['green', 'brown', 'orange'])); //'51 kiloohms'
console.log(decodedResistorValue(['yellow', 'violet', 'yellow'])); //'470 kiloohms'
