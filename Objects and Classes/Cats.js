function cats(arr){
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            //return (`${this.name}, age ${this.age} says Meow`);
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for(let cat of arr) {
        let [name, age] = cat.split(' ');

        let cats = new Cat(name, age);

        //console.log(cats.meow());

        cats.meow();
        
    }

}
cats(['Mellow 2', 'Tom 5'])