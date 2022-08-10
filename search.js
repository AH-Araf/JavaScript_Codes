const lyrics = ' Tumi bondhu kala Pakhi ami jeno ki . bosonto kale tomai bolte pari ni '
const searchString = ' Pakhi ' ; 
// const doesExist = lyrics.includes ( ' pakhi ' ) ; 
// const doesExist = lyrics.includes ( ' Pakhi ' ) ; 
// const doesExist = lyrics.includes ( searchString ) ; 

const lyricsLowerCase = lyrics.toLowerCase() 
// const does Exist = lyrics LowerCase.includes ( searchString ) ;

const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log ( doesExist ) ;
console.log ( doesExistOneLine ) ;
