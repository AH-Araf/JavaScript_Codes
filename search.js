const lyrics = ' Tumi bondhu kala Pakhi ami jeno ki . bosonto kale tomai bolte pari ni '
const searchString = ' Pakhi ' ; 


const lyricsLowerCase = lyrics.toLowerCase() 


const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log ( doesExist ) ;
console.log ( doesExistOneLine ) ;
