function inverteString() {
            
    const stringOriginal = document.getElementById('str').value;
    
    let stringInvertida = '';

    for (let i = stringOriginal.length - 1; i >= 0; i--) {
        stringInvertida += stringOriginal[i];

}
    document.getElementById('result').innerText = stringInvertida;
}