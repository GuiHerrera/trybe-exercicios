// Após ter conhecido diferentes maneiras de associar chaves e valores a um objeto, que tal praticar? Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.

let student = {};

function addProperty(object, key, value) {
  object[key] = value;
}

addProperty(student, "nome", "Guilherme Herrera");
addProperty(student, "email", "gui-herrera@hotmail.com");
addProperty(student, "telefone", "(12)99756-4622");
addProperty(student, "github", "github.com/GuiHerrera");
addProperty(student, "linkedIn", "linkedin.com/in/guilherme-aires-herrera/");

console.log(student);

console.log(Object.values(student));
