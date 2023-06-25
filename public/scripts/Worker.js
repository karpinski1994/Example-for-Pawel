export const name = "square";

export default class Worker {
    constructor()
    {
        this.name = "pablo";
        this.surname = "z pubelo";
    }

    getName = () => {
        return this.name;
    }

    getSurname = () => {
        return this.surname;
    }
}