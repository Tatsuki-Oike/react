## node.jsのinstall

https://nodejs.org/en

## Reactの起動

### 初めてプロジェクトを作成する場合

```sh
cd ./06_style
npx create-react-app frontend
cd ./frontend
npm install styled-jsx
npm run eject
npm start
```

package.jsonに以下を追加

```json
{
    ...
    "babel": {
        "presets": [
            "react-app"
        ],
        "plugins": [
            "styled-jsx/babel"
        ]
    }
}
```

### 既存のプロジェクトのサーバーを起動する場合

```sh
cd ./06_style/frontend
npm install
npm start
```