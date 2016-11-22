export type GenderType = "mlae" | 
                    "female"
                ;

export type HairType = "bald" | 
                    "brown" | 
                    "black" | 
                    "blonde"
                ;

export type EyesType = "blue" | 
                    "brown" | 
                    "black" | 
                    "hazel" | 
                    "green"
                ;

export type PowerType = "wall-crawling" |
                    "strength" |
                    "speed" |
                    "stamina" |
                    "durability" |
                    "agility" |
                    "healing" |
                    "reflexes" |
                    "Spider-Sense" |
                    "genius" |
                    "longevity" | 
                    "acute senses" |
                    "weather adaptation" |
                    "animal empaty" |
                    "bone claws"
                ;
export class Height {
    constructor(public ft:number, public inc:number) {
    }
}

export class Hero {
    
    id: number;
    name: string;
    aliases: Array<string>;
    occupation: string;
    gender: GenderType;
    height: Height;
    hair: HairType;
    eyes: EyesType;
    powers: Array<PowerType>;
    
    constructor (hero:any) {
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