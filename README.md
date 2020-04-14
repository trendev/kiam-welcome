# kiam

This project hosts [kiam](https://kiam.fr) welcome pages sources, build thanks to Angular Universal

### local rendering
`npm run build:ssr && npm run serve:ssr`

### build
`docker build -t trendev/kiam-welcome .`

### run
`docker run --rm -p 9000:9000 trendev/kiam-welcome`

### push to docker hub
`docker push trendev/kiam-welcome`
