function RandomHero(heroes) {
    const random = Math.floor(Math.random() * heroes.length);
    return heroes[random];
}

const heroes = ['Blade', 'Captain America', 'Captain Marvel', 'Deadpool',
 'Doctor Strange', 'Ghost Rider', 'Hulk', 'Ironman', 'Magik', 'Morbius',
  'Nico Minoru', 'Scarlet Witch', 'Spider-man', 'Storm', 'Venom', 'Wolverine'];

const randomHero = RandomHero(heroes);
console.log("Randomly picked hero:", randomHero);
