   //   ESSA MINIATURA QUE PASSA SOZINHA ESTÁ DESATIVADA NO MOMENTO    //
   //se esperta na pasta "image" -imagens caso troque o nome a miniatura pode parar  de funcionar //

var time = 10000, //4 SEGUNDOS, // 
//dando valor ao slides = slds //
slds = 0,
images = document
            .querySelectorAll("#slides img")
max = images.length;

function passeimg() {

images[slds]
//remova a imagem//
    .classList.remove("imggeral")

slds++
//sem limite//
if(slds >= max)
    slds = 0

images[slds]
//adicione a imagem//
    .classList.add("imggeral")
}


//função começar//
//set interval qual o intervalo da imagem?//
function comece() {     
setInterval(() => {
    // troca de imagens//
    passeimg()
}, time)
}
//liste img em window//
window.addEventListener("load", comece)

 
