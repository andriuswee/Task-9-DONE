/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  getSummary() {
    return `Movie ${this.title} is directed by ${this.director} and costs ${this.budget}`;
  }
}

const movie = new Movie("Star wars", "George Lucas", 200000000);
const movie2 = new Movie("Titanic", "James Cameron", 800000000);

console.log(movie.getSummary());
console.log(movie2.getSummary());
