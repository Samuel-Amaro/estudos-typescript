function mouthSize(animal) {
    if (animal.toLowerCase() === 'alligator')
        return 'small';
    return 'wide';
}
console.log(mouthSize('Alligator'));
console.log(mouthSize('ALLIGATOR'));
