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
    }, 0/*this is "curr total" */ );
    console.log(totalNums);

    // total tickets for those films
    return totalNum;

}

function genreSales(moviesArray) {
    /*   
    //one option : Genre as keys, then sales etc. 
    Level 1: Object of genre
    level 2: Object for each genres;
    level 3: Object inside of each genre - of sales, tickets, etc
    level 4: The object contains a
    {
        horror : { 
            sales: #, 
            tickets: #, 
            count: #
        },
        action : {
            ...
        }
    } */

    moviesArray.reduce(function(currObj, movieObj) {
        var genreStr = movieObj.genre;

        if (currObj[genre] === undefined) {
            currObj[genre] = {
                totalSales: 0, 
                totalTickes: 0, 
                totalMovies: 0
            };
        }

        currObj[genreStr/*USE THIS NOTATION IF INDEX IS STRING VARIABLE*/]
        // Object.key == Object["key"];
        currObj[genreStr].ticketSales +=  movieObj.sales;
        return currObj;

    },{});

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

