export class ObjectInfo {
    #name;
    #type;
    #description;

    constructor (name, type, description = "None") {
        this.#name = name;
        this.#type = type;
        this.#description = description;
    }

    get name () {
        return this.#name;
    }

    get type () {
        return this.#type;
    }

    get description () {
        return this.#description;
    }

    set name (newName) {
        this.#name = newName;
    }

    set description (newDescription = "None") {
        this.#description = newDescription;
    }

}