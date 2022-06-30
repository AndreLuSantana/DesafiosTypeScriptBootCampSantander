//Criação de uma interface para tipar de forma estática os atributos dos objetos criandos apartir desta interace.
interface person{
    name: string,
    age: number,
    profession: enumProfession
}

//Criação de um ENUM para padronizar e disponibilizar opções para profissão. Apdronizando as entradas.
enum enumProfession{
    atriz,
    padeiro, 
    desenvolvedor,
    bancário,
    estudante
}

const person1 : person = {
    name: "Ana Luiza",
    age: 12,
    profession: enumProfession.estudante
}

const person2 = {} as person;
person2.name = "Marilda";
person2.age = 66;
person2.profession = enumProfession.atriz;