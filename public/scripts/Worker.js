export const name = "square";

export default class Worker {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getName = () => {
        return this.name;
    }

    getSurname = () => {
        return this.surname;
    }
}