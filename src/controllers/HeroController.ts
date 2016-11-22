import { Service } from "typedi";
import { JsonController, Get, Post, Put, Delete, Body, Param, EmptyResultCode, NotFoundError } from "routing-controllers";
import { HeroesRepository } from "../repositories/HeroesRepository";
import { Hero } from "../models/Hero";

import * as debug from 'debug';

const mod = "MarketEve:HeroController";

@Service()
@JsonController("/v1/heroes")
export class HeroController {

    constructor(private heroesRepository:HeroesRepository) {
        this.heroesRepository = new HeroesRepository();
    }

    @Get("/")
    getHeroes():Promise<Hero[]> {
        return this.heroesRepository.findAll();
    }
    @Get("/:id")
    @EmptyResultCode(404)
    getHeroById(@Param("id") id:number):Promise<Hero> {
        return this.heroesRepository.findById(id).then((hero) => {
           return {hero};
        }).catch((err) => {
            debug(`ERROR:${module}:getHeroById`)(err);
            throw new NotFoundError(err.message);
        });
    }
}