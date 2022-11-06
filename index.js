class Circle {
    //#radius
    // #diameter
    // #circumference
    // #area

    constructor(radius) {
        this.radius = radius //* Math.PI;
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return (this.radius * 2) * Math.PI;
    }

    get area() {
        return this.radius**2 * Math.PI; 
    }

    set diameter(diameter) {
        return this.radius = diameter
    }

    // set circumference(circumference) {
    //     this.#circumference = circumference
    // }
    
    // set area(area) {
    //     this.#area = area
    // }
}

const circle = new Circle(6)
console.log(circle)
console.log(circle.diameter)
console.log(circle.circumference)
console.log(circle.area)
console.log("-----------------------------------------")
console.log(circle.radius)
// console.log(circle.diameter)
// console.log(circle.circumference)
// console.log(circle.area)












// class Circle {
//     //#radius
//     // #diameter
//     // #circumference
//     // #area

//     constructor(radius) {
//         this.#radius = radius //* Math.PI;
//     }

//     get diameter() {
//         return this.#radius * 2;
//     }

//     get circumference() {
//         return this.#radius**2 * Math.PI;
//     }

//     get area() {
//         return this.#radius**2 //* Math.PI; 
//     }

//     set diameter(diameter) {
//         this.#diameter = diameter
//     }

//     set circumference(circumference) {
//         this.#circumference = circumference
//     }
    
//     set area(area) {
//         this.#area = area
//     }
//}
