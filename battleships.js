//Запуск игры
//Скрипт размещения корабля
//Начало боя
//Цикл запроса у пользователя координат и сравнение с положением корабля
//Окончание игры, вывод оценки

let location1 = Math.floor(Math.random() * 5);
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

const fireForm = document.forms.fire;

fireForm.addEventListener("submit", function (event) {
    event.preventDefault();
    guess = event.target.guessInput.value;
    event.target.guessInput.value = "";
    if (guess < 0 || guess > 6) {
        alert("Введите число от 0 до 6! По-другому никак.");
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Есть пробитие!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("Поздравляю с победой!");
                alert("Количество выстрелов, чтобы потопить корабль: " + guesses + "!" +
                " А это значит, что уровень вашей точности: " + (3/guesses));
            }
        } else {
            alert("Мимо!")
        }
    }
})

alert("Приветствую! Перед Вами мини-морской бой. Это своеобразная заготовка под полноценную игру! Представьте, что в 7 ячейках по горизонтали расположен 3-ёх палубный вражеский корабль! Ваша задача потопить его за меньшее количество выстрелов. Введите число от 0 до 6. May the Force be with you!")
