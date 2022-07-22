var header = `
<ul class = "mainheader" id = "left">
    <li><button class = " menu" ><a href="#" onclick="openusermenu()">&#9776;</a></button></li>
    <li><button class = "menu" ><a href="../index.html">Home</a></button></li>
    <li><button class = "menu del" ><a href="../psw/bug report.html">Bug report</a></button></li>
</ul>
<ul class = "mainheader" id = "right">
    <li><button class = "hvr-float-shadow menu del" ><a href="../sgh/write1.html"><i class="fa-regular fa-pen-to-square"></i></a></button></li>
    <li><button class = "hvr-float-shadow menu" ><a href="#"><i class="fa-regular fa-heart"></i></a></button></li>
    <li><button class = "hvr-float-shadow menu" ><a href="#" onclick="openusermenu()"><i class="fa-regular fa-user"></i></a></button></li>
</ul>
`;

document.write(header)

function openusermenu(){
    document.getElementById('usermenu').style.height='3rem';
}
function closeusermenu(){
    document.getElementById('usermenu').style.height='0';
}