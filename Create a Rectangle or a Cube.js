var rect = class {
    constructor(l, w) {
        this.length = l;
        this.width = w;
        this.area = l * w;
    }
};
var cube = class {
    constructor(l, w, h) {
        this.length = l;
        this.width = w;
        this.height = h;
        this.area = l * w;
        this.volume = (l * w) * h;
    }
};
// var [variable] = new [rect/cube]([length], [width[, height]])
