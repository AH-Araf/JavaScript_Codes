const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki . bosonto kale tomai bolte pari ni. sada sada kala kala'
console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('Tumi'));

if(lyrics.indexOf('sada') !== -1){
    console.log('Exist')
}
else{
    console.log('Not exist')
}

console.log(lyrics.startsWith('Tumi'));
console.log(lyrics.endsWith('kala'));