const areaNumeri = document.querySelector('.numbers');

for (let i = 1; i < 101; i++) {
    let pseudoelement = document.createElement('div');
    pseudoelement.classList.add('box');

    if (i % 15 == 0) {
        pseudoelement.classList.add('fizzbuzz');
        pseudoelement.innerHTML = 'fizzbuzz';
    } else if (i % 5 == 0) {
        pseudoelement.classList.add('buzz');
        pseudoelement.innerHTML = 'buzz';
    } else if (i % 3 == 0) {
        pseudoelement.classList.add('fizz');
        pseudoelement.innerHTML = 'fizz';
    } else {
        pseudoelement.innerHTML = i
    }

    areaNumeri.append(pseudoelement);
}