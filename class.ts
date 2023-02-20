class Employee
{
    #id: number;

    name: string;

    address: string;

    constructor(id: number, name: string, address: string)
     {
        this.address = address;
        this.#id= id;
        this.name = name;
    }

    getNameWithAddress(): string {
        return `${this.name} stays at ${this.address}`;
    }
}


let john = new Employee(1, "John", "Highway 71");


class Manager extends Employee{

    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }

    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address}`;
    }

}

let address=john.getNameWithAddress();

//john.id = 1;
//john.name= "John";
//john.address= "Highway 71";


console.log(address);

let mike = new Employee(2, "Mike", "Cherise Drive");

console.log(mike.getNameWithAddress());

