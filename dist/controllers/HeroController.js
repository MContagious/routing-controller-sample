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
const routing_controllers_1 = require("routing-controllers");
const HeroesRepository_1 = require("../repositories/HeroesRepository");
let HeroController = class HeroController {
    constructor(heroesRepository) {
        this.heroesRepository = heroesRepository;
        this.heroesRepository = new HeroesRepository_1.HeroesRepository();
    }
    getHeroes() {
        return this.heroesRepository.findAll();
    }
};
__decorate([
    routing_controllers_1.Get("/"),
    routing_controllers_1.EmptyResultCode(404), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', Promise)
], HeroController.prototype, "getHeroes", null);
HeroController = __decorate([
    typedi_1.Service(),
    routing_controllers_1.JsonController("/v1/heroes"), 
    __metadata('design:paramtypes', [HeroesRepository_1.HeroesRepository])
], HeroController);
exports.HeroController = HeroController;
