const request = document.getElementById("login-form");

// 로그인 버튼 클릭시 POST 방식으로 로그인 정보를 전달해줌
const signup_btn = document.getElementById("login");
signup_btn.addEventListener("click", () => {
  request.setAttribute("action", "/auth/login");
  request.setAttribute("method", "POST");
});

function openWindowPop(url, name) {
  var options =
    "top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no";
  window.open(url, name, options);
}
