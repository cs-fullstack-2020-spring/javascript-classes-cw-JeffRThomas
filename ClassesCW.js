// //# JavaScript-classes_objects-cw
// console.log("JS Linked");
// !! NICE use of CSS
// ### Problem 1:
// Create a GitHubRepository class with properties userName, fileName, descriptionOfRepository, and code. Create a function that prints all properties. Create an object of the class and use the function.

// // ***Start of Code***
// // Create a GitHubRepository
// class GitHubRepository {
//     //Class with properties userName, fileName, descriptionOfRepository, and code//
//     constructor(userName, fileName, descriptionOfRepository, code) {
//         this.userName = userName;
//         this.fileName = fileName;
//         this.descriptionOfRepository = descriptionOfRepository;
//         this.code = code;
//     }
//     //Create a function that prints all properties//
//     printAll() {
//         console.log(`Username:${this.userName}\nFile Name:${this.fileName}\nDescription of Repository:${this.descriptionOfRepository}\nCode:${this.code}`);
//     }
// }
// //Create an object of the class//
// let instnce1 = new GitHubRepository("JRashad", "LightWork", "Mastered Concepts", "JavaScript");
// //and use the function//
// console.log(instnce1); // !! you method is called printAll();
// // ***End of Code***

// // ### Problem 2:
// // Create a Movie class with the following properties: movieName, rating, and yearReleased. Create a method to change the rating and another one to change the yearReleased properties using prompt. Create an object of the class and use the two methods you created.
// // ***Start of Code***
// // Create a Movie class
// class Movie {
//     constructor(movieName, rating, yearReleased) {
//         //with the following properties: movieName, rating, and yearReleased//
//         this.movieName = movieName;
//         this.rating = rating;
//         this.yearReleased = yearReleased;
//     }
//     //Create a method to change the rating properties using prompt//
//     chgeRtg(userRating) { // !! no need to pass any params bc you are going to prompt for input
//         this.rating = prompt(`What is the new rating for the film "${this.movieName}"? The current rating shows as "${this.rating}".`);
//         // !! AWESOME prompt message
//     }
//     //Create a method to change the yearReleased properties using prompt//
//     chgeYrRel(newYear) {  // !! no need to pass any params bc you are going to prompt for input
//         this.yearReleased = prompt(`What year was the film "${this.movieName}" released? The current year shows as "${this.yearReleased}".`);
//     }
// }
// //Create an object of the class and use the two methods you created//
// let sampleFilm = new Movie("The Matrix", "9", "1998");
// console.log(sampleFilm);
// sampleFilm.chgeRtg(10);//Change Rating Method !! NO need to pass in params bc you are going to prompt the user for input
// console.log(sampleFilm.rating); // !! NICE check
// sampleFilm.chgeYrRel(1999);//Change Release Year Method !! NO need to pass in params bc you are going to prompt the user for input
// console.log(sampleFilm.yearReleased); // !! NICE check
// // ***End of Code***

// ### Problem 3:
// Create a Student class with the following properties : studentName, codeSchoolCohort, and grades(grades should be an array of objects and each object should have the properties assignemtName and assignemtnScore). Create a method that accepts a student name and updates the studentName of an instance of your Student Class. Create a method that accepts an assignment name and assignment score and adds a grade object to the grades array. Create two instances of this class with empty grade arrays. Update the name of one instance of the Student Class using the class method. Add one grade object to each instance of the Student Class grade array using the class method.
// HINT : use object literal notation to create a grade object in the grade array for each instance of the Student Class

// //***Start of Code***
// // Create a Student class//
// class Student {
//     constructor(studentName, codeSchoolCohort, grades) {
//         //A Class with the following properties : studentName, codeSchoolCohort, and grades(grades should be an array of objects and each object should have the properties assignemtName and assignemtnScore)
//         this.studentName = studentName;
//         this.codeSchoolCohort = codeSchoolCohort;
//         this.grades = grades;
//     }
//     //Create a method that accepts a student name and updates the studentName of an instance of your Student Class
//     nameChange(newName) {   // !! no need to pass any params bc you are going to prompt for input
//         this.studentName = prompt(`The current listed student name is "${this.studentName}",enter a new name to update the listing.`);
//     }
//     //Create a method that accepts an assignment name and assignment score and adds a grade object to the grades array//
//     // updateGradebook(assgmtName,assgmtGrade) {
//     //     let gradeBook=[];
//     //     userAssgmt=prompt(`Enter the name of the next assignment.`);
//     //     this.grades
//     // }
// }
// let firstEntry = new Student("Jeff R. Thomas","4","100");
// console.log(firstEntry);
// firstEntry.nameChange("Jeff Rashad Thomas"); // !! NO need to pass in params bc you are going to prompt the user for input
// console.log(firstEntry);
// //Create two instances of this class with empty grade arrays
// //Update the name of one instance of the Student Class using the class method. Add one grade object to each instance of the Student Class grade array using the class method.
// // HINT : use object literal notation to create a grade object in the grade array for each instance of the Student Class
// // ***End of Code***


