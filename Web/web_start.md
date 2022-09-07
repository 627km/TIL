# Web 시작하기
## 1. Eclipse에 STS 설치
### 1.1 eclipse 실행
### 1.2 help > Eclipse Marketplace > STS 검색
### 1.3 Spring Tool 3 install
### 1.4 eclipse restart
## 2. SpringBoot Web Application 환경세팅
### 2.1 project 생성 > SpringBoot > Spring Starter Project
### 2.3 project 명 입력 (아래 사항 확인)
- type : maven  
- packaging : war  
- java version : 11  
### 2.4 Group, Package 명 입력
- 반드시 두개 이상의 package 명으로 입력 (ex. `com.multi`)
### 2.5 Dependencies 선택
- Spring Boot DevTools  
- Spring Web  
- Thymeleaf
### 2.6 pom.xml 추가 입력
```xml
<!-- @Inject -->
<dependency>
    <groupId>javax.inject</groupId>
    <artifactId>javax.inject</artifactId>
    <version>1</version>
</dependency>
<!-- Servlet -->

<dependency>
    <groupId>org.apache.tomcat.embed</groupId>
    <artifactId>tomcat-embed-jasper</artifactId>
    <scope>provided</scope>
</dependency>


<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>javax.servlet-api</artifactId>
    <version>3.0.1</version>
    <scope>provided</scope>
</dependency>
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>jstl</artifactId>
    <version>1.2</version>
</dependency>

<!-- json request -->   

<dependency>
    <groupId>com.googlecode.json-simple</groupId>
    <artifactId>json-simple</artifactId>
    <version>1.1</version>
</dependency>
```
- 외부 라이브러리를 사용한다는 것을 의미
### 2.7 접속 port 변경
>src/main/resources에 있는 applications.properties 파일에 `server.port=80` 입력
### 2.8 run as > Spring Boot App 으로 실행
- port 번호가 80으로 확인되면 변경이 잘 된 것이다.    
- port 변경하지 않은 경우 : http://127.0.0.1:8080   
- port 80으로 변경한 경우 : http://127.0.0.1  (80port는 기본이므로 생략가능)
- Whitelabel Error Page가 보여지면 정상적으로 서버가 떠있는 것이다. 
## 3. HTML 기본문법
### 3.1 `<h>` Tag 
```html
<h1>Hello word!</h1>
<h2>Hello word!</h2>
<h3>Hello word!</h3>
<h4>Hello word!</h4>
<h5>Hello word!</h5>
<h6>Hello word!</h6>
```
# Hello word! 
## Hello word!
### Hello word!
#### Hello word!
##### Hello word!
###### Hello word!
- 제목을 표현할 때 사용
- 한 줄을 모두 차지하는 `Block` tag 이다.
- 따라서 자동으로 줄바꿈이 된다. 
- h1 ~ h6 까지 있으며, 숫자가 작을 수록 텍스트의 크기가 크다.
- 단순히 크기를 키울 목적으로 사용하지 않는다.
### 3.2 `<a>` Tag
```html
<a href="https://github.com/627km"></a>
```
- 시작 태그에 `href="주소"` 가 들어간다.
- 마우스 커서를 위에 가져다 놓으면 유일하게 손가락으로 바뀌는 태그이다.
- 자신의 텍스트의 크기만큼만 자리를 차지하는 `Inline` tag 이다.
- 따라서 엔터를 후에 입력해도 줄바꿈이 되지않고 바로 옆에 붙는다. 
### 3.3 `<p>` Tag
```html
<p> 
    What did we poor humans do before the advent of Mark Zuckerberg’s collegiate brainstorm? Let’s see, we smiled when we “liked” something, we dialed the phone to “update” friends and “tagging” was a kids’ game. Then came teenage Zuck and his shrewdly rolled-out vision for a new kind of digital club where you played bouncer, all with a Machiavellian backstory that eventually merited its own Oscar-winning movie, The Social Network. Facebook haters crowed after its hyped IPO last May quickly went sour, but the company has bounced back with a fiscal vengeance. What did we poor humans do before the advent of Mark Zuckerberg’s collegiate brainstorm? Let’s see, we smiled when we “liked” something, we dialed the phone to “update” friends and “tagging” was a kids’ game.
</p> 
<p>
    Then came teenage Zuck and his shrewdly rolled-out vision for a new kind of digital club where you played bouncer, all with a Machiavellian backstory that eventually merited its own Oscar-winning movie, The Social Network. Facebook haters crowed after its hyped IPO last May quickly went sour, but the company has bounced back with a fiscal vengeance.
</p>
```
- `<p>` Tag는 문단(내용)을 나타낼 때 사용한다.
- 한 줄을 모두 차지하는 `Block` Tag 이다
- 자동으로 줄 바꿈이 된다. 
- `<p>` Tag끼리 연속으로 있으면 약간의 여백이 자동으로 적용된다. 
### 3.4 `<ul>`, `<ol>` Tag
```html
<ul>    <!--번호가 없는 일반 동그라미 목록 -->
	<li>HOME</li>
	<li>WOMAN</li>
	<li>MAN</li>
	<li>CHILD</li>
</ul>   
	
<ol>    <!-- 번호가 있는 목록 -->
	<li>HOME</li>	
	<li>WOMAN</li>
	<li>MAN</li>
	<li>CHILD</li>
</ol>
```
- `<ul>`은 동그라미로 목록이 매겨지고, `<ol`>은 숫자로 목록이 매겨진다.
- `<li>`는 목록에 들어가는 요소를 표현하는 tag이다. 
### 3.5 `<img>` Tag
```html
<img src="img/p1.jpg"> <!-- 내PC에 저장되어있는 이미지 -->
<img src="http://www.hanbit.co.kr/images/common/logo_hanbit.png">   <!-- 내PC에 저장되어 있지 않은 이미지도 불러올 수 있다. -->
```
- 시작태그 안에 `src="주소(경로)"`를 입력 해 준다. 
- 끝 tag가 없다. 
### 3.6 `<audio>`, `<video>` Tag
```html
<audio src="img/mp.mp3" controls="controls"></audio>
<video src="img/movie.mp4" controls="controls"></video>
```
- `<img>`와 동일하게 `src="주소(경로)"`를 입력 해 준다.
- `controls="controls"`를 입력해서 재생을 조절 할 수 있다.
### 3.7 `<table>` Tag
```html
<table border="2px" width="400px">  <!-- 테이블의 테두리는 2px, 테이블의 너비는 400px로 지정, px : 픽셀>
	<thead>	<!-- 테이블 헤드 -->
		<tr><th>ID</th><th>PWD</th><th>NAME</th></tr>   <!-- 열 이름 -->
	</thead>
	<tbody> <!-- 테이블 바디 -->
		<tr><td>id01</td><td>pwd01</td><td>이말숙</td></tr>
		<tr><td>id02</td><td>pwd02</td><td>이말숙</td></tr>
		<tr><td>id03</td><td>pwd03</td><td>이말숙</td></tr>
		<tr><td>id04</td><td>pwd04</td><td>이말숙</td></tr>
		<tr><td>id05</td><td>pwd05</td><td>이말숙</td></tr>
	</tbody>
</table>
```
## 4. 입력양식태그 
```html
<form action="/loginimpl" method="get"> 
<label for="id">ID</label>
<input id= "id" type="text" name="id">	<!-- id는 고유한 값, name은 서버로 전송할 때 사용 -->
<br>
<label for="pwd">PWD</label>
<input id= "pwd" type="password" name="pwd">
<br>
<input type="submit" value="LOGIN"> <!-- 입력된 값이 서버에 전달된다. -->
</form>
```
- `method="get"`방식은 id와 pwd를 입력하고 로그인버튼을 클릭하면 데이터가 노출된다.  
- `method="post"`방식은 id와 pwd를 입력하고 로그인버튼을 클릭하면 화면에 보이지 않고, 서버로 전달된다.
## 5. CSS
### 5.1 CSS 기본문법
```css
<style>
h1{
    color: red;
}
h1 > a{
    color: red;
}
</style>
```
- HTML파일에 CSS를 적용할 경우 `<head></head>`안에 `<style></style>`을 입력 후 style태그 사이에 입력한다. 
- 스타일을 줄 때, html 태그를 명시한 후 { }안에 코드를 입력한다.
- `a`태그가 여러 개 일 경우, 특정 `a`태그에만 스타일을 주려면 어떤 태그안에 있는 `a`태그인지 명시해준다.(ex. `h1 > a`, `img > a`, 등등 ...)
   
```css
<style>
    #header{
        color: black;
    }

    .sub_header{
        color: blue;
    }
</style>
```
```html
<body>
    <h1 id="header">Hello World!</h1>
    <h1>Hello World!</h1>

    <h2 class="sub_header">HTML CSS JavsScript</h2>
    <h3 class="sub_header">HTML CSS JavsScript</h2>
</body>
```
- id : 고유한 값, 중복사용 불가능
- class : 중복 사용 가능
- id를 갖고있는 태그에 스타일을 줄 때는 `#id_name`을 하면된다.
- class를 갖고있는 태그에 스타일을 줄 때는 `.class_name`을 하면된다.
   
```css
/* 자주사용하는 스타일 */
color: red;             /* 글자 색 */
background: red;        /* 배경 색 */
margin: 10px 20px;      /* 바깥 여백(상하 좌우) */
padding: 10px 20px;     /* 안쪽 여백(상하 좌우) */
width: 100px;           /* 너비 */
height: 100px;          /* 높이 */
font-weight: bold;      /* 글자 두껍게 */
text-decoration: none;  /* 링크 밑줄 제거 */
list-style: none;       /* 목록 점 제거 */
display: block;         /* inline -> block */
text-align: center;     /* 글자 가운데 정렬(좌우) */
line-height: 50px;      /* 글자 가운데 정렬(상하) */
...