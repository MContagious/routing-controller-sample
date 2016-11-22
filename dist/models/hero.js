"use strict";
class Height {
    constructor(ft, inc) {
        this.ft = ft;
        this.inc = inc;
    }
}
exports.Height = Height;
class Hero {
    constructor(hero) {
        this.id = hero.id;
        this.name = hero.name;
        this.aliases = hero.aliases;
        this.occupation = hero.occupation;
        this.gender = hero.gender;
        this.height = new Height(hero.height.ft, hero.height.in);
        this.hair = hero.hair;
        this.eyes = hero.eyes;
        this.powers = hero.powers;
    }
}
exports.Hero = Hero;
