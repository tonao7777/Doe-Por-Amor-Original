const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["CliqueAqui", "Venha Doar", "Quero Ajudar", ""];
const palavrasDelay = 200;
const delaypalavra = 100;
const proximotxt = 3000; // delay para o proximo texto//
var textarray = 0;
var charIndex = 0;

function type() {
  if (charIndex < textArray[textarray].length) {
    if(!cursor.classList.contains("palavras")) cursor.classList.add("palavras");
    typedTextSpan.textContent += textArray[textarray].charAt(charIndex);
    charIndex++;
    setTimeout(type, palavrasDelay);
  } 
  else { 
    cursor.classList.remove("palavras");
    setTimeout(venha, proximotxt);
  }
}

function venha() {
  if (charIndex > 0) {
    if(!cursor.classList.contains("palavras")) cursor.classList.add("palavras"); //adicionar palavras
    typedTextSpan.textContent = textArray[textarray].substring(0, charIndex-1);
    charIndex--;
    setTimeout(venha, delaypalavra);
  } 
  else {
    cursor.classList.remove("palavras"); //remover palvras
    textarray++;
    if(textarray>=textArray.length) textarray=0;
    setTimeout(type, palavrasDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // inicio do efeito
  if(textArray.length) setTimeout(type, proximotxt + 250);
});