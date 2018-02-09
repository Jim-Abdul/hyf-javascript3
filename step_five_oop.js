class Movies {
    constructor(title, director) {
        this.title = title;
        this.director = director;
        this.stars = [];
        this.writers = [];
        this.ratings = [];
    }
    getTitle() { return this.title; };
    getDirector() { return this.director; }
    addStar(star) { this.stars.push(star); }
    getStars() { return this.stars; }
    addWriter(writer) { this.writers.push(writer); }
    getWriters() { return this.writers; }
    addRating(rating) { this.ratings.push(rating); }
    getAverageRatings() { return this.ratings; }
}

class Staff {
    constructor(name, role, age) {
        this.name = name;
        this.role = role;
        this.age = age;
    }
    getName() { return this.name; }
    getRole() { return this.role; }
    getAge() { return this.age; }

}
//let myMovie = new Movie(...);
let myMovie = new Movies("Logan", "James Mangold");



myMovie.addStar(new Staff('Hugh Jackman', "actor", 49));
myMovie.addStar(new Staff("Scott Frank", "writer", 57));
myMovie.addStar(new Staff("James Mangold", "director", 54));
myMovie.addWriter("Scott Frank");
myMovie.addWriter("Michael Green");
myMovie.addRating(8.1);



console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()} years old!!`));
console.log(`Director is : ${myMovie.getDirector()}`);