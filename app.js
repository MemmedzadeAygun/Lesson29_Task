
let user={
    username:"Jessica",
    surname:"William",
    age:30,

    setAge(newAge){
        this.age=newAge;
        return this.age;
    },

    getYearsBeforeRetirement(){
        let retirementAge=65;
        let days=retirementAge-this.setAge(this.age);
        return days;
    }
}

console.log(user.setAge(50));
console.log(user.getYearsBeforeRetirement());

