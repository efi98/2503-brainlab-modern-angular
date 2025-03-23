function Person() {
    this.name = 'John';
    this.age = 50;
    this.log = function() {
        console.log('I am a person');
        console.log('My name is ', this.name);
    };
    
}

var p = new Person();
p.log();

var l = p.log;
l();

