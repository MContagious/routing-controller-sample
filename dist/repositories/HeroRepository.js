"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const typedi_1 = require("typedi");
const Hero_1 = require("../models/Hero");
let HeroesRepository = class HeroesRepository {
    constructor() {
        this.heroes = require("./heroes");
    }
    findAll() {
        return this.heroes;
    }
    findById(id) {
        return this.heroes.find(hero => hero.id === id);
    }
    create(hero) {
        this.heroes.push(new Hero_1.Hero(hero));
    }
    remove(id) {
        const hero = this.findById(id);
        if (hero) {
            this.heroes.splice(this.heroes.indexOf(hero), 1);
        }
        return hero;
    }
};
HeroesRepository = __decorate([
    typedi_1.Service(), 
    __metadata('design:paramtypes', [])
], HeroesRepository);
exports.HeroesRepository = HeroesRepository;
