
let btn = document.getElementById('btn');
btn.addEventListener('click', ChangeBackground);
function ChangeBackground(){
   document.body.style.backgroundColor = '#'+ Math.random().toString(16).slice(2, 8);
}
// 16 in string(16) is meaning color type hexadcemal #13200 , and slice for should be choose 8 number 