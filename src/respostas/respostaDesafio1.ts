//Resposta 1 - Tipo inferido - 

let employee1 = {
    code: 10,
    name: 'André'
}

//Resposta 2 - Tipo declarado - 
let employee2 : (code: number, name: string) => {
    code: 11,
    name: 'Karleane'
}

//Resposta 3 e 4 - Criação de interface com os tipos declarados - 
interface employee {
    code: number,
    name: string
}

//Obedecendo o contrato da interface na criação do objeto - 
let employee3 : employee = {
    code: 12,
    name: "Bianca"
}

//Resposta 4 - Utilizando a Interface e criando o objeto com as propriedades da interface - (usando alias)

let employee4 = {} as employee;
employee4.code = 13;
employee4.name = "Agnes";

