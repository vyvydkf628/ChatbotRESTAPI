# ChatbotRESTAPI

## step 1

도커 이미지화

``` % docker build -t gcr.io/{project id}/chatbot-api:v1 . ```

쿠버네티스 클러스터 인증 정보 얻기 

``` %gcloud container clusters get-credentials {CLUSTER_NAME} ```

GCR 인증정보 얻기

``` %gcloud auth configure-docker ```

GCR에 이미지 푸쉬

``` %docker push gcr.io/{project id}/chatbot-api:v1  ```

Replication Controller 등록

``` %kubectl create -f chatbot-api-rc.yaml ```

Service 등록

``` %kubectl create -f chatbot-api-svc.yaml ```


## step2

example)
"http://{service external ip}:80/chat?sentence=what is your name?"
