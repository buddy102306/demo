const playerName = "Liora";
const playerClass = "Sorcerer";

const maxHealth = 110;
const maxStamina = 100;

const defaultGuild = "Mystic Order";
const criticalMultiplier = 1.6;

const inventoryItems = ["Wand", "Cloak", "Elixir", "Tome", "Amulet"];

const baseStats = {
    strength: 12,
    agility: 16,
    intelligence: 32
};

const enemiesList = ["Goblin", "Troll", "Shadow Wraith", "Slime"];

const startingBonuses = [6, 12, 18, 22];

let currentHealth = 92;
let currentGold = 145;
let currentLevel = 3;
let experiencePoints = 520;
let isAlive = true;
let activeQuest = "Explore the Forgotten Temple";
let potionCount = 5;
let weaponDurability = 91;
let stamina = 95;
let location = "Moonlit Forest";

// Array destructuring
const [primaryWeapon, secondaryItem, thirdItem] = inventoryItems;

const [firstEnemy, secondEnemy, ...restEnemies] = enemiesList;

const [bonusOne, bonusTwo] = startingBonuses;

// Object destructuring
const { strength, agility } = baseStats;

const { intelligence: heroIntelligence } = baseStats;

const { strength: baseStr, agility: baseAgi } = baseStats;

// Spread operator
const expandedInventory = [
    ...inventoryItems,
    "Spellbook",
    "Crystal"
];

const combinedBonuses = [
    ...startingBonuses,
    28,
    35
];

const enhancedStats = {
    ...baseStats,
    wisdom: 27,
    charisma: 20
};

const completeProfile = {
    name: playerName,
    class: playerClass,
    ...baseStats,
    status: "Active"
};

// Array methods
const upperCaseItems = inventoryItems.map(item => item.toUpperCase());

const doubledBonuses = startingBonuses.map(val => val * 2);

const longNamedEnemies = enemiesList.filter(enemy => enemy.length > 5);

const highBonuses = startingBonuses.filter(val => val > 10);

// Functions
const calculatePower = (base, multiplier) => base * multiplier;

const healPlayer = (amount) => {
    currentHealth = Math.min(maxHealth, currentHealth + amount);
    return currentHealth;
};

const formatLocation = (loc) => `Current region: ${loc}`;

const getXPStatus = (xp) => `XP: ${xp} / 1200`;

const evaluateSurvival = (hp) => hp > 0 ? "Alive" : "Defeated";

// Template literals
const log1 = `Player Name: ${playerName}`;
const log2 = `Class: ${playerClass}`;
const log3 = `Health: ${currentHealth} / ${maxHealth}`;
const log4 = `Gold: ${currentGold} coins`;
const log5 = `Level: ${currentLevel}`;
const log6 = `Active Quest: ${activeQuest}`;
const log7 = `Location: ${location}`;
const log8 = formatLocation(location);
const log9 = getXPStatus(experiencePoints);
const log10 = `Weapon Durability: ${weaponDurability}%`;

// Nested objects
const questData = {
    title: "Recover the Lost Crystal",
    rewards: {
        gold: 350,
        item: {
            name: "Mystic Wand",
            rarity: "Legendary"
        }
    }
};

// Optional chaining
const questRarity = questData?.rewards?.item?.rarity;

const questEnchantment = questData?.rewards?.enchantment?.type;

const guildInfo = {
    name: "Mystic Order",
    leader: {
        title: "Elder Sorcerer",
        details: {
            age: 165
        }
    }
};

const leaderAge = guildInfo?.leader?.details?.age;

const leaderSpecialty = guildInfo?.leader?.specialty?.element;

// Output
console.log(log1);
console.log(log2);
console.log(log3);
console.log(log4);
console.log(log5);
console.log(log6);
console.log(log7);
console.log(log8);
console.log(log9);
console.log(log10);

console.log(`Power Level: ${calculatePower(strength, criticalMultiplier)}`);

console.log(`Quest Item Rarity: ${questRarity}`);

console.log(`Leader Age: ${leaderAge}`);