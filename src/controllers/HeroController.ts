import { Service } from "typedi";
import { JsonController, Get, Post, Put, Delete, Body, Param, EmptyResultCode } from "routing-controllers";
import { HeroesRepository } from "../repositories/HeroesRepository";
import { Hero } from "../models/Hero";

@Service()
@JsonController("/v1/heroes")
export class HeroController {

    constructor(private heroesRepository:HeroesRepository) {
        this.heroesRepository = new HeroesRepository();
    }

    @Get("/")
    @EmptyResultCode(404)
    getHeroes():Promise<Hero[]> {
        return this.heroesRepository.findAll();
    }
}