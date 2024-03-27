let string="";
let operators=document.querySelectorAll('.operator');
Array.from(operators).forEach((operator)=>{
    operator.addEventListener('click',(e)=>{
if(e.target.innerHTML == '='){
    document.querySelector('input').value=string
   string=eval(string);
}
else if(e.target.innerHTML == 'Ac'){
    document.querySelector('input').value=string
   string="";
}
else{
console.log(e.target)
string=string+e.target.innerHTML;
document.querySelector('input').value=string
}

    })

})
