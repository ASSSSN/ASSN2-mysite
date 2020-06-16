# ASSN2-mysite
포트폴리오를 목적으로 만든 개인 페이지 입니다.  
현재 페이지와 같은 목적을 가진 페이지를 두세번 더 만든적이 있지만,  
심플한 디자인으로 다시 만들어 봤습니다.  
node.js를 공부하면서 익숙해진 pug 탬플릿 엔진을 사용하기로 했습니다.

# 프로젝트 정보
## 설치와 실행
```
npm i  
  
npm run dev - 개발 상태
npm start - 배포상태
```
추가적으로 id와 비밀번호, cookie secret을 .env 파일에 생성해주어야 합니다.

## 개발 환경
node.js기반의 서버에 pug 템플릿 엔진을 사용했습니다. connect-flash를 사용하기 위해  
cookie, session을 추가적으로 사용했고 제 gmail과 자동으로 연동된 이메일 전송을 구현했습니다.

## 배포 환경
~~AWS ec2 서비스를 사용하여 배포중입니다. 주소는 http://13.125.250.173:3000/ 입니다.~~ 
AWS 서비스가 만료 되감에 따라 노트북으로 만든 서버로 옮겼습니다. http://121.168.76.254:3000/
