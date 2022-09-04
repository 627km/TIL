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
```
- `*(asterisk)`를 입력하면 전체 column에 대한 데이터를 조회한다. 
- 특정 column명(`num`, `name`)을 입력하면 그 column에 대한 데이터만 조회한다. 
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