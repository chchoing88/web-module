## lerna 사용법

- lerna 초기화 및 independent 모드로 실행

```sh
$ lerna init -i
```

- 각 패키지 안에 들어있는 모듈의 npm install 을 실행

```sh
$ lerna bootstrap
```

- 각 패키지들이 마지막 릴리즈 이후에 변화가 있었는지 체크

```sh
$ lerna updated
```

- 각 패키지 안에 있는 npm script 를 한번에 run 시켜줌.

```sh
$ lerna run [script]
```

- 모듈간의 의존성 추가

```sh
## modulea 의 package.json에 dependency에 moduleb 추가
$ lerna add modulea --scope=moduleb

## modulea 의 package.json에 devDependency에 moduleb 추가
$ lerna add modulea --scope=moduleb --dev

## 모든 모듈 package.json에 devDependency에 moduleb 추가
$ lerna add modulea
```

- 배포 ( git 및 npm )

```sh
## git 뿐만 아니라 npmjs 에도 배포 ( npm publish )
$ lerna publish

## npm 생략 ( 대신 git 에도 올라가지 않음 )
$ lerna publish --skip-npm

## 이렇게 publish 하면 package.json 의 버전이 업데이트가 되고
## 그에 관련된 의존성있던 모듈들의 package.json의 devDependency 나 dependency의 해당 모듈의 버젼도 업데이트 시켜준다.
```

- 자세한건 lerna 공식 홈페이지 참조.
  [https://lernajs.io/](https://lernajs.io/)
