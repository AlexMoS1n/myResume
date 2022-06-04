let ul=document.querySelector('nav ul');
//Анимация главного меню при высоких разрешениях экрана
let lis=ul.children;
for(let li of lis){
  li.addEventListener('click',function(){
    if(!this.classList.contains('active')){
      for(let elem of lis){
        if(elem.classList.contains('active')){
          elem.classList.remove('active')
        }
      }
      this.classList.add('active');
    }
  })
}
//Анимация главного меню при низких разрешениях экрана
let menu=document.querySelector('#menu');
menu.addEventListener('click',function(){
  if (!ul.classList.contains('showNavA')&& !ul.classList.contains('hideNavA')){
ul.classList.add('showNavA')}else if (ul.classList.contains('showNavA')) {
  ul.classList.remove('showNavA');
  ul.classList.add('hideNavA');
}else {
  ul.classList.remove('hideNavA');
  ul.classList.add('showNavA');
}
});
console.log('hello')
