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
        return Promise.resolve(this.heroes);
    }
    findById(id: number): Promise<Hero> {
        return new Promise((resolve, reject) => {
            let hero = this.heroes.find(hero => hero.id === id);
            if (hero) {
                resolve(hero);
            } else {
                reject(new Error("No hero found with the given id."));
            }
        });
    }
    create(hero:any) {
        this.heroes.push(new Hero(hero));
        hero.id = this.heroes.length;
        Promise.resolve(hero);
    }
    async remove(id:number): Promise<Hero> {
        return await this.findById(id).then((hero) => {
            this.heroes.splice(this.heroes.indexOf(hero), 1);
            return hero;
        });
    }
}