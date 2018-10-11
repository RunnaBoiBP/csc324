// Chapter 6 Group Exercise

// The instructions were to create a class that has add,
// delete, and has methods. The constructor of the class
// creates a new group, which is what the this.members = []
// does, as it creates an empty array of objects. Then, the
// add function adds a new value to the group, but only if
// it isn't already a member of the group. The delete function
// I have checks to see if the current value is a member of the
// group, and if it is then it filters it out of the members of
// the array. The has function simply returns TRUE if the value
// is in the array, and false if the value is not in the array.
// Finally, the static from method I have takes an iterable object,
// in this case a collection of values, and creates a group that contains
// the values obtained by iterating over it. 


class Group {
    constructor() {
        this.members = [];
    }
    // The constructor creates an empty array to store members in.
    add(val) {
        if (!this.has(val)) {
            this.members.push(val);
        }
    }
    // The add function here takes a value as an argument and goes through the array
    //to see if the value is in there. If it is not, then it gets pushed into the array.
    delete(val) {
        this.members = this.members.filter(x => x !== val);
    }
    // The delete function takes a value as an argument and filters the members array
    // so that the remaining values do not equal the value passed as an argument. If the
    // element returns true for not equaling the value, then the function keeps the
    // element for the array. If the element returns false upon evaluation, then the 
    // filter function does not include the element inside the array. 
    has(val) {
        return this.members.includes(val);
    }
    // The has function returns true if the value is in the array, and false if the
    // value is not in the array.
    static from(collection) {
        let group = new Group;
        for (let val of collection) {
            group.add(val);
        }
        return group;
    }
    // The static from function takes a collection, and iterates through the items in 
    // the collection, adding them to a new group created for the function. I had to
    // look in the book solutions for the syntax of this, I got the new group and the 
    // addition of the values, I just had trouble with what it meant by static from
    // function. Basically, static methods are called on the class itself, so by using
    // the Group.from function, it creates a new instance of the array using the constructor
    // function. It would need to be an iterable object, such as an array in this case.
    // The from method then would iterate through the collection and use the add method
    // to add the value at the current index of the collection if it is not currently in
    // the members of the new group instance.
}

// Here is the code to test the class, with a lot of text to explain and analyze:

console.log("Exercise 1: Groups Class\n");
console.log("This will be a nice, pretty test of my Group class method, with comments to allow for comprehension of what is going on.\n");
console.log("First, let's test the constructor method\n");
let csc324 = new Group;
console.log("Running code 'let csc324 = new Group;'...\n");
console.log(csc324);
console.log("As you can see, we have an empty array inside.\n");
console.log("Now, let's create a group array with actual values inside\n");
let group = Group.from([10, 20]);
console.log("Running code 'let group = Group.from[10, 20]);'...\n");
console.log(group.members + "\n");
console.log("Now, using my class' has method, I should get a return value of true\n");
console.log(group.has(10) + "\n");
console.log("Running code 'group.has(10)'...\n");
console.log("As you can see, it works as intended\n");
console.log("Now, let's test a value that isn't in the members array containing 10 and 20, such as 30\n");
console.log(group.has(30) + "\n");
console.log("Running code 'group.has(30)'...\n");
console.log("So the has method clearly works in this case\n");
console.log("Now, let's test the add method. I will use it to add a value of 10\n");
group.add(10);
console.log("Running code 'group.add(10)'...\n");
console.log("Let's see what the group looks like now, shall we?\n");
console.log(group.members + "\n");
console.log("Since 10 is already in the members array, it doesn't get added per the function definition\n");
console.log("Let's try adding in that 30 we were looking for earlier\n");
group.add(30);
console.log("Running code 'group.add(30)'...\n");
console.log("Okay, let's check and see what's in the group members now\n");
console.log(group.members + "\n");
console.log("Now, let's try out the delete method\n");
group.delete(10);
console.log("Running code 'group.delete(10)'...\n");
console.log("Let's check the array now to see if 10 is still there\n");
console.log(group.has(10) + "\n");
console.log("Running code 'group.has(10)'...\n");
console.log("As you can see, the has function returned false, meaning 10 is not a member of the array\n");
console.log("Just to double check, let's print out the members of the array to be certain\n");
console.log(group.members + "\n");
console.log("And as we expect, 10 is not printed because it is not in the array.");