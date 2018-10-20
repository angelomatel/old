function solveForChange() {
    var value = document.getElementById('solveSelection').value;
    switch(value) {
        case 'i':
            document.getElementById('formulaBlock').innerHTML = 'I = P × t × r';
        break;
        case 'p':
            document.getElementById('formulaBlock').innerHTML = 'P = I / r × t';
        break;
        case 't':
            document.getElementById('formulaBlock').innerHTML = 't = I / P × r';
        break;
        case 'r':
            document.getElementById('formulaBlock').innerHTML = 'r = I / P × t';
        break;
        default:
        
    }
}