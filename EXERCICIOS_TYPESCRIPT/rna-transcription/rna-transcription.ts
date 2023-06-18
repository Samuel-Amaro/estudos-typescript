function toRna(dna: string): string{
    let transcription = '';
    for(let i = 0; i < dna.length; i++) {
      switch(dna[i]) {
        case 'G':
            transcription += 'C';
            break;
        case 'C':
            transcription += 'G';
            break;
        case 'T':
            transcription += 'A';
            break;
        case 'A':
            transcription += 'U';
            break;
        default: 
            transcription = 'Invalid input DNA';
            throw "Invalid input DNA.";
          break;
      }   
    }
    return transcription;
}

console.log(toRna('C'));//G
console.log(toRna('G'));//C
console.log(toRna('A'));//U
console.log(toRna('T'));//A
console.log(toRna('ACGTGGTCTTAA'));//UGCACCAGAAUU
console.log(toRna('U'));//Invalid input DNA.
console.log(toRna('XXX'));//Invalid input DNA.
console.log(toRna('ACGTXXXCTTAA'));//Invalid input DNA.