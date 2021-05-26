class User{
    constructor(email, name)
    {
        this.email=email;
        this.name=name;
        this.score=0;
    }
    login()
    {
        console.log(this.email, ' logged in');
        return this;
    }
    logout(){
        console.log(this.email, ' loggedout ');
        return this;
    }
    updatescore(){
        this.score++;
        console.log(this.score, ' is your score ');
        return this;
    }
}

class Admin extends User {
    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email;
        });
    }
}

var obj=new User("noor@noor.com", "Noor");
var objo=new User("deep@deep.com", "Deep");
var admin = new Admin('abc@abc.com', 'abc');

var users=[obj, objo, admin];

// admin.deleteUser(obj);
console.log(admin.deleteUser(obj));
console.log(users);

// console.log(obj);
// console.log(objo);

obj.login();
obj.logout();
objo.login();
objo.logout();

//method chaining possible if we write 'return this' else it would show undefined
//  bcoz it has no object reference
console.log("method chaining");
obj.login().logout().updatescore();

// new keyword:-
// creates a new empty Object{}
// sets value of 'this' to be new empty Object
// calls constructor method
