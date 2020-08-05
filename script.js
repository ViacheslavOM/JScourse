'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function start() {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function rememberMyFilms () {
        for (let i = 0; i < 2; i++){
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
                if (a != '' && b != '' && a != null && b != null && a.length < 50) {
                    personalMovieDB.movies[a] = b;
                    console.log('Done!');
                } else {
                    i--;
                    console.log('Error');
                }
            }
        },

    detectPersonalLevel: function detectPersonalLevel() {
        if (personalMovieDB.count <= 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30){
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },

    showMyDB: function showMyDB (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);    
        } 
    },

    writeYourGenres: function writeYourGenres () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == null || genre === '') {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },

    toggleVisibleMyDB: function toggleVisibleMyDB() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};