# つくる手帖 ブロック崩し

スマホで動く、PWA対応の「つくる手帖」風ブロック崩しゲームです。

## ファイル構成

- `index.html` : ゲーム本体
- `manifest.webmanifest` : PWA設定
- `sw.js` : オフライン動作用サービスワーカー
- `icon-192.png` / `icon-512.png` / `icon-maskable-512.png` / `apple-touch-icon.png` : ホーム画面アイコン

## 使い方

このフォルダの中身を GitHub Pages の公開フォルダに置くと、そのまま動きます。

例：

```text
block-breaker/
  index.html
  manifest.webmanifest
  sw.js
  icon-192.png
  icon-512.png
  icon-maskable-512.png
  apple-touch-icon.png
```

## スマホ対応

- iPhone / iPad / Android のタッチ操作対応
- ページスクロール・ダブルタップ拡大を抑制
- 画面サイズに合わせて盤面を自動調整
- ホーム画面追加とオフライン起動に対応

## 更新時の注意

`sw.js` を変更した場合、キャッシュ名を上げてください。

```js
const CACHE = 'tt-block-breaker-v2';
```

古い画面が出る場合は、URL末尾に `?v=2` などを付けて確認してください。
