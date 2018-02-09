
class Movie {
    constructor(title, director) {
        
        this.title = title;
        this.director = director;
    }

    getTitle() { return this.title; }
    getDirector() { return this.director; }
    addStar(star) { return this.star === star; }
    getStar() { return this.addStar('star ?'); }
    addWriter(writer) { return this.writer === writer; }
    getWriter() { return this.addWriter('writer ?'); }
    addRating(title) { return this.title === title; }
    getAverageRating() { return this.addRating('The Babel'); }
    

    toConsole() {
        console.log(myMovie.getStar());
        
    }
}

const myMovie = [
    new Movie('The Babel', 'sam'),
    new Movie('The Secret', 'Jim'),
    new Movie('The Hell', 'Miki'),
    new Movie('The Ghost', 'sandy'),
    new Movie('The united', 'Ramzi')
];

//myMovie.forEach(movie => movie.toConsole());

//==============================================================================================================

class StaffMember {
    constructor(name, role, dateOfBirth) {
        this.name = name;
        this.role = role;
        this.dateOfBirth = dateOfBirth;
    }

  //  addMovie(movie) { console.log(this.getName() +' , '+ this.getRole() +' , ' + this.getAge()) }
    getName() { return this.name; }
    getRole() { return this.role; }
    getAge() { return this.dateOfBirth; }
}

const firstActor = [
    new StaffMember('Tom', 'hero', 1930),
    new StaffMember('Nicole', 'wife', 1953),
    new StaffMember('Alex', 'police', 1984),
    new StaffMember('Jams', 'militant', 1990),
    new StaffMember('Sandra', 'teacher', 1962)
];
//firstActor.forEach(movie => movie.addMovie());

//myMovie.addStar(firstActor);
//console.log(myMovie.getStar().map(actor => actor.getName() + actor.getAge()));
// const director = myMovie.getDirector();
//console.log('Director: '+ director.map(director => director.getName()));