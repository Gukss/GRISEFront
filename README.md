# GRISE_TUTEE

- [GRISE_TUTEE](#grise_tutee)
- [URL](#url)
		- [https://grisetutee.netlify.app/](#httpsgrisetuteenetlifyapp)
- [Description](#description)
	- [name](#name)
	- [introduce](#introduce)
	- [directory](#directory)
- [Information](#information)
	- [System Architecture](#system-architecture)
	- [Class Diagram](#class-diagram)
	- [Sequence Diagram](#sequence-diagram)
	- [Design](#design)
	- [E-R Diagram](#e-r-diagram)
	- [Schema](#schema)
		- [User](#user)
		- [Tutee](#tutee)
		- [Tutor](#tutor)
		- [Resume](#resume)
		- [Consult](#consult)
		- [Comment](#comment)
		- [Video](#video)
		- [Review](#review)
	- [API and JSON](#api-and-json)
		- [메인 페이지](#메인-페이지)
		- [상담페이지](#상담페이지)
		- [상담 요청](#상담-요청)
		- [상담 재요청](#상담-재요청)
		- [상담 완료](#상담-완료)
- [Result](#result)

# URL

### [https://grisetutee.netlify.app/](https://grisetutee.netlify.app/)

# Description

## name

GRISE

## introduce

 기존의 오프라인 PT는 많은 횟수를 한 번에 결제하고 중도해지가 힘들기 때문에 여러 명의 트레이너에게 트레이닝을 받아볼 수 없는 문제가 있다. 온라인에서 자신의 운동 영상을 포함한 상담지를 작성해 트레이너에게 질문을 함으로써 단기간에 여러 명의 트레이너에게 트레이닝을 요청하고 답을 받을 수 있고, 자신이 원하는 운동 스타일의 트레이너를 찾을 때 도움을 주기 위해 온라인 피트니스 코칭 서비스 GRISE를 개발하게 되었다.

 여러 프론트 라이브러리 중 현재 가장 많이 사용되고 있는 react를 사용해 개발을 진행했고 PWA로 스마트폰에 설치해 사용할 수 있게 개발했다.
백엔드의 프레임워크로는 많이 사용되는 언어중 하나이며 Java언어의 특성상 배포의 독립성이 높은 Spring Boot를 사용하여 개발하였다.

## directory

```
grisetutor
├── public
│   ├── Json
│	  │	  ├── consultPage
│	  │	  ├── mainPageTutor
│   │	  └── **consultForm.json**
│   └── Videos
│   
└── src
    ├── Image
    ├── Pages
    │   ├── LoginPage
    │   ├── ProfilePage
    │   ├── TutorConsultpage
    │   ├── TutorMainPage
    │   ├── **Loadingpage.jsx**
    │   └── **NavBar.jsx**
    ├── oauth
    └── styles
        ├── fonts
        └── globalStyle
```

---

# Information

## System Architecture

![https://user-images.githubusercontent.com/77517470/179341021-c4a8dbc2-f4c5-4698-aebc-4bd891dec18a.png](https://user-images.githubusercontent.com/77517470/179341021-c4a8dbc2-f4c5-4698-aebc-4bd891dec18a.png)

## Class Diagram

![https://user-images.githubusercontent.com/76477531/179341531-761bc241-addf-4937-88ab-f8b77f8dfe9d.png](https://user-images.githubusercontent.com/76477531/179341531-761bc241-addf-4937-88ab-f8b77f8dfe9d.png)

![https://user-images.githubusercontent.com/76477531/179341581-d82fbe6e-7b2d-45ba-a20f-640bc513db5a.png](https://user-images.githubusercontent.com/76477531/179341581-d82fbe6e-7b2d-45ba-a20f-640bc513db5a.png)

![https://user-images.githubusercontent.com/76477531/179341587-dfe0e710-6c4d-4ff1-a9e9-e2939a13659e.png](https://user-images.githubusercontent.com/76477531/179341587-dfe0e710-6c4d-4ff1-a9e9-e2939a13659e.png)

![https://user-images.githubusercontent.com/76477531/179341591-3ea5d9da-6907-41c6-a80e-3c0ba735e1d1.png](https://user-images.githubusercontent.com/76477531/179341591-3ea5d9da-6907-41c6-a80e-3c0ba735e1d1.png)

![https://user-images.githubusercontent.com/76477531/179341594-99e00e96-9c3f-4fc0-840d-2dbab79a749b.png](https://user-images.githubusercontent.com/76477531/179341594-99e00e96-9c3f-4fc0-840d-2dbab79a749b.png)

![https://user-images.githubusercontent.com/76477531/179341598-315da284-b23e-4d2d-b77f-588416c79809.png](https://user-images.githubusercontent.com/76477531/179341598-315da284-b23e-4d2d-b77f-588416c79809.png)

## Sequence Diagram

****<!--**** img SequenceDiagram ****-->****

![https://user-images.githubusercontent.com/76477531/179341766-4d49fcc2-fe5f-46e4-b1b6-86c86498dc63.png](https://user-images.githubusercontent.com/76477531/179341766-4d49fcc2-fe5f-46e4-b1b6-86c86498dc63.png)

![https://user-images.githubusercontent.com/76477531/179341768-23922bff-efae-4e2d-b7c2-58602ccfd21d.png](https://user-images.githubusercontent.com/76477531/179341768-23922bff-efae-4e2d-b7c2-58602ccfd21d.png)

![https://user-images.githubusercontent.com/76477531/179341769-2b95b99b-0935-45d4-aa1b-f898e0ee9344.png](https://user-images.githubusercontent.com/76477531/179341769-2b95b99b-0935-45d4-aa1b-f898e0ee9344.png)

![https://user-images.githubusercontent.com/76477531/179341770-7c902ea2-98e0-40bb-8306-6a7a7192ac89.png](https://user-images.githubusercontent.com/76477531/179341770-7c902ea2-98e0-40bb-8306-6a7a7192ac89.png)

## Design

[https://www.figma.com/file/sgRoBucvp5cIUTGveaQPrc/%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=0%3A1](https://www.figma.com/file/sgRoBucvp5cIUTGveaQPrc/%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=0%3A1)

## E-R Diagram

![https://user-images.githubusercontent.com/76477531/179341790-bd346456-f62f-4920-98a2-faa8911ef65b.png](https://user-images.githubusercontent.com/76477531/179341790-bd346456-f62f-4920-98a2-faa8911ef65b.png)

## Schema

### User

```sql
create table users (
       user_id varchar(64) not null,
        created_at timestamp,
        email varchar(512),
        email_verified_yn varchar(1),
        modified_at timestamp,
        password varchar(128),
        profile_image_url varchar(512),
        provider_type varchar(20),
        role_type varchar(20),
        user_seq int8,
        username varchar(100),
        primary key (user_id)
    )
```

### Tutee

```sql
create table tutee (
       tutee_id int8 generated by default as identity,
        username varchar(255),
        user_id varchar(64),
        primary key (tutee_id)
    )
```

### Tutor

```sql
create table tutor (
       tutor_id int8 generated by default as identity,
        username varchar(255),
        user_id varchar(64),
        primary key (tutor_id)
    )
```

### Resume

```sql
create table resume (
       resume_id int8 generated by default as identity,
        content varchar(255),
        tutor_id int8,
        primary key (resume_id)
    )
```

### Consult

```sql
create table consult (
       consult_id int8 generated by default as identity,
        content varchar(255) not null,
        is_arrive_message_to_tutee boolean not null,
        is_arrive_message_to_tutor boolean not null,
        is_consulting boolean not null,
        is_done boolean not null,
        is_post boolean not null,
        title varchar(50) not null,
        tutee_id int8,
        tutor_id int8,
        primary key (consult_id)
    )
```

### Comment

```sql
create table comment (
       comment_id int8 generated by default as identity,
        content varchar(255),
        user_id varchar(255) not null,
        username varchar(255),
        consult_id int8,
        primary key (comment_id)
    )
```

### Video

```sql
create table video (
       video_id int8 generated by default as identity,
        data oid,
        name varchar(200),
        consult_id int8,
        primary key (video_id)
    )
```

### Review

```sql
create table review (
       review_id int8 generated by default as identity,
        content varchar(255),
        star int4 not null,
        consult_id int8,
        tutee_id int8,
        tutor_id int8,
        primary key (review_id)
    )
```

## API and JSON

### 메인 페이지

**요청 목록**

```
[GET] /tutee/consults
```

params

```
요청중
params: {content: "posting"}

진행중
params: {content: "consulting"}

완료
params: {content: "done"}
```

JSON

```json
[
	{
	"consultId": 2,
	"title": "general1",
	"username": "김민영",
	"isArriveMessageToTutee": false
	},
	{
	"consultId": 4,
	"title": "general3",
	"username": "김민영",
	"isArriveMessageToTutee": false
	},
	{
	"consultId": 1,
	"title": "general6",
	"username": "김민영",
	"isArriveMessageToTutee": false
	},
	{
	"consultId": 3,
	"title": "general2",
	"username": "김민영",
	"isArriveMessageToTutee": true
	}
]
```

**튜터 목록**

```
[GET] /tutee/tutors
```

JSON

```json
[
	{
	"tutorId": 1,
	"username": "튜티1",
	"resumeContent": "no",
	"review":{"tutorId": 1, "count": 2, "starTotal": 7, "star": "3.5"}
	},
	{
	"tutorId": 2,
	"username": "튜티2",
	"resumeContent": "no",
	"review":{"tutorId": 1, "count": 0, "starTotal": null, "star": "리뷰 없음"}
	},
]
```

### 상담페이지

**상담 페이지**

```
[GET] /tutor/consults/{consultId}
```

JSON

```json
{
	"consultId": 7,
	"title": "어깨좀 봐주세요",
	"content": "상담본문3",
	"tutee":{
		"name": "김민영"
	},
	"tutor":{
		"name": "김민영"
	},
	"video":{
		"videoId": 7
	},
	"commentList":[
		{
			"commentId": 2,
			"content": "~~이렇게 하면 됩니다",
			"userName": "김민영"
			"userId": 1234123
		},
		{
			"commentId": 3,
			"content": "아 그럼 이렇게 하면되나요",
			"userName": "김민영"
			"userId": 4213123
		}
	]
}
```

**상담 페이지 수정**

```
[GET] /tutee/consults/{consultId}
Content-Type : "multipart/form-data”
```

JSON

```json
{
  "title": "수정된title",
  "content": "수정된content",
	"video": video-data
}
```

**상담 페이지 삭제**

```
[DELETE] /tutee/consults/{consultId}
```

### 상담 요청

**튜터 선택해 상담 요청**

```
[POST] /tutee/consults/post/{tutorId}
```

JSON

```json
{
  "title": "제목1",
  "content": "상담본문1",
	"video": video-data
}
```

### 상담 재요청

**튜터의 상담을 확인하고 Comment를 보내기**

```
[POST] /tutee/consults/{consultId}/comment
```

JSON

```json
{
		"content": "아 그럼 이렇게하면 되나요?"
}
```

**상담지의 commentList 가져오기**

```
[GET] /tutee/consults/{consultId}/comments
```

JSON

```json
[
	{
	"commentId": 2,
	"content": "~~이렇게 하면 됩니다",
	"userName": "김민영",
	"userId": 1234123
	},
	{
	"commentId": 3,
	"content": null,
	"userName": "김민영",
	"userId": 1234123
	}
]
```

### 상담 완료

**상담 완료**

```
[POST] /tutee/consults/{consultId}/done
body에 아무것도 없이 요청한다.
```

**리뷰**

```
[POST] /tutee/consults/{consultsId}/review
```

JSON

```json
{
	"star": 5,
	"content": "리뷰내용"
}
```

---

# Result
