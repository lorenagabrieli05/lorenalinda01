document.addEventListener('DOMContentLoaded', function(){
 let tamanhoAtualFonte= 1;
 const aumentaFonte= this.documentElement.getElementById('aumetar-fonte')

 aumentaFonteBotao.addEventListener(click',function(){
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize= '${tamanhoFonte}rem';
})
const diminuiFonte= document.getElementById('diminuir-fonte');
diminuirFonteBotao.addEventListener('click', function)(){
  tamanhoAtualFonte-=0.1;
  document.body.style.fonteSize= '$(tamanhoAtualFonte)rem';
})
})