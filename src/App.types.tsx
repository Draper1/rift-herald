export interface AllGameDataResponse {
    activePlayer: ActivePlayer
    allPlayers: Array<AllPlayers>
    events: {
        Events: Array<GameEvent>
    }
    gameData: GameData;
}

export interface ActivePlayer {
    abilities: ActivePlayerAbilities;
    championStats: ChampionStats;
    currentGold: number;
    fullRunes: {
        generalRunes: Array<Rune>;
        keystone: Rune;
        primaryRuneTree: Rune;
        secondaryRuneTree: Rune;
        statRunes: Array<StatRune>
    }
    level: number;
    summonerName: string;
}

export interface AllPlayers {
    championName: string,
    isBot: boolean,
    isDead: boolean,
    items: Array<any>, // TODO
    level: number,
    position: string,
    rawChampionName: string,
    respawnTimer: number,
    runes: {
        keystone: Rune;
        primaryRuneTree: Rune;
        secondaryRuneTree: Rune;
    }
    scores: {
        assists: number,
        creepScore: number,
        deaths: number,
        kills: number,
        wardScore: number
      },
      skinID: number;
      summonerName: string;
      summonerSpells: {
        summonerSpellOne: SummonerSpell
        summonerSpellTwo: SummonerSpell
      }
      team: TEAM_TYPE
}

export interface ActivePlayerAbilities {
    w: ActivePlayerAbility
    e: ActivePlayerAbility
    q: ActivePlayerAbility
    r: ActivePlayerAbility
    passive: ActivePlayerAbility
}

export interface ActivePlayerAbility {
    displayName: string,
    id: string,
    rawDescription: string,
    rawDisplayName: string
    abilityLevel?: number,
}

export interface ChampionStats {
    abilityPower: number,
    armor: number,
    armorPenetrationFlat: number,
    armorPenetrationPercent: number,
    attackDamage: number,
    attackRange: number,
    attackSpeed: number,
    bonusArmorPenetrationPercent: number,
    bonusMagicPenetrationPercent: number,
    cooldownReduction: number,
    critChance: number,
    critDamage: number,
    currentHealth: number,
    healthRegenRate: number,
    lifeSteal: number,
    magicLethality: number,
    magicPenetrationFlat: number,
    magicPenetrationPercent: number,
    magicResist: number,
    maxHealth: number,
    moveSpeed: number,
    physicalLethality: number,
    resourceMax: number,
    resourceRegenRate: number,
    resourceType: RESOURCE_TYPE,
    resourceValue: number,
    spellVamp: number,
    tenacity: number
}

export enum RESOURCE_TYPE {
    MANA = "MANA",
}

export enum TEAM_TYPE {
    ORDER = "ORDER"
}

export interface Rune {
    displayName: string,
    id: number,
    rawDescription: string,
    rawDisplayName: string
}

export interface StatRune {
    id: number;
    rawDescription: string;
}

export interface SummonerSpell {
    displayName: string,
    rawDescription: string,
    rawDisplayName: string
}

export interface GameEvent {
    EventID: number,
    EventName: EVENT_GAME_NAMES,
    EventTime: number
}

export enum EVENT_GAME_NAMES {
    GAME_START = "GameStart"
}

export interface GameData {
    gameMode: GAME_MODES;
    gameTime: number;
    mapName: MAP_NAMES;
    mapNumber: number;
    mapTerrain: MAP_TERRAINS;
}

export enum GAME_MODES {
    CLASSIC = "CLASSIC"
}

export enum MAP_NAMES {
    MAP11 = "Map11"
}

export enum MAP_TERRAINS {
    DEFAULT = 'Default'
}