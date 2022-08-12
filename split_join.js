const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki . bosonto kale tomai bolte pari ni. sada sada kala kala'
const parts = lyrics.split(' '); //split all words
const sentences = lyrics.split('.'); //split sentences
const chars = lyrics.split(''); //split all char
const partial = lyrics.slice(5, 8); //slice a string, start-5 end-7 (8-1)


 console.log(parts);
 console.log(sentences);
 console.log(chars);
 console.log(partial);

const lines = [
    'Md. Arafat Hossain Araf',
    'Aklima Akter',
    'ABM Mobarak Hossain',
];

const newSong = lines.join('. ')
console.log(newSong)