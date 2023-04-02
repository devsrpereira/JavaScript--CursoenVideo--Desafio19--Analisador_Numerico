var vetor = []
var cont_php = 0

function add(){
   let numero = document.querySelector('input#itxnum')
   let area = document.querySelector('select#area')
   let resposta = document.querySelector('p.resposta')
        resposta.innerHTML = ``
   
   
   if (numero.value.length == 0){
    window.alert (`[ERROR] Campo "Número" está vazio`)
   } else{
        numero = (Number(numero.value))

        let validador =  vetor.indexOf(numero)

        if (validador != -1){
            window.alert(`[ERROR] O valor ${numero} já foi adicionado.`)
        } else {
            vetor.push(numero)
            let opt = document.createElement('option')
            opt.text = `Valor ${numero} adicionado.`
            opt.value = cont_php ++
            area.appendChild(opt)
        }
   } 
   document.querySelector('input#itxnum').value = ""
   document.querySelector('input#itxnum').focus()

     
}


function fin(){
    if (vetor.length == 0){
        window.alert (`[ERROR] Adicione algum valor para analisarmos`)
       } else{
        vetor.sort(function(a,b) {
        return a - b})

        let qtd_num = vetor.length
        let res_qtd_num = `Ao todo, temos ${qtd_num} números cadastrados.`

        let maior = vetor[qtd_num -1]

        let res_maior = `O maior valor informado foi ${maior}.`

        let menor = vetor[0]
        let res_menor = `O menor valor informado foi ${menor}.`

        let soma = 0
        for (let cont in vetor){
            soma += vetor[cont] 
        }
        let res_soma = `Somando todos os valores, temos ${soma}.`

        let media = soma / qtd_num
        let res_media = `A média dos valores adicionados é: ${media}.`

        resposta = document.querySelector('p.resposta')
        resposta.innerHTML = `${res_qtd_num}<br>${res_maior}<br>${res_menor}<br>${res_soma}<br>${res_media}`
        }
    
}



