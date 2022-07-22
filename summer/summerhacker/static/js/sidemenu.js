var sidemenu = `    <div id = "sidemenu" class="sidenav">
<li><a href="#" class="close" onclick="closesidemenu()">&times;</a></li>

<ul class="cur">
  <li>
    <input type="checkbox" id = "answer01">
    <label for="answer01">Region<em></em></label>
        <ul id="ko">
            <li><a href="#">서울</a></li>
            <li><a href="#">경기</a></li>
            <li><a href="#">인천</a></li>
            <li><a href="#">부산</a></li>
            <li><a href="#">제주</a></li>
            <li><a href="#">강원</a></li>
            <li><a href="#">경상</a></li>
            <li><a href="#">전라</a></li>
            <li><a href="#">충청</a></li>
        </ul>
    </li>
    <li>
        <input type="checkbox" id = "answer02">
        <label for="answer02"><a href="write1.html">Share Plan</a><em></em></label>
    </li>
    <li>
    <input type="checkbox" id = "answer03">
    <label for="answer03">Bug report<em></em></label>
        <ul>
            <li><a href="#" id = "first">kakaotalk</a></li>
            <li><a href="#">instagram</a></li>
            <li><a href="#">mail</a></li>
            <li><a href="bug report.html" id = "last">report page</a></li>

        </ul>
    </li>
</ul>
</div>`;

document.write(sidemenu);

function opensidemenu(){
    document.getElementById('sidemenu').style.width='250px';
}
function closesidemenu(){
    document.getElementById('sidemenu').style.width='0';
}