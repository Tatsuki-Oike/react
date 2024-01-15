## node.jsのinstall

https://nodejs.org/en

## Reactの起動

### 初めてプロジェクトを作成する場合

```sh
cd ./03_form
npx create-react-app form-proj
cd ./form-proj
npm install react-hook-form
npm install @hookform/resolvers yup
npm start
```

### 既存のプロジェクトのサーバーを起動する場合

```sh
cd ./03_form/form-proj
npm install
npm start
```