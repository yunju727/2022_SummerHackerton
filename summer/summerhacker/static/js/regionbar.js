var regionbar = `
<div id = "ko" class="nav_r">
<ul class="cur">
  <li>
    <input type="checkbox" id = "reg01">
    <label for="reg01">서울<em></em></label>
        <ul id="ko">
            <li><a href="#">서울 전체</a></li>
            <li><a href="#">강남/역삼/삼성</a></li>
            <li><a href="#">서초/교대/사당</a></li>
            <li><a href="#">을지로/명동/중구</a></li>
            <li><a href="#">종로/인사동</a></li>
            <li><a href="#">홍대/힙정/마포/서대문</a></li>
            <li><a href="#">영등포역</a></li>
            <li><a href="#">김포공항/염창/강서</a></li>
            <li><a href="#">성북/강북/노원/도봉</a></li>
            <li><a href="#">신사/청담/압구정</a></li>
            <li><a href="#">잠실/송파/강동</a></li>
            <li><a href="#">서울역/이태원/용산</a></li>
            <li><a href="#">동대문구</a></li>
            <li><a href="#">여의도</a></li>
            <li><a href="#">구로/신도림/금천</a></li>
            <li><a href="#">건대입구/성수/왕십리</a></li>
        </ul>
    </li>
    <li>
        <input type="checkbox" id = "reg02">
        <label for="reg02">경기<em></em></label>
        <ul id="ko">
            <li><a href="#">경기 전체</a></li>
            <li><a href="#">가평/청평/양평</a></li>
            <li><a href="#">고양/파주/김포</a></li>
            <li><a href="#">용인/동탄</a></li>
            <li><a href="#">남양주/구리/성남/분당</a></li>
            <li><a href="#">부천/광명/시흥/안산</a></li>
            <li><a href="#">수원/화성</a></li>
            <li><a href="#">의정부/포천/동두천</a></li>
            <li><a href="#">오산/평택</a></li>
            <li><a href="#">이천/광주/여주/하남</a></li>
            <li><a href="#">안양/의왕/군포</a></li>
        </ul>
    </li>
    <li>
        <input type="checkbox" id = "reg03">
        <label for="reg03">인천<em></em></label>
        <ul id="ko">
            <li><a href="#">인천 전체</a></li>
            <li><a href="#">인천국제공항/강화/을왕리/영종</a></li>
            <li><a href="#">주안/간석/인천시청</a></li>
            <li><a href="#">송도/소래포구</a></li>
            <li><a href="#">구읍뱃터/월미도</a></li>
            <li><a href="#">청라/계양/부평</a></li>
        </ul>
    </li>
    <li>
        <input type="checkbox" id = "reg04">
        <label for="reg04">부산<em></em></label>
        <ul id="ko">
            <li><a href="#">부산 전체</a></li>
            <li><a href="#">벡스코/센텀시티</a></li>
            <li><a href="#">광안리/경성대</a></li>
            <li><a href="#">자갈치/남포동/영도</a></li>
            <li><a href="#">서면/연산/범일</a></li>
            <li><a href="#">사상/강서/김해공항</a></li>
            <li><a href="#">해운대/마린시티</a></li>
            <li><a href="#">송정/기장</a></li>
            <li><a href="#">부산역</a></li>
            <li><a href="#">송도/다대포</a></li>
            <li><a href="#">동래/온천/금정구</a></li>
        </ul>
    </li>
    <li>
        <input type="checkbox" id = "reg05">
        <label for="reg05">제주<em></em></label>
        <ul id="ko">
            <li><a href="#">제주 전체</a></li>
            <li><a href="#">제주시/제주국제공항</a></li>
            <li><a href="#">서귀포시</a></li>
            <li><a href="#">애월/한림/협재</a></li>
            <li><a href="#">중문</a></li>
            <li><a href="#">표선/성산</a></li>
            <li><a href="#">함덕/김녕/세화</a></li>
        </ul>
    </li>
    <li>
        <input type="checkbox" id = "reg06">
        <label for="reg06">강원<em></em></label>
        <ul id="ko">
            <li><a href="#">강원 전체</a></li>
            <li><a href="#">속초/양양/고성</a></li>
            <li><a href="#">춘천/인제/철원</a></li>
            <li><a href="#">평창/정선/영월</a></li>
            <li><a href="#">강릉</a></li>
            <li><a href="#">동해/삼척/태백</a></li>
            <li><a href="#">홍천/횡성/원주</a></li>
        </ul>
    </li>
    <li>
        <input type="checkbox" id = "reg07">
        <label for="reg07">경상<em></em></label>
        <ul id="ko">
            <li><a href="#">경상 전체</a></li>
            <li><a href="#">경주</a></li>
            <li><a href="#">거제/통영</a></li>
            <li><a href="#">울산/양산</a></li>
            <li><a href="#">창원/마산/진해/김해</a></li>
            <li><a href="#">대구/구미/안동/문경</a></li>
            <li><a href="#">포항/영덕/울진/청송</a></li>
            <li><a href="#">남해/사천/하동/진주</a></li>
        </ul>
    </li>
    <li>
    <input type="checkbox" id = "reg08">
    <label for="reg08">전라<em></em></label>
    <ul id="ko">
        <li><a href="#">전라 전체</a></li>
        <li><a href="#">전주</a></li>
        <li><a href="#">광주/나주</a></li>
        <li><a href="#">여수</a></li>
        <li><a href="#">순천/광양/구례/목포/보성</a></li>
        <li><a href="#">남원/무주/완주/익산</a></li>
        <li><a href="#">군산/부안/고창</a></li>
    </ul>
    </li>
    <li>
        <input type="checkbox" id = "reg09">
        <label for="reg09">충청<em></em></label>
        <ul id="ko">
            <li><a href="#">충청 전체</a></li>
            <li><a href="#">대전/세종</a></li>
            <li><a href="#">천안/아산/도고</a></li>
            <li><a href="#">안면도/태안/서산/덕산</a></li>
            <li><a href="#">보령/대천/부여/공주/금산</a></li>
            <li><a href="#">청주/음성/진천</a></li>
            <li><a href="#">충주/제천/단양</a></li>
        </ul>
    </li>
</ul>
</div>`;

document.write(regionbar)