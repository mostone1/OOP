// task 1

class circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    circleLenth() {
        return 2 * Math.PI * this.radius;
    }

    static circleLength(radius) {
        return 2 * radius * Math.PI;
      }

    newCircle() {
        let AnotherCircle = circle;
        return AnotherCircle;
    }

    static circleCreateParam(x, y, radius) {
        return new Circle(x, y, radius);
      }

    toString() {
        return `Circle with center in ${this.x}, ${this.y} and radius ${this.radius}`;
    }
}

task 2

function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}

//task 3

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname
    }

    showFullName() {
        console.log(this.name + "" + this.surname);
    }
} 

class Student {
    constructor(year) {
        this.year = year;
    }

    showFullName(middleName) {
        console.log(this.name + " " + this.middleName + " " + this.surname);
    }

    showCourse() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}

//task 4

class Marker {
    constructor(ink, inkLeft) {
        this.ink = ink;
        this.inkLeft = inkLeft;
    }

    printMetod(str) {
        if (this.inkLeft > 0) {
            console.log(`%cPrinting text: ${str}`, `color: ${this.colour}`);
            this.inkLeft -= 0.5 * (str.length - 1);
        } else {
            console.log("The marker is out of ink");
        }
    }
}

const firstMarker = new Marker("green", 100);
console.log(firstMarker.inkPercentage);
firstMarker.printMetod("Hello world!");
console.log(firstMarker.inkPercentage);

const secondMarker = new RefuelingMarker("red", 75);
console.log(secondMarker.inkPercentage);
secondMarker.refillInk("Hello world!");
console.log(secondMarker.inkPercentage);

//task 5

class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() {
        return this.dayRate * this.workingDays;
    }

    #experience()
    getExp() {
        return this.experience;
    }

    showSalaryWithExperience() {
        let salaryExp = this.dayRate * this.workingDays * this.#experience;
        console.log(`salary with experience: ${salaryExp}`);
    }

    getWorkerInfo() {
        const salaryExp = this.dayRate * this.workingDays * this.#experience;
        return {
          fullName: this.fullName,
          salaryWithExperience: salaryExp,
        };
      }

      static sortBySalary(workers) {
        return workers.sort((a, b) => {
          return a.salaryWithExperience - b.salaryWithExperience;
        });
      }
}


let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log(`New experience: ${worker1.getExp()}`);
worker1.showSalaryWithExperience();
worker1.setExp(1.5);
console.log(`New experience: ${worker1.getExp()}`);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Thomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log(`New experience: ${worker2.getExp()}`);
worker2.showSalaryWithExperience();
worker2.setExp(1.5);
console.log(`New experience: ${worker2.getExp()}`);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 35, 22);
console.log(worker3.fullName);
worker3.showSalary();
console.log(`New experience: ${worker3.getExp()}`);
worker3.showSalaryWithExperience();
worker3.setExp(1.5);
console.log(`New experience: ${worker3.getExp()}`);
worker3.showSalaryWithExperience();

const workers = [];
workers.push(worker1.getWorkerInfo());
workers.push(worker2.getWorkerInfo());
workers.push(worker3.getWorkerInfo());

console.log(workers);

for (let worker of workers) {
  const workerObj = new Worker(worker.fullName, 0, 0);
  workerObj.setExp(workerObj.getExp());
  workerObj.showSalaryWithExperience();
}

const sortedWorkers = Worker.sortBySalary(workers);
console.log(sortedWorkers);

