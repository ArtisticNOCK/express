var express = require("express"); // Expressモジュールを読み込み
var router = express.Router(); // 新しいルーターオブジェクトを作成

// レスポンスとして返すダミーのデータ（ノート全件）を定義
const responseObjectDataAll = {
  textObject1: {
    id: 1,
    title: "ノート１のタイトルです",
    subTitle: "ノート１のサブタイトルです",
    bodyText: "ノート１の本文です",
  },
  textObject2: {
    id: 2,
    title: "ノート２のタイトルです",
    subTitle: "ノート２のサブタイトルです",
    bodyText: "ノート２の本文です",
  },
};

/**
 * メモを全件取得するAPI
 * GET /notes リクエストに対応
 */
router.get("/", function (req, res, next) {
  // 定義したデータをJSON形式でクライアントに返す
  res.json(responseObjectDataAll);
});

module.exports = router; // 定義したルーターをエクスポート（他のファイルから使えるようにする）
