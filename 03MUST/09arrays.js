const dogs = [
	{
		id: 'dog-1',
		name: 'Poodle',
		temperament: ['Intelligent', 'Active', 'Alert', 'Faithful', 'Trainable', 'Instinctual'],
	},
	{
		id: 'dog-2',
		name: 'Bernese Mountain Dog',
		temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful'],
	},
	{
		id: 'dog-3',
		name: 'Shetland Sheepdog',
		temperament: ['Intelligent', 'Calm', 'Kid-friendly', 'Active', 'Alert'],
	},
	{
		id: 'dog-4',
		name: 'Shiba Inu',
		temperament: ['Intelligent', 'Calm', 'Lazy', 'Kid-friendly', 'Trusting'],
	},
];

console.log(dogs.find((dog) => dog.name === 'Shetland Sheepdog'));
console.log(dogs.some((dog) => dog.temperament.includes('Aggressive')));
console.log(dogs.some((dog) => dog.temperament.includes('Trusting')));
console.log(dogs.every((dog) => dog.temperament.includes('Trusting')));
console.log(dogs.every((dog) => dog.temperament.includes('Intelligent')));
console.log(dogs.map((dog) => dog.name));
console.log(dogs.filter((dog) => dog.temperament.includes('Faithful')));
console.log(
	dogs.reduce((allTemperaments, dog) => {
		return [...allTemperaments, ...dog.temperament];
	}, [])
);
console.log(dogs.filter((dog) => dog.temperament.includes('Kid-friendly')));
console.log(dogs.filter((dog) => dog.temperament.includes('Lazy')));
console.log(dogs.some((dog) => dog.temperament.includes('Lazy')));
