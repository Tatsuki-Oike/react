## node.jsのinstall

https://nodejs.org/en

## Reactの起動

### 初めてプロジェクトを作成する場合

```sh
cd ./09_todo
npx create-react-app frontend --template typescript
cd ./frontend
npm install react-query
npm install recoil
npm start
```

### 既存のプロジェクトのサーバーを起動する場合

```sh
cd ./09_todo/frontend
npm install
npm start
```