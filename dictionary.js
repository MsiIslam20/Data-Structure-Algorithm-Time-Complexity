// Dictionary And Hash Table

class Dictionary {
    constructor() {
        this.dictionary = {};
    }
    add(key , value){
        this.dictionary[key] = value;
    }
    get(key){
        return this.dictionary[key];
    }
}

const phoneBook = new Dictionary();
phoneBook.add("saidul", "01755555555")
phoneBook.add("Shakil", "01888888555")
phoneBook.add("Aminul", "01999999999")

// console.log(phoneBook.dictionary);

const aminul = phoneBook.get("Aminul");

// console.log(aminul);