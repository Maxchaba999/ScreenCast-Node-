var util = require('util');



// util.inspect

var obj = {
    a: 5,
    b: 6,
    inspect: function() {
        return 123;
    }
};
obj.self = obj;

console.log(util.inspect(obj));


//util.format

var str = util.format("My %s %i %j", "string", 123, { test: "obj" });

console.log(str);


function Animal(name) {
    this.name = name;
}
//parent
Animal.prototype.walk = function() {
    console.log("Ходит " + this.name);
};
//child
function Rabbit(name) {
    this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function() {
    console.log("Прыгает " + this.name);

};

//using

var rabbit = new Rabbit("ourRabbit");
rabbit.walk();
rabbit.jump();