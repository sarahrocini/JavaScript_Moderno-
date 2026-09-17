//9. Separando o primeiro elemento 𓆝 𓆟 𓆞 𓆝 𓆟𓆝

const tecnologias = ["JavaScript", "Java", "Python", "PHP"];
const [principal, ...outras] = tecnologias;

console.log(principal);
console.log(outras);