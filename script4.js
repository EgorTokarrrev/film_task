/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

// start();

const personalMovieDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const watchedMovie1 = prompt('Один из последних просмотренных фильмов?');
        const rating1 = prompt('На сколько оцените его?');
        if(watchedMovie1 != null && rating1 != null && watchedMovie1 != '' && rating1 != '' && watchedMovie1.length < 50) {
            personalMovieDB.movies[watchedMovie1] = rating1;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
// rememberMyFilms();


function detetectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотретренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log('Вы классический зритель');
    }  else if (personalMovieDB >=30) {
        console.log('Вы киноман, батюшка!');
    } else {
        console.log('Произошла ошибка')
    }
}
// detetectPersonalLevel(); 

function showMyDB(hidden) {
if (!hidden) {
    console.log(personalMovieDB);
}
} 

showMyDB(personalMovieDB.privat); 

function writeYourGenres () {
     for (let i = 1; i <= 3; i++) {
          personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
     }
}

writeYourGenres();