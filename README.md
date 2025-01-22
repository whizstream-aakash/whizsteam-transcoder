# whizsteam-transcoder
ECS Fargate and Video transcoder

1) npm install
2) Added .env file and update your credentials in index.ts file:
   AWS_ACCESS_KEY_ID,
   AWS_SECRET_ACCESS_KEY,
   AWS_REGION,
4) npm start
5) docker build -t video-transcoder:latest .
6) docker run -d --name video-transcoder

