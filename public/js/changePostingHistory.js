/* 
  카테고리를 동적 라우팅으로 만들었는데 페이징 시 '판매글'이 페이징 되는 현상이 발생했습니다
  이를 해결하기 위해 카테고리를 클릭하면 해당 카테고리의 id가 로컬스토리지에 저장되고,
  새로고침이 발생하면 로컬스토리지에 저장된 주소로 이동하도록 만들어 해결했습니다
*/
const salePosting = document.getElementById("salePosting");
const requestPosting = document.getElementById("requestPosting");
const donatePosting = document.getElementById("donatePosting");
const communityPosting = document.getElementById("communityPosting");

// 로컬스토리지 저장 변수
let loadPage;

// 페이징을 위한 변수, ?를 기준으로 나눴음
let nowList = document.location.href.split("?");

function showSale() {
  // 판매 목록을 제외한 게시물 숨김처리
  requestPosting.style.display =
    donatePosting.style.display =
    communityPosting.style.display =
      "none";
  // 판매중인 목록 표사
  salePosting.style.display = "block";

  loadPage = "salePosting"; // 로컬스토리지에 저장할 값
  // 로컬 스토리지에 page변수 저장
  localStorage.setItem("page", loadPage);

  location.replace(nowList[0] + "?pageSale=1"); // nowList에서 나눈 배열에서 ? 이후의 주소를 해당 주소로 변경
}

function showRequset() {
  salePosting.style.display =
    donatePosting.style.display =
    communityPosting.style.display =
      "none";
  requestPosting.style.display = "block";

  loadPage = "requestPosting";
  localStorage.setItem("page", loadPage);

  location.replace(nowList[0] + "?pageBuying=1");
}

function showDonate() {
  requestPosting.style.display =
    salePosting.style.display =
    communityPosting.style.display =
      "none";
  donatePosting.style.display = "block";

  loadPage = "donatePosting";
  localStorage.setItem("page", loadPage);

  location.replace(nowList[0] + "?pageFree=1");
}

function showCommunity() {
  requestPosting.style.display =
    donatePosting.style.display =
    salePosting.style.display =
      "none";
  communityPosting.style.display = "block";

  loadPage = "communityPosting";
  localStorage.setItem("page", loadPage);

  location.replace(nowList[0] + "?pageCommunity=1");
}

// 로컬스토리지
function reloadPage() {
  // 로컬스토리지에서 key가 page인 내용 가져옴
  const getPage = localStorage.getItem("page");
  // 로컬스토리지 내용을 html id로 변환
  const pageId = document.getElementById(getPage);
  // 받아온 값에 해당하는 카테고리를 black으로 표시
  pageId.style.display = "block";
}
reloadPage();
