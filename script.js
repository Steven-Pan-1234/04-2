SB=0
LB=0
H=0
A=0
document.getElementById('button').addEventListener('click', calculate)
function calculate () {
  SB=document.getElementById('SB').value
  SB=parseInt(SB)
  LB=document.getElementById('LB').value
  LB=parseInt(LB)
  H=document.getElementById('H').value
  H=parseInt(H)
  A=(SB+LB)*H/2
  document.getElementById('answer').innerHTML=(A)} 
