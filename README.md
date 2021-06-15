# 도서판매 웹사이트
### 명지대학교 팀프로젝트2
* 배포 도메인: https://doseoro.taewoongjung.xyz/


## < 실행 방법 >
  1. .env가 필요하므로 파일은 저한테 요청해주세요.
  2. 1번을 따라 .env 파일을 받으시면 터미널에 "npm i" 치고 엔터 후 "npx sequelize db:create"를 치고 엔터를 눌러주세요.
  3. 그 다음으로 " localhost:1000 "로 들어가시면 됩니다. 

## < 개요 >
 ### 프로젝트의 목적
 이 프로젝트의 목적은 책을 전문으로 다루는 중고거래 website제작이다. 이용자 본인이 있는 위치를 기반으로 한 직거래와 택배를 이용한 거래의 두 가지 방식을 다 채택한다. 단순한 판매, 구매 뿐만이 아니라 무료 나눔, 커뮤니티 등의 기능을 추가하고, 기존 사이트에 없던 구매의사를 표현할 수 있는 기능도 추가하였다. 다양한 형태의 거래를 시행하고 커뮤니티를 통한 사용자들읠 정보 공유와 고객 문의를 이용한 웹사이트의 수정, 보완을 할 수 있다. 본 프로젝트는 이처럼 다양한 형태의 중고거래 구현을 목표로 한다.
 
 ### 프로젝트의 기대효과
 이용자는 도서명, 저자, 출판사를 중심으로 다양한 형태의 중고거래를 검색할 수 있으며, 카테고리 별로도 거래 현황을 볼 수 있다. 판매 외에도 구매자가 원하는 도서를 게시판에 올려 구매자 위주로의 거래가 활발하게 이루어질 수 있다. 또한 커뮤니티 게시글을 통한 도서의 정보를 다양하게 공유할 수 있으며, 이동경로에 따라 다양한 위치에서의 거래가 가능해 폭넓은 양의 직거래가 가능하다는점을 기대한다. 궁극적으로는 COVID-19 이후로 높아진 수요의 중고거래와 도서를 이용하여 또 다른 경제유통의 장을 열 수 있는 효과가 있다.

## < 프로젝트 제안 내용 >
 ### 주요기능
번호|기능명|설명 
---|---|---|
1|팝니다| 중고 도서를 판매할 수 있다.
2|삽니다| 도서 판매 요청 글을 남겨 판매자를 구할 수 있다.
3|무료 나눔| 책을 무료로 나눌 수 있다.
4| 커뮤니티| 도서 후기, 궁금증 등을 글로 남겨 사용자 간의 소통이 가능하다.
5| 검색 옵션| 도서명, 저자, 출판사 설정을 통해 원하는 도서를 검색할 수 있다.
6| 메인 베너| 페이지 사용법, 추천도서를 확인할 수 있다.
7| 로그인| 카카오, 구글 연동 로그인, 회원가입, ID 찾기, PW 찾기가 가능하다.
8| ID 찾기| 가입 시 기입한 전화번호를 입력하면 아이디를 알려준다.
9| PW 찾기| 닉네임과 보안 질문에 올바른 답을 입력하면 비밀번호 변경 페이지로 넘어간다.
10| 도서 목록| 도서 사진, 도서 제목, 가격, 거래 지역이 노출되고 사진을 클릭하면 자세한 내용을 확인 할 수 있다.
11| 정렬 필터| 내 위치를 기준으로 지역 범위를 설정하여 글을 검색할 수 있다.
12| 관심 상품| 관심 상품으로 등록해 마이페이지에서 한 번에 조회할 수 있다.
13| 거래 문의| 판매글 하단의 댓글을 통해 거래 문의가 가능하다.
14| 거래 현황| 모든 거래 게시글에 대해 거래 완료 설정을 할 수 있고 거래 완료로 변경 시 댓글 작성자 중에 거래자를 선택하도록 한다.
15| 도서 등록| 도서 사진, 제목, 저자, 출판사, 가격, 카테고리, 손상도, 흔적, 추가 정보, 거래방법을 입력해 판매 혹은 나눔 글을 등록할 수 있다.
16| 고객 문의| 홈페이지 오류, 불편사항 등을 접수할 수 있다.
17| 마이페이지| 판매내역, 구매내역, 관심 상품, 프로필 확인과 지역 설정, 고객 문의가 가능하다.
18| 판매내역| 판매 현황(판매중 / 예약중 / 판매완료)에 따른 판매 도서를 확인할 수 있다.
19| 구매내역| 거래한 도서를 확인할 수 있고 거래후기 작성이 가능하다.
20| 프로필| 닉네임, 아이디, 비밀번호, 지역, 거래 후기 내용을 확인할 수 있다.
21| 지역 설정| gps를 이용하여 거래 지역을 설정할 수 있다.

 ### 구현중 변경 내용
번호|기능명|제안내용|변경사항
---|---|---|---|
1| 분야별 게시판| 카테고리를 기준으로 도서를 조회할 수 있는 메뉴|불필요한 기능으로 판단하여 삭제
2| 게시판 정렬 필터| 내지역/ 모든 지역/ 가격 순/ 최신 순 필터를 설정해 게시글 정렬| 게시판이 아닌 도서 검색에서 지역 범위를 선택할 수 있도록 변경
3| 판매내역, 구매내역 메뉴| 작성한 글과 거래 목록을 확인할 수 있는 메뉴| 작성한 글은 '내가 쓴 글' 메뉴, 거래 목록은 '거래 내역' 메뉴로 변경
4| 조회수| 제안 내용 없음| 각 게시글에 조회 수 측정 기능 추가
5| 댓글| 댓글을 통해 거래함| 더 원활한 소통을 위해 댓글에 추가 댓글을 작성할 수 있는 대댓글 기능 추가
6| 프로필 메뉴| 마이페이지 > 프로필에서 닉네임, 아이디, 지역, 거래 후기 확인 가능| 마이페이지에서 거래 지역 설정 가능, 프로필 메뉴 삭제
7| 거래 후기| 거래 완료 시 거래 후기 작성 가능| 개발 시간 부족으로 제외
8| 커뮤니티 게시판 세부 카테고리| 유저들이 도서를 서로 추천해주고 생각을 공유하는 장을 제공| 자유/ 서평/ 추천/ 질문 4가지의 세부 카테고리 추가
9| 알림| 좋아요, 댓글, 대댓글이 자신의 게시물에 적용되면 자신에게 알림이 오는 기능| 내 게시글에 댓글이 달리거나 관심 상품으로 설정 시 알림 
10| 메인 페이지 구성| 베너 + 최신 도서 4개로 구성| 베너 + 팝니다, 삽니다, 무료나눔 게시판 최신 등록 글 4개로 변경
11| 메인 페이지 베너| 최신 등록 글, 이용 매너, 인기글| 도서로 이용 매너, 인기글로 변경

### 추후 추가 구현할 것들
✔가격 순, 최신순 필터 적용

✔거래 후기

✔프로필 변경

## < 파일 구조 📂 >
* public
  * css - css files
  * img - image files
  * js - script files
* routes - router files
* views - HTML and nunjucks files
* config - Setting for linking sequelize and mysql
* models - sequelize table
* passpor- passport strategy
 
## < 사용 기술 > 
* Backend: Express, Passport, AWS EC2, Route53, Multer
* Frontend: Nunjucks Bootstrap
* Database: Sequelize, mysql
 
 ## DB 테이블 구조
 * [books](https://github.com/Taewoongjung/TeamProject/blob/main/DB_books.md)
 * [users](https://github.com/Taewoongjung/TeamProject/blob/main/DB_users.md)
 * [posts](https://github.com/Taewoongjung/TeamProject/blob/main/DB_posts.md)
 * [communities](https://github.com/Taewoongjung/TeamProject/blob/main/DB_communities.md)
 * [whose](https://github.com/Taewoongjung/TeamProject/blob/main/DB_whose.md)
 * [complains](https://github.com/Taewoongjung/TeamProject/blob/main/DB_complains.md)
 
 ## ER Diagram
 ![image](https://user-images.githubusercontent.com/70272679/122011853-83fdda00-cdf7-11eb-8ed9-0e3b5b472cee.png)


 
