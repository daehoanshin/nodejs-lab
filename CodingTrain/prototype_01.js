function Particle() {
    this.x = 100;
    this.y = 99;
    // this.show = function () {
    //     point(this.x, this.y);
    // }
}

Particle.prototype.show = function () {
    point(this.x, this.y);
}
var p;
p = new Particle()
console.dir(Particle);
var p5;
// p5.Vector.prototype.double = function () {
//     this.x *= 2;
//     this.y *= 2;
//     this.z *= 2;
//
// }

console.dir(p5);
function setup() {
    createCanvas(600, 300);
    p = new Particle();
}
