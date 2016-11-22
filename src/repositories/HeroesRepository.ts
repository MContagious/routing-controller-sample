import { Service } from "typedi";
import { Hero } from "../models/Hero";

@Service()
export class HeroesRepository {
    private heroes:Array<Hero> = [];
    constructor() {
        let heroes:any[] = require("./heroes").default;
        this.heroes = heroes.map(hero => new Hero(hero))
    }
    findAll() {
        console.log(this.heroes);
        return Promise.resolve(this.heroes);
    }
    findById(id: number) {
        return Promise.resolve(this.heroes.find(hero => hero.id === id));
    }
    create(hero:any) {
        this.heroes.push(new Hero(hero));
        hero.id = this.heroes.length;
        Promise.resolve(hero);
    }
    async remove(id:number) {
        const hero = await this.findById(id);
        if (hero) {
            this.heroes.splice(
                this.heroes.indexOf(hero),
                1
            );
        }
        return Promise.resolve(hero)
    }
}