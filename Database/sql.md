# SQL (Structured Query Language)
> - DDL (Data Definition Language, 데이터 정의어)   
> : 데이터를 정의하는 언어로 '데이터를 담는 그릇을 정의하는 언어'   
> : 데이터베이스, 테이블과 같은 데이터 구조를 정의하는 데 사용되는 명령어로 구조를 생성, 삭제, 변경
> - DML (Database Manuplate Language) : Data를 CRUD(Create, Read, Update, Delete)

## 1. DDL 기본구조
### 1.1 생성(CREATE)
```sql
CREATE DATABASE school;   -- DB(Database) 생성
```
- 먼저 테이블을 담을 데이터베이스를 생성해 준다.
- 명령의 끝은 `;`으로 끝나야 한다. 
- `school`은 데이터베이스 이름이다. 
```sql
 CREATE TABLE student (   -- TABLE 생성 
    num INT [constraint],
    name VARCHAR(5) [constraint],
    major VARCHAR(10) [constraint]
);
 ```
- `stuent`는 테이블 이름이고, `num`, `name`, `major`은 column명이고, `INT`, `VARCHAR`는 데이터타입이다.
- 명령의 끝은 `;`으로 끝나야 한다. 
- `CREATE TABLE`과 같은 명령어는 대문자로 쓰는 것이 관례이다. 
- `[constraint]`는 제약조건이 들어길 자리 - (선택사항)
### 1.2 삭제(DROP, TRUNCATE)
```sql
DROP DATABSE school;   -- DB 삭제
TRUNCATE TABLE student;   -- TABLE 삭제 
DROP TABLE student;   -- TABLE 삭제
```
- `TRUNCATE TABLE`은 테이블의 구조는 남기고 데이터만 삭제
- `DROP TABLE`은 테이블의 구조와 데이터 모두 삭제
- 
### 1.3 수정(변경)(ALTER)
```sql
ALTER TABLE student ADD gender CHAR(2) [constraint]; -- column 추가
ALTER TABLE student MODIFY num INT [constraint];  -- column 수정
ALTER TABLE tableName DROP columnName;  -- column 삭제
```

## 2. DML 기본구조
### 2.1 삽입(INSERT)
```sql
INSERT INTO student VALUES (1711111, '유재석', '화학공학과');
INSERT INTO student VALUES (1722222, '박명수', '전자공학과');
INSERT INTO student VALUES (1733333, '정준하', '기계공학과');
```
- `CREATE TABLE`로 만든 테이블 테이블 이름을 `INSERT INTO`뒤에 입력하고   
  column이름에 맞게 데이터를 ( )안에 입력해서 테이블안에 데이터를 삽입한다. 
### 2.2 조회(SELECT)
```sql
SELECT * FROM student;  -- 전체
SELECT num, name FROM student;  -- num, name만
SELECT DISTINCT(major) FROM student;  -- 중복제외  
```
- `*(asterisk)`를 입력하면 전체 column에 대한 데이터를 조회한다. 
- 특정 column명(`num`, `name`)을 입력하면 그 column에 대한 데이터만 조회한다.
- `DISTINCT`: 같은 `major`을 가진 학생이 여러명인 경우 학과를 조회할 때 증복되는 것을 제외하고 어떤 `major`가 있는지 조회한다.
  > Ex) 화학공학과, 화학공학과, 전자공학과, 전자공학과   
  -> 화학공학과, 전자공학과   
### 2.3 수정(UPDATE)
```sql
UPDATE student SET major = '컴퓨터공학과' 
WHERE id = 1711111; -- 조건
```
- `WHERE`은 조건을 나타낸다.
- `id`가 1711111인 데이터의 `major`를 컴퓨터공학과로 수정
- `WHERE`절을 사용하지 않으면 모든 `major` 데이터가 수정된다. 
### 2.4 삭제(DELETE)
```sql
DELETE FROM student 
WHERE id = 1722222; -- 조건
```
- `id`가 1722222인 행을 삭제
- `UPDATE`와 마찬가지로 `WHERE`절을 입력하지 않으면 `student`테이블의 모든 데이터가 삭제된다.
## 3. 사용자 생성
```sql
CREATE USER 'user01'@'%' IDENTIFIED BY '111111';
GRANT ALL PRIVILEGES ON school.* TO 'user01'@'%';
FLUSH PRIVILEGES;
```
- 유저명을 `user01`로 하고, 비밀번호를 `111111`으로 한다.
- `%`을 표기하면 원격 접속 권한을 준다는 의미이다. 
- `GRANT`는 권한을 부여하는 명령어이다. 
- `FLUSH PRIVILEGES`는 refresh 같은 의미이다.
## 4. 조회(SELECT) 응용
### 4.1 WHERE(조건)
```sql
-- id가 1711111인 데이터만 조회
SELECT * FROM student
WHERE id = 1711111;     

-- name이 '유'로 시작하는 데이터만 조회
SELECT * FROM student
WHERE name LIKE '유%';  

SELECT * FROM student
WHERE id = 1711111 AND name LIKE '유%'  
-- id가 1711111, 이름이 '유'로 시작. 이 두 조건을 모두 만족하는 데이터만 조회

-- id가 1711111, 이름이 '박'으로 시작. 이 두 조건 중 하나라도 만족하는 데이터만 조회
SELECT * FROM student
WHERE id = 1711111 OR name LIKE '박%'  


-- major가 세 개 중 하나에 해당하는 데이터를 조회
SELECT * FROM student
WHERE major IN ('화학공학과', '전자공학과', '기계공학과');

-- major가 '전자공학과', '기계공학과'에 해당하지 않는 데이터를 조회
SELECT * FROM student
WHERE major NOT IN ('전자공학과', '기계공학과');

```
- `WHERE`절을 사용해서 데이터를 조회할 때 조건을 줄 수 있다.
- 두개의 조건을 `AND` 나 `OR` 로 연결할 수 있다.
- 여러개에 해당 혹은 해당하지 않는 데이터를 조회할 때 `IN`, `NOT IN` 사용
### 4.2 ORDER BY(정렬)
```sql
-- id를 기준으로 오름차순(ASC) 정렬(id 숫자가 작은것이 위에 위치)
SELECT * FROM student
ORDER BY id ASC;

-- id를 기준으로 내림차순(DESC) 정렬(id 숫자가 큰  것이 위에 위치)
SELECT * FROM student
ORDER BY id DESC;

-- height를 기준으로 오름차순 정렬, 같은 height끼리는 id를 기준으로 내림차순 정렬
SELECT * FROM student
ORDER BY height ASC, id DESC;
```
- ASC(Ascending): 오름차순
- DESC(Descending): 내림차순
- 정렬 기준을 두개를 줄 수 있다. 
### 4.3 그룹(GROUP BY)
```sql
-- 전공별 키의 평균을 구하시오
SELECT major, AVG(height) AS avg FROM student
GROUP BY major -- ~별 에 해당하는 그룹을 짓은 기준column이 들어간다. 
HAVING id > 1700000;  -- 조건
```
- `AVG()`, `SUM()`, `MAX()`, `MIN()` 과 같은 연산처리를 할 수 있다.
- 이 경우 column 이름에 그대로 길게 들어가므로 AS(Alias)처리를 해준다. 
- 보통 가입 월별, 연도별, 지역별 조회와 같은 경우에 사용된다. 
- `GROUP BY`로 그룹을 만든 후 조건을 줄 때는 `WHERE`이 아닌 `HAVING` 절을 사용해야 한다. 

