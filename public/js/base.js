let nome = "teste";
let pessoa1 = {
    nome: "Marvin",
    idade: "31",
    trabalho: "Programador"
}

let pessoas = [
    {nome: "Marvin",
    idade: "31",
    trabalho: "Programador"
    },
    {nome: "Mary",
    idade: "24",
    trabalho: "Designer"
    }
]


function addpessoa (pessoa){
    pessoas.push(pessoa)

}


function imprimirpessoas (){
    pessoas.forEach(item => {
        console.log("nome:");
        console.log(item.nome);

        console.log("idade:");
        console.log(item.idade);

        console.log("trabalho:");
        console.log(item.trabalho);
        
    })   }


addpessoa({
    nome: "Mauro",
    idade: "25",
    trabalho: "copywriter"
})


imprimirpessoas();