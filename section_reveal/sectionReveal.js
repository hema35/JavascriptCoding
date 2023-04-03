
function show(){
  let sections = document.querySelectorAll('.reveal');

  for(let i=0; i< sections.length; i++){
    let winHeight = window.innerHeight;
    let top = sections[i].getBoundingClientRect().top;
    let visible = 150;

    if(top < winHeight - visible){
        sections[i].classList.add('active');
    }else{
        sections[i].classList.remove('active');
    }
  }
}
window.addEventListener('scroll', show);