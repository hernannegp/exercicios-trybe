function verificaPalindrome (word){
    let contador = word.length;
    for (let i = 0; i < contador - i; i+=1){
    if (word[i] != word[contador - i -1]) {
        return false;
}
}
return true 
}
 console.log (verificaPalindrome('giovanni'))