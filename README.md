# kiam [![CircleCI](https://circleci.com/gh/trendev/kiam-welcome/tree/master.svg?style=svg&circle-token=438627b637ade98e6d72c16f6482297a8367a9d7)](https://circleci.com/gh/trendev/kiam-welcome/tree/master)

This project hosts [kiam](https://kiam.fr) welcome pages sources, build thanks to Angular Universal

### local rendering
`npm run build:ssr && npm run serve:ssr`

### build
`docker build -t trendev/kiam-welcome .`

### run
`docker run --rm -p 9000:9000 trendev/kiam-welcome`

### push to docker hub
`docker push trendev/kiam-welcome`
