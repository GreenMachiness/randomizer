function pickRandomHero(heroes) {
    const randomIndex = Math.floor(Math.random() * heroes.length);
    return heroes[randomIndex];
}

const heroesArray = ['Blade', 'Captain America', 'Captain Marvel', 'Deadpool', 'Doctor Strange', 'Ghost Rider', 'Hulk', 'Ironman', 'Magik', 'Morbius', 'Nico Minoru', 'Scarlet Witch', 'Spider-man', 'Storm', 'Venom', 'Wolverine'];

const randomHero = pickRandomHero(heroesArray);
console.log("Randomly picked hero:", randomHero);
