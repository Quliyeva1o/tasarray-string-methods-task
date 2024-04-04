// Aşağıdakı parameter-lrə sahib bir Human class-ı yaradın.
// Human class
// - Name,
// - Surname,
// - Age (default sıfır),
// - gender
// - nationality
// - getFullName() - method
// - getBirthYear() - method - new Date() - currentYear


class Human {

    constructor(name, surname, age = 0, gender, nationality) {
        this.name = name
        this.surname = surname
        this.age = age
        this.gender = gender
        this.nationality = nationality

    }

    getFullName() {
        return this.surname + " " + this.name;
    }
    getBirthYear() {

        return new Date().getFullYear() - this.age
    }
}

// let human1 = new Human("Rena", "Quliyeva", 20, "female", "Azerbaycan")
// let human2 = new Human("Nigar", "Ahmedova", 18, "female", "Azerbaycan")
// humansArr = [human1, human2]



// console.log(human1.getFullName());
// console.log(human1.getBirthYear());




// Human classından miras alan User class-ı yaradın.
// User class
// - Username
// - Email
// - isAdmin (true/false)
// - isLogged (true/false) => default false (constructor-da gondermirsiniz bu deyeri)
// - password (minimum 5 simvol olmalidir)
// - bio (maxlength 30 ola biler)
// - changePassword() - method-u var ve 2 parameter qebul edir, currentPassword ve newPassword => yoxlayirki eger currentPassword dogrudursa,
// newPassword-u teyin edib update edir, eger yalnishdirsa, kohne password oldugu kimi qalir ve alert verir
// - changeEmail() - method parameter olaraq users array-i ve newEmail qebul etmelidir ve newEmail-in bashqa user-de olub-olmamasini yoxlayir.
// Eger unique-dirse o zaman email-i update edir, eger unique deyilse, oldugu kimi qalir ve alert verir.

class User extends Human {
    constructor(name, surname, age = 0, gender, nationality, username, email, isAdmin, isLogged, password, bio) {
        isLogged = false
        super(name, surname, age, gender, nationality)
        this.username = username;
        this.email = email;
        this.isAdmin = isAdmin;
        this.isLogged = isLogged
        this.bio=bio
        if (this.password > 5) {
            this.password = password;
        }
        else (
            password = "0000"
        )

        if (bio.split().lenth> 30) {
            bio = "i'm new at this app"

        }
       

    }

    changePassword(currentPass, newPass) {

        if (
            this.password == currentPass
        ) {
            this.password = newPass
        }
        else {
            alert("curren password is false")
        }
    }
}

let User1 = new User("Rena", "Quliyeva", 20, "female", "Azerbaycan", "Reiyna1o", "quliyevarena@gmail.com", true, true, "ren", "i am a fornt end developer")
console.log(User1);


