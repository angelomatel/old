document.getElementById('getBinaryToInteger').onclick = getBinaryToInteger;
document.getElementById('getIntegerToBinary').onclick = getIntegerToBinary;
document.getElementById('getBinaryToAlphabet').onclick = getBinaryToAlphabet;
document.getElementById('getAlphabetToBinary').onclick = getAlphabetToBinary;

//

function getBinaryToInteger() {
    var binary =  document.getElementById('b2i').value.split(/[\s]/gm);
    var i,result
    for (i = 0,result = "";i < binary.length; i++) {
        result += parseInt(binary[i], 2) + "\n";
    }
    document.getElementById('b2i-o').value = result;
    console.log(result)
}

function getIntegerToBinary() {
    var integer =  document.getElementById('i2b').value.split(/[\s]/gm);
    for (i = 0,result = "";i < integer.length; i++) {
        result += parseFloat(integer[i]).toString(2) + "\n";
    }
    document.getElementById('i2b-o').value = result;
    console.log(result)
}

function getBinaryToAlphabet() {
    var alphabet = document.getElementById('b2a').value.split('\n');
    for (i = 0,result = "";i < alphabet.length; i++) {
        string = alphabet[i].split(" ")
            for (n = 0, tempresult = "";n < string.length; n++) {
                tempresult += String.fromCharCode(parseInt(string[n], 2));
            }
        result += tempresult.replace(/^\s+|\s+$/gm,'') + "\n";
    }
    document.getElementById('b2a-o').value = result;
}

function getAlphabetToBinary() {
    var alphabet = document.getElementById('a2b').value.split('\n');
    for (i = 0,result = "";i < alphabet.length; i++) {
        string = alphabet[i].split("")
            for (n = 0, tempresult = "";n < string.length; n++) {
                tempresult += string[n].charCodeAt(0).toString(2) + " ";
            }
        result += tempresult.replace(/^\s+|\s+$/gm,'') + "\n";
    }
    document.getElementById('a2b-o').value = result;
}

//

function copyBinaryToInteger() {
    var textarea = document.getElementById('b2i-o');
    var copy = document.getElementById("copyBinarytoIntegerButton");
    copy.addEventListener('click', function(e) {
    
        textarea.select(); 
        try {
            var successful = document.execCommand('copy');
            if(successful) alert('The output has been copied to your clipboard!');
            else alert('An error has occured! Try again');
        } catch (err) {
            alert('Your browser is not supported! :/');
        }
    });
}

function copyIntegerToBinary() {
    var textarea = document.getElementById('i2b-o');
    var copy = document.getElementById("copyIntegerToBinaryButton");
    copy.addEventListener('click', function(e) {
    
        textarea.select(); 
        try {
            var successful = document.execCommand('copy');
            if(successful) alert('The output has been copied to your clipboard!');
            else alert('An error has occured! Try again');
        } catch (err) {
            alert('Your browser is not supported! :/');
        }
    });
}

function copyAlphabetToBinary() {
    var textarea = document.getElementById('a2b-o');
    var copy = document.getElementById("copyAlphabetToBinaryButton");
    copy.addEventListener('click', function(e) {
    
        textarea.select(); 
        try {
            var successful = document.execCommand('copy');
            if(successful) alert('The output has been copied to your clipboard!');
            else alert('An error has occured! Try again');
        } catch (err) {
            alert('Your browser is not supported! :/');
        }
    });
}

function copyBinarytoAlphabet() {
    var textarea = document.getElementById('b2a-o');
    var copy = document.getElementById("copyBinarytoAlphabetButton");
    copy.addEventListener('click', function(e) {
    
        textarea.select(); 
        try {
            var successful = document.execCommand('copy');
            if(successful) alert('The output has been copied to your clipboard!');
            else alert('An error has occured! Try again');
        } catch (err) {
            alert('Your browser is not supported! :/');
        }
    });
}

copyBinaryToInteger();
copyIntegerToBinary();
copyBinarytoAlphabet();
copyAlphabetToBinary();

console.log('Script loaded')