# SQL (Structured Query Language)
> - ---DDL (Data Definition Language, 데이터 정의어)   
> : 데이터를 정의하는 언어로 '데이터를 담는 그릇을 정의하는 언어'   
> : 데이터베이스, 테이블과 같은 데이터 구조를 정의하는 데 사용되는 명령어로 구조를 생성, 삭제, 변경
> - DML (Database Manuplate Language) : Data를 CRUD(Create, Read, Update, Delete)

## 1. DDL 기본구조
### 1.1 생성
```sql
CREATE DATABASE databaseName;   -- DB(Database) 생성
```
- 먼저 테이블을 담을 데이터베이스를 생성해 준다.

```sql
 CREATE TABLE tableName (   -- TABLE 생성 
    column_1 dataType [constraint],
    column_2 dataType [constraint],
    column_3 dataType [constraint]
);
 ```
  - 명령의 끝은 `;`으로 끝나야 한다. 
  - `CREATE TABLE`과 같은 명령어는 대문자로 쓰는 것이 관례이다. 
  - `[constraint]`는 제약조건이 들어길 자리 - (선택사항)
### 1.2 삭제
```sql
DROP DATABSE databseName;   -- DB 삭제
TRUNCATE TABLE tableName;   -- TABLE 삭제 
DROP TABLE tableName;   -- TABLE 삭제
```
- `TRUNCATE TABLE`은 테이블의 구조는 남기고 데이터만 삭제
- `DROP TABLE`은 테이블의 구조와 데이터 모두 삭제
- 
### 1.3 수정(변경)
```sql
ALTER TABLE tableName ADD culumnName dataType [constraint]; -- column 추가
ALTER TABLE tableName MODIFY columnName dataType [constraint];  -- column 수정
ALTER TABLE tableName DROP columnName;  -- column 삭제
```

## 2. DML 기본구조

### 2.1 INSERT
### 2.2 SELECT
### 2.3 UPDATE
### 2.4 DELETE