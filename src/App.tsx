import React from "react";
import "./App.css";
import Picture from "./Picture";

function App() {
  const pictures = [
    {
      title: "白い帽子",
      url: "../img/img0.jpg",
      comment:
        "大学時代に描いた水彩画です。当時このキャップを愛用していました。",
    },
    {
      title: "河川敷の公園",
      url: "./img/img1.jpg",
      comment:
        "この写真は広瀬川の河川敷にある公園です。仙台勤務時代、住んでいた社宅近くに広瀬川が流れていました。その河川敷にある遊歩道をよく散歩をしていました。",
    },
    {
      title: "白い樹",
      url: "./img/img2.jpg",
      comment:
        "広瀬川対岸に印象的な樹木がありました。おそらく桐の木と思われます。冬になるとすっかり葉を落とし枯れ木の幹は異様なほど白く輝きます。お気に入りの1枚です。",
    },
    {
      title: "諧謔",
      url: "./img/img3.jpg",
      comment:
        "札幌勤務時代に撮影のためによく小樽運河を訪れました。岸壁近くで見つけた荷出し作業用のパレットです。",
    },
    {
      title: "小樽港近く",
      url: "./img/img4.jpg",
      comment:
        "同じく倉庫の横に転がっていた錆びたドラム缶と廃材。役目を終えたオブジェはいつしかアート作品に変容します。",
    },
    {
      title: "廃線跡",
      url: "./img/img5.jpg",
      comment:
        "小樽駅から小樽運河まではなだらかな下り坂になっています。運河に行く途中、廃線となった線路が道を横切っています。",
    },
    {
      title: "ポプラ並木",
      url: "./img/img6.jpg",
      comment:
        "北大のキャンパス内にあるポプラ並木（当時）を撮影したものです。農学部の広大な農園の中にある美しいポプラ並木でしたが、その後、風災害で倒木し無くなってしまったそうです。残念。",
    },
    {
      title: "タイプライター",
      url: "./img/img7.jpg",
      comment:
        "当時参加していた撮影会で撮った１枚です。撮影仲間からは評判が良かった作品です。自分でもとても気に入っています。",
    },
    {
      title: "水面",
      url: "./img/img8.jpg",
      comment: "仙台の広瀬川で撮影しました。夜だったような気がします。",
    },
    {
      title: "跨線橋",
      url: "./img/img9.jpg",
      comment:
        "渋谷の旧宮下公園に隣接する跨線橋（ガード）です。公園側から反対にある西武デパートの方を撮影しました。渋谷駅前の再開発で今はこの跨線橋はありません。",
    },
  ];
  return (
    <div className="App">
      <h1>utti-tom-world</h1>
      <Picture pictures={pictures} />
    </div>
  );
}

export default App;
