let categoria
let produto
let congelados = []
let doces = []
let frutas = []
let laticinios = []
let elementosSeparadosPorVirgula

// Recebe dado do usuário se ele quer adicionar algo na lista
let item = prompt("Deseja adicionar um item na sua lista de compras? Responda sim ou não: ")

// Convertendo para mínusculo. Fazendo isso por questão de tratamento para as comparações
item = item.toLowerCase();

while(true)
{
    //Caso o usuário digitar um dado inválido cairá nessa condição que informara o erro e pedirá o dado novamente
    if(item != "sim" && item != "não" && item != "nao")
    {
        console.log("O dado digitado é inválido.")
        item = prompt("Deseja adicionar um item na sua lista de compras? Responda sim ou não: ")
        item = item.toLowerCase();
    }
    else
    {
        //Se usuário não quiser digitar mais item sai do loop
        if(item == "não" || item == "nao")
        {
            break
        }
        else
        {
            console.log("Segue a lista de cateogria disponíveis: ")
            console.log("1 - Congelados")
            console.log("2 - Doces")
            console.log("3 - Frutas")
            console.log("4 - laticínios")
            categoria = prompt("Qual a categoria desse produto? ")
            
            //caso o usuário digitar uma opção inválida esse while irá tratar o caso. Pedindo nova opção
            while(categoria != 1 && categoria != 2 && categoria != 3 && categoria != 4)
            {
                console.log("Você digitou uma opção inválida.")
                categoria = prompt("Qual a categoria desse produto? ")
            }
            
            if(categoria == 1)
            {
                produto = prompt("Qual produto você deseja adicionar na lista? ")
                congelados.push(produto)
            }
            else if(categoria == 2)
            {
                produto = prompt("Qual produto você deseja adicionar na lista? ")
                doces.push(produto)
            }
            else if(categoria == 3)
            {
                produto = prompt("Qual produto você deseja adicionar na lista? ")
                frutas.push(produto)
            }
            else if(categoria == 4)
            {
                produto = prompt("Qual produto você deseja adicionar na lista? ")
                laticinios.push(produto)
            }
            item = prompt("Deseja adicionar um item na sua lista de compras? Responda sim ou não: ")
            item = item.toLowerCase();
        }
    }
}

//Aqui iremos tratar e imprimir a lista de compras. Neste caso (if) ele verifica se a listas estão fazias. Se estiverem quer dizer que não tem nenhum produto na lista e o sistema informará ao usuário
if(congelados.length === 0 && doces.length === 0 && frutas.length === 0 && laticinios.length === 0)
{
    console.log("Voçê não quis adicionar nenhum produto na lista. Porntato a lista está fazia.")
}
else
{
    //Aqui imprimi a lista de compras separadas por categoria
    console.log("Lista de compras: ")
    elementosSeparadosPorVirgula = congelados.join(', ')
    console.log(`Congelados: ${elementosSeparadosPorVirgula}`)
    elementosSeparadosPorVirgula = doces.join(' ,')
    console.log(`Doces: ${elementosSeparadosPorVirgula}`)
    elementosSeparadosPorVirgula = frutas.join(', ')
    console.log(`Frutas: ${elementosSeparadosPorVirgula}`)
    elementosSeparadosPorVirgula = laticinios.join(', ')
    console.log(`laticínios: ${elementosSeparadosPorVirgula}`)
}