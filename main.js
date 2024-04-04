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
        if (password.length >= 5) { 
            this.password = password;
        } else {
            this.password = "00000"; 
        }
        if (bio.length > 30) { 
            this.bio = "i'm new at this app"; 
        } else {
            this.bio = bio; 
        }
       

    }

    changePassword(currentPass, newPass) {
        if (this.password === currentPass) {
            this.password = newPass;
            console.log("Password changed successfully");
        } else {
            console.log("Current password is incorrect");
        }
    }
    changeEmail(users, newEmail) {

        let isUnique = true;
        for (let user of users) {
            if (user !== this && user.email === newEmail) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            this.email = newEmail;
            console.log("Email deyisdi");
        } else {
            console.log("Email istifade olunub");
        }
    }
}

// let User1 = new User("Rena", "Quliyeva", 20, "female", "Azerbaycan", "Reiyna1o", "quliyevarena@gmail.com", true, true, "rena123", "i am a fornt end developer")
// console.log(User1.changePassword("rena123","salam123"));
// console.log(User1.password);



// User class-ından istifadə edib bir neçə user yaradın və bir users array-inə yığın.

// Global functions.

// 1. sortUsersByUsername() - parameter array qəbul edir və geriyə username-ə görə A-Z sort edir.

// 2. filterByBirthYear() - parameter olaraq users array-i, bir year qəbul edir və həmin ildən böyük olan user-ləri filter edir.

// 3. Login() - parameter olaraq users array-i, bir username və bir password qəbul edir. Və əgər
// a. username-də bir user tapılmazsa, 'user not found!'
// b. username ve ya password yalnish olarsa, 'incorrect username or password'
// c. her ikisi dogru olarsa, ancaq her hansi bir user-in isLogged deyeri true olarsa, o zaman 'another user currently logged in' return etmelidir
// d. her ikisi dogru olarsa hemin user-in isLogged deyeri true olur ve alert('successfully logged in') verir

// 3. LogOut() - parameter olaraq bir users array-i ve username qebul, Eger,
// a. Daxil olunmush username-de bir user tapmazsa 'user not found'
// b. Daxil olunmush username-de user tapsa, ancaq isLogged deyeri false olarsa o zaman, 'user did not logged in to log out!'
// c. Daxil olunmush username-de user tapsa ve isLogged deyeri true olarsa o zaman, user-in isLogged deyeri false olur ve 'successfully' logged out

// 4. CreateUser() - parameter olaraq bir array ve bir User obj qebul edir ve hemin user-i array-e elave edir


// 5. DeleteUser() - parameter olaraq bir array ve bir username qebul edir ve daxil olunmush username-de user tapilarsa hemin User-i silir,
// tapmazsa o zaman 'user not found' return edir.

let User1 = new User("Rena", "Quliyeva", 20, "female", "Azerbaycan", "Reiyna1o", "quliyevarena@gmail.com", true, true, "rena123", "i am a fornt end developer")
let User2 = new User("Nigar", "ahmedova", 19, "female", "Azerbaycan", "nigar27", "nigarah@gmail.com", true, false, "nigar123", "i am a back end developer")
let User3 = new User("Aydan", "Kazimaova", 22, "female", "Russia", "aydann", "aydank@gmail.com", false, false, "rena123", "i am a fornt end developer")
let User4 = new User("Tahir", "Sixlarov", 21, "male", "Azerbaycan", "tahir099", "tahirshiclaar@gmail.com", false, false, "tahir123", "i am a mobile developer")


usersArr=[User1,User2,User3,User4]


function sortUsersByUsername(users) {
    return users.slice().sort((a, b) => {
        const username1 = a.username.toLowerCase();
        const username2 = b.username.toLowerCase();
        if (username1 < username2) return -1;
        if (username1 > username2) return 1;
        return 0;
    });
}


// let sortedUsers = sortUsersByUsername(usersArr);
// console.log(sortedUsers);


function filterByBirthYear(users, year) {
    return users.filter(user => user.getBirthYear() > year);
}

// let filteredUsers = filterByBirthYear(usersArr, 2003);
// console.log(filteredUsers);


function login(users, username, password) {
    const user = users.find(user => user.username === username);
    
    if (!user) {
        console.log('user not found!');
        return;
    }

    if (user.password !== password) {
        console.log('incorrect username or password');
        return;
    }

    if (user.isLogged) {
        console.log('another user currently logged in');
        return;
    }

    user.isLogged = true;
    console.log('successfully logged in');
}


// login(usersArr, 'Reiyna1o', 'rena123'); 

function logout(users, username) {
    const user = users.find(user => user.username === username);
    
    if (!user) {
        console.log('user not found');
        return;
    }

    if (!user.isLogged) {
        console.log('user did not log in to log out!');
        return;
    }

    user.isLogged = false;
    console.log('successfully logged out');
}
// login(usersArr, 'Reiyna1o', 'rena123'); 
// logout(usersArr, 'Reiyna1o'); 



function createUser(users, newUser) {
    users.push(newUser);
}

let newUser = new User("Safura", "Quliyeva", 20, "female", "Azerbaijan", "safura123", "safush@example.com", false, false, "safus123", "I am a new manager");
createUser(usersArr, newUser);
// console.log(usersArr);


function deleteUser(users, username) {
    const index = users.findIndex(user => user.username === username);
    
    if (index !== -1) {
        users.splice(index, 1);
        console.log('User deleted successfully');
    } else {
        console.log('User not found');
    }
}


console.log(deleteUser(usersArr, 'quliyeva'));
// console.log(usersArr);
