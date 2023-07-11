const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10) {
    console.log('Просмотретренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    console.log('Вы классический зритель');
}  else if (personalMovieDB >=30) {
    console.log('Вы киноман, батюшка!');
} else {
    console.log('Произошла ошибка')
}
 
console.log(personalMovieDB);