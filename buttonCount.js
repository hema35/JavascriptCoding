//Call back function with closure
function attachEventListener(){
 let count = 0;
 document.getElementById('clickMe').addEventListener('click',function click(){
    console.log('Button clicked', ++count);
 });
}
attachEventListener();