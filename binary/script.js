document.getElementById('getBinaryToInteger').onclick = getBinaryToInteger;
document.getElementById('getIntegerToBinary').onclick = getIntegerToBinary;
// document.getElementById('getAlphabetToBinary').onclick = getAlphabetToBinary;

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

function getAlphabetToBinary() {
    var alphabet = document.getElementById('a2b').value.split(/[\s]/gm);
    for (i = 0,result = "";i < alphabet.length; i++) {
        result += alphabet[i].charCodeAt(0).toString(2) + " ";
    }
    document.getElementById('a2b-o').value = result;
    console.log(result)
}

//

function copyBinaryToInteger() {
    var textarea = document.getElementById('b2i-o');
    var copy   = document.getElementById("copyBinarytoIntegerButton");
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
    var copy   = document.getElementById("copyIntegerToBinaryButton");
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
    var text = document.getElementById('a2b-o');
    text.select();
    document.execCommand("copy");

}

copyBinaryToInteger();
copyIntegerToBinary();

console.log('Script loaded')