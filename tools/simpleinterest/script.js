function solveForChange() {
    var textInputBox = ["inputInterest","inputPrincipal","inputTime","inputRate"];
    var value = document.getElementById('solveSelection').value;
    switch(value) {
        case 'i':
            var selectedInput = 'inputInterest';
            document.getElementById('formulaBlock').innerHTML = 'I = P × t × r';
        break;
        case 'p':
            var selectedInput = 'inputPrincipal';
            document.getElementById('formulaBlock').innerHTML = 'P = I / r × t';
        break;
        case 't':
            var selectedInput = 'inputTime';
            document.getElementById('formulaBlock').innerHTML = 't = I / P × r';
        break;
        case 'r':
            var selectedInput = 'inputRate';
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