// Desenvolva cada exercício a seguir com o uso de funções.

// Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.

let clientesTrybeBank = ["Ada", "John", "Gus"];

function adicionarCliente(nome) {
    if (typeof nome !== 'string') {
        return "Erro o nome do cliente deve ser uma string!"
    } else {
        clientesTrybeBank.push(nome;
            return "Cliente " + nome " adicionado com sucesso!")
    }
}

// escreva aqui sua função
