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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const typedi_1 = require("typedi");
const Hero_1 = require("../models/Hero");
let HeroesRepository = class HeroesRepository {
    constructor() {
        this.heroes = [];
        let heroes = require("./heroes").default;
        this.heroes = heroes.map(hero => new Hero_1.Hero(hero));
    }
    findAll() {
        console.log(this.heroes);
        return Promise.resolve(this.heroes);
    }
    findById(id) {
        return Promise.resolve(this.heroes.find(hero => hero.id === id));
    }
    create(hero) {
        this.heroes.push(new Hero_1.Hero(hero));
        hero.id = this.heroes.length;
        Promise.resolve(hero);
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const hero = yield this.findById(id);
            if (hero) {
                this.heroes.splice(this.heroes.indexOf(hero), 1);
            }
            return Promise.resolve(hero);
        });
    }
};
HeroesRepository = __decorate([
    typedi_1.Service(), 
    __metadata('design:paramtypes', [])
], HeroesRepository);
exports.HeroesRepository = HeroesRepository;
