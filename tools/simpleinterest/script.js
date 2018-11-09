var selectedInput;

function solveForChange() {
    var textInputBox = ["inputInterest","inputPrincipal","inputTime","inputRate"];
    var value = document.getElementById('solveSelection').value;
    switch(value) {
        case 'i':
            selectedInput = 'inputInterest';
            document.getElementById('formulaBlock').innerHTML = 'I = P × t × r';
        break;
        case 'p':
            selectedInput = 'inputPrincipal';
            document.getElementById('formulaBlock').innerHTML = 'P = I / r × t';
        break;
        case 't':
            selectedInput = 'inputTime';
            document.getElementById('formulaBlock').innerHTML = 't = I / P × r';
        break;
        case 'r':
            selectedInput = 'inputRate';
            document.getElementById('formulaBlock').innerHTML = 'r = I / P × t';
        break;
        default:
            document.getElementById('formulaBlock').innerHTML = '';
    }

    for(var i=0; i < textInputBox.length; i++) {
        if (textInputBox[i] != selectedInput) {
            document.getElementById(textInputBox[i]).removeAttribute('disabled');
        } else {
            document.getElementById(selectedInput).setAttribute('disabled','disabled');
        }
        document.getElementById(textInputBox[i]).value = '';
    }
}

$("#inputInterest,#inputPrincipal,#inputTime,#inputRate").on('change keydown paste input', function(){
    var textInterest = document.getElementById('inputInterest').value
    var textPrincipal = document.getElementById('inputPrincipal').value
    var textTime = document.getElementById('inputTime').value
    var textRate = document.getElementById('inputRate').value
    
    console.log(selectedInput)
    switch(selectedInput) {
        case 'inputInterest':
        if(!textPrincipal && !textTime && !textRate) {}
        else{
            var ans = textPrincipal * textTime * textRate;
            document.getElementById('solution-answer').innerHTML = ans.toLocaleString('en-PH', {currency: 'PHP', style: 'currency'});
        }
        break;
        case 'inputPrincipal':
        if(!textInterest && !textTime && !textRate) {}
        else{
            console.log('meow')
            var ans = textInterest / (textTime * textRate);
            document.getElementById('solution-answer').innerHTML = ans;
        }
        break;
        case 'inputTime':
        if(!textPrincipal && !textInterest && !textRate) {}
        else{
            var ans = textInterest / (textPrincipal * textRate);
            document.getElementById('solution-answer').innerHTML = ans;
        }
        break;
        case 'inputRate':
        if(!textPrincipal && !textTime && !textInterest) {}
        else{
            var ans = textInterest / (textPrincipal * textTime);
            document.getElementById('solution-answer').innerHTML = ans;
        }
        break;
        default:

    }
});