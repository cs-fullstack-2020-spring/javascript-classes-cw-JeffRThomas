//# JavaScript-classes_objects-cw
console.log("JS Linked");

// ### Problem 1:
// Create a GitHubRepository class with properties userName, fileName, descriptionOfRepository, and code. Create a function that prints all properties. Create an object of the class and use the function.

// ***Start of Code***
// Create a GitHubRepository
class GitHubRepository {
    //Class with properties userName, fileName, descriptionOfRepository, and code//
    constructor(userName, fileName, descriptionOfRepository, code) {
        this.userName = userName;
        this.fileName = fileName;
        this.descriptionOfRepository = descriptionOfRepository;
        this.code = code;
    }
    //Create a function that prints all properties//
    printAll() {
        console.log(`Username:${this.userName}\nFile Name:${this.fileName}\nDescription of Repository:${this.descriptionOfRepository}\nCode:${this.code}`);
    }
}
//Create an object of the class//
let instnce1 = new GitHubRepository("JRashad", "LightWork", "Mastered Concepts", "JavaScript");
//and use the function//
console.log(instnce1);
// ***End of Code***

// ### Problem 2:
// Create a Movie class with the following properties: movieName, rating, and yearReleased. Create a method to change the rating and another one to change the yearReleased properties using prompt. Create an object of the class and use the two methods you created.

// ***Start of Code***
// Create a Movie class
class Movie {
    constructor(movieName, rating, yearReleased) {
        //with the following properties: movieName, rating, and yearReleased//
        this.movieName = movieName;
        this.rating = rating;
        this.yearReleased = yearReleased;
    }
    //Create a method to change the rating properties using prompt//
    chgeRtg(newRating) {
        let newRating = (prompt = (`What is the new rating for the film?`));
        this.rating = newRating;
    }
    //Create a method to change the yearReleased properties using prompt//
    chgeYrRel(newYear) {
        let newYear = (prompt = (`What year was the film released?`));
        this.yearReleased = newYear;
    }

}

