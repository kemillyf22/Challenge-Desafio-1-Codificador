const criptograph = document.querySelector('#criptograph')
const descriptograph = document.querySelector('#descriptograph')
const copy = document.querySelector('#copy')
const response = document.querySelector('#response');


const tradutor = (regex, obj) => {
    let text = document.querySelector('#message')
    if(!/^[a-z0-9 ]*$/.test(text.value)) {
        alert('Informe um texto sem acentuação, caracteres especiais ou letras maiúsculas!')
        return 
    }
    document.querySelector('#type').innerHTML = obj.a ? 'criptografada:' : 'descriptografada:'
    
    response.value = text.value.replace(regex, key => obj[key])
    text.value = ''
}


criptograph.addEventListener('click', () => {
    tradutor(/[aeiou]/g, 
        {'a':'ai','e':'enter','i':'imes','o':'ober','u':'ufat'})
})


descriptograph.addEventListener('click', () => {
    tradutor(/ai|enter|imes|ober|ufat/g, 
        {'ai':'a','enter':'e','imes':'i','ober':'o','ufat':'u'})
})


copy.addEventListener('click', () => {
    response.select();
    response.setSelectionRange(0, 99999); /* mobile */
    navigator.clipboard.writeText(response.value);
})