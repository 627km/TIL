# Web 시작하기
## Setting
## 1. Eclipse에 STS 설치
### 1.1 eclipse 실행
### 1.2 help > Eclipse Marketplace
### 1.3 STS 검색
### 1.4 Spring Tool 3 install
### 1.5 eclipse restart
## 2. SpringBoot Web Application 환경세팅
### 2.1 project 생성 
### 2.2 SpringBoot > Spring Starter Project
### 2.3 project 명 입력
> type : maven  
> packaging : war  
> java version : 11  
### 2.4 Group, Package 명 입력
> 반드시 두개 이상의 package 명으로 입력 (ex. `com.multi`)
### 2.5 Dependencies 선택
> Spring Boot DevTools  
> Spring Web  
> Thymeleaf
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
> 외부 라이브러리를 사용한다는 것을 의미
### 2.7 접속 port 변경
>src/main/resources에 있는 applications.properties 파일에 `server.port=80` 입력
### 2.8 run as > Spring Boot App 으로 실행
> port 번호가 80으로 확인되면 변경이 잘 된 것이다.    
> port 변경하지 않은 경우 : http://127.0.0.1:8080   
> port 80으로 변경한 경우 : http://127.0.0.1  (80port는 기본이므로 생략가능)
> Whitelabel Error Page가 보여지면 정상적으로 서버가 떠있는 것이다. 
## 3. HTML 기본문법
### 3.1 <h> Tag 
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
- h1 ~ h6 까지 있으며, 숫자가 작을 수록 텍스트의 크기가 크다.
- 단순히 크기를 키울 목적으로 사용하지 않는다. 
### 3.2 <a> Tag
```html
<a href="https://github.com/627km"></a>
```
- 시작 태그에 `href="주소"` 가 들어간다.
- 마우스 커서를 위에 가져다 놓으면 유일하게 손가락으로 바뀌는 태그이다.