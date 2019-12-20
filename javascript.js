let p = document.getElementById('paragraph');
let p1 = document.getElementById('percentage');
let carCount = 0;
let goatCount = 0;
let percentage = 0;
let car = Math.round(Math.random() * 3);;

let door1 = document.getElementById('1');
let door2 = document.getElementById('2');
let door3 = document.getElementById('3');

let selection = 0;

let choice;

window.alert("Click a door to start playing. To play again, click on a door.")

function generateCar() {
    car = Math.round(Math.random() * 3);
    while (car == 0) {
        car = Math.round(Math.random() * 3);
    };

    // console.log('the car is in door ' + car);
}

function play() {
    for (let i = 1; i < 4; i++) {
        let setDoors = document.getElementById(i);
        setDoors.style.backgroundImage = "url('images/door.jpg')";
        setDoors.innerHTML = 'Door ' + i;
    }
    generateCar();
}

function addEventListeners() {
    door1.addEventListener('click', () => {
        selectDoor(1);
    });
    door2.addEventListener('click', () => {
        selectDoor(2);
    });
    door3.addEventListener('click', () => {
        selectDoor(3);
    });
}

function openGoat() {
    choice = 0;
    while (choice == car || choice == 0 || choice == selection) {
        choice = Math.round(Math.random() * 3);
    }
    // console.log('user select: ' + selection);
    console.log('computer goat choice: ' + choice);
    console.log('car is in ' + car);

    setTimeout(() => {
        document.getElementById(choice.toString()).innerHTML = 'Goat';
        document.getElementById(choice.toString()).style.backgroundImage = "url('images/goat.jpg')";
        document.getElementById(choice.toString()).style.backgroundSize = "220px 480px";
    }, 1000);

}

function checkSwitchDoors() {

    let confirm = window.confirm('do you wish to switch doors?');
    if (confirm) {
        document.getElementById(selection.toString()).innerHTML = 'Door ' + selection.toString();
        let newDoor = 0;
        for (let i = 1; i < 4; i++) {
            newDoor = i;
            if (newDoor != selection && newDoor != choice) {
                selection = newDoor;
                break;
            }
        }
    }

    // console.log("final selection: " + selection);
    document.getElementById(selection.toString()).innerHTML = 'user choice';

    let selectedDoor = document.getElementById(selection.toString());

    if (selection == car) {
        selectedDoor.innerHTML = 'CAR :D';
        selectedDoor.style.backgroundImage = "url('images/car.jpg')";
        selectedDoor.style.backgroundSize = '220px 480px';
        carCount += 1;
        percentage = Math.round((carCount / (carCount + goatCount)) * 100); p.innerHTML = 'Cars won: ' + carCount + "<br/>" + 'Goats won: ' + goatCount;
        p1.innerHTML = 'Percentage cars: ' + percentage + '%';
    } else {
        selectedDoor.innerHTML = 'Goat :(';
        selectedDoor.style.backgroundImage = "url('images/goat.jpg')";
        selectedDoor.style.backgroundSize = '220px 480px';
        goatCount += 1;
        percentage = Math.round((carCount / (carCount + goatCount)) * 100);
        p.innerHTML = 'Cars won: ' + carCount + "<br/>" + 'Goats won: ' + goatCount;
        p1.innerHTML = 'Percentage cars: ' + percentage + '%';
    }

}


function selectDoor(number) {
    play();
    selection = number;
    document.getElementById(selection.toString()).innerHTML = 'user choice';
    openGoat();

    setTimeout(checkSwitchDoors, 1500);

}

addEventListeners();