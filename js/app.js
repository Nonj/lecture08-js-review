'use strict';

function horrorTickets(moviesArray) {

    // get all horror films
    var horrorMoviesArray = moviesArray.filter(function (movieObj) {

        // return should we keep it

        return (movieObj.genre === 'Horror');

    });

    console.log(horrorMoviesArray);


    // More complicated
    var totalNum = 0;
    horrorMoviesArray.forEach(function (movieObj) {
        return totalNum += movieObj.tickets;
    });
    console.log(totalNum);



    // Easier with (reduce)
    var totalNums = horrorMoviesArray.reduce(function (currTotal, movieObj) {
        return currTotal + movieObj.tickets;
    }, 0);
    console.log(totalNums);

    // total tickets for those films

    return totalNum;


}

function main() {
    fetch('data/movies-2006-2015.json')
        .then(function (response) {
            var data = response.json();
            return data;
        })
        .then(horrorTickets);
}
main();

