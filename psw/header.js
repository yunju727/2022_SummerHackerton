var header = `
<ul class = "mainheader" id = "left">
    <li><button class = " menu" id="ham"><a href="#">&#9776;</a></button></li>
    <li><button class = "menu" ><a href="../index.html">Home</a></button></li>
    <li><button class = "menu del" ><a href="../psw/bug report.html">Bug report</a></button></li>
</ul>
<ul class = "mainheader" id = "right">
    <li><button class = "hvr-float-shadow menu del" ><a href="../sgh/write1.html"><i class="fa-regular fa-pen-to-square"></i></a></button></li>
    <li><button class = "hvr-float-shadow menu" ><a href="#"><i class="fa-regular fa-heart"></i></a></button></li>
    <li><button class = "hvr-float-shadow menu" id="us"><a href="#"><i class="fa-regular fa-user"></i></a></button></li>
</ul>
`;

document.write(header)

let user = document.querySelector("#us");
let ham = document.querySelector("#ham");

user.addEventListener('click', () => {
    const usermenu = document.querySelector('.usermenu');
    usermenu.classList.toggle('active')
})

ham.addEventListener('click', () => {
    document.getElementById('sidemenu').style.width='250px';
})
