# dk-module

- dkt 의 공통모듈을 관리하는 프로젝트 ( 현재는 알파 버젼의 환경설정이다. )
- monorepo 구성을 통해 dk 에서 사용하는 모듈들을 한 레포에서 관리하자. 자세한 monorepo 에 관한건 아래 참조.
- packages 안의 각각의 폴더를 하나의 모듈로 본다.
- 필요시엔 서로 폴더끼리의 dependence 를 걸 수 있다.

# Install & Usage

- Requires node `6.14.0 || ^8.10.0 || >=9.10.0`
- Requires `yarn >=0.27`
- Requires `lerna global install`

```sh
$ yarn global add lerna
```

- yarn allinstall 명령어로 packages 안에 있는 여러 모듈들에 대한 yarn install 진행

```sh
$ yarn allinstall
# 각 packges 폴더 안에 있는 모듈들의 yarn install로 돌려준다.
```

- 해당 모듈폴더로 이동해서 해당 모듈 md 를 참조한다.

- 각 패키지 안에 있는 npm script 를 한번에 run 시켜줄수도 있다.

```sh
$ lerna run [script]
```

# 프로젝트 구성

## monorepo

- monorepo 구성으로 여러 npm 모듈들을 한꺼번에 관리한다.
- monorepo 사용으론 lerna 와 yarn workspace 를 함께 사용한다.
- monorepo 구성으로 모듈들의 코드 일관성을 유지.
- 쉽게는 packages 폴더 안 폴더 하나하나가 npm 모듈들이라고 생각하고 각자의 레퍼지토리가 따로 있었다고 생각하면 된다. 그것을 한 repo 로 관리하는것이 monorepo
- 이점으로 모듈들의 버전관리 및 코드 일관성을 유지 시킬 수 있다. ( ex. eslint 를 전역으로 설정해 놓으면 이 안에 있는 코드들은 같은 코드 일관성을 유지 할 수 있다.)
- 단점으로 한 repo 의 무게가 무거워 질 수 있다.
- 각 패키지의 package.json 에서 devDependencies 는 필요없다.
- 루트 디렉토리의 package.json 에선 dependencies 와 version 이 필요 없다.
