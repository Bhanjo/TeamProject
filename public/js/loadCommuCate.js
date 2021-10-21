function loadCate() {
  // 카테고리 값을 받는다
  const nowCate = document.getElementById("commuCate").value;
  const commuArr = []; // 카테고리의 id
  const commuVal = []; // 카테고리의 text

  for (let i = 1; i <= 4; i++) {
    commuArr[i] = document.getElementById("commuCategory" + i);
    commuVal[i] = document.getElementById("commuCategory" + i).value;
    // 받아온 카테고리 이름이 카테고리의 text와 일치시 해당 박스를 선택한다
    if (nowCate == commuVal[i]) commuArr[i].selected = true;
  }
}
loadCate();
