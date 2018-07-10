## monorepo

- monorepo 를 이용하여 여러 npm 모듈들을 한꺼번에 관리한다.
- monorepo 와 eslint 로 써서 모듈들의 코드 일관성을 유지.
- 쉽게는 packages 폴더 안 폴더 하나하나가 npm 모듈들이라고 생각하고 각자의 레퍼지토리가 따로 있었다고 생각하면 된다. 그것을 한 repo 로 관리하는것이 monorepo
- 이점으로 모듈들의 버전관리 및 코드 일관성을 유지 시킬 수 있다. ( eslint 를 전역으로 설정해 놓으면 이 안에 있는 코드들은 같은 코드 일관성을 유지 할 수 있다.)
- 단점으로 한 repo 의 무게가 무거워 질 수 있다.

## lerna 사용법

- lerna 초기화 및 independent 모드로 실행

```sh
$ lerna init -i
```

- 각 패키지 안에 들어있는 모듈의 npm install 을 실행

```sh
$ lerna bootstrap
```

- dependency update

```sh
$ lerna update
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

## 사용법

```javascript
"scripts": {
    "postinstall": "lerna bootstrap",
    "publish": "lerna publish --skip-npm && git pull origin master && git push origin master"
  },
```
