# 布洛卡斯（Brocas）需要你！

![Banner](https://github.com/BrocasArea/brocas-hiring-inbox-api/raw/master/hire-banner.png)

我們布洛卡斯（Brocas）是專業的地城守護者，專門幫各類客戶導入以最新的資訊科技及策略，抵擋邪惡人類的入侵，然後征服世界！打造設計 App、前後端等武器是我們的專長，整合軟硬體系統並研發技術是我們的強項。現在，我們需要許多新的夥伴，快來加入我們吧！

# 注意！投履歷前請審慎思考！
「怪」是我們的朋友，人類勇者是我們的最大敵人，由於一些不可告人的「癖好」，我們團隊特別愛挑戰「怪奇」的專案和技術，因此常接觸到各類種怪異的專案、挑戰奇怪的技術。甚至是跳脫出傳統接案的框架，與客戶或新創公司共同思考發展各類策略和商業模式。更幸運的是，我們的客戶也總不負我們的期待，總喜歡想奇怪的點子和出奇怪的問題挑戰我們。

投履歷前請慎重思考，我們不是間傳統的接案公司，所以請確定自己喜歡接受非傳統接案的挑戰、喜歡挑戰不一樣的新系統架構和技術，或是喜歡跳出框架的與客戶暢所欲言。

如果你也覺得癖味相投，想加入我們的怪物團隊！歡迎來投我們的履歷！無論你是 Junior、Senior 還是魔級物種！

我們一起讓人類獻上他們的靈魂吧！

# 應徵方式！

請展現你任何的技能或黑魔法！把履歷的 **連結** 用下面這個 API 傳給我們。

###### 位址

- POST
- https://qzqmgdxcm5.execute-api.ap-northeast-1.amazonaws.com/dev/inboxapi


###### 請求格式 application/json

```json 
{
  "job": "掃地清潔工",
  "name": "Brocas小幫手",
  "phone": "(02)2648-8096",
  "email": "hr@brocas.com.tw",
  "resume": "http://brocas.com.tw"
}
```

###### Tips 

- 五個欄位都是 `String`
- 亂搞 API 的話會導致我們收不到你的履歷 XD
- 履歷請轉成 PDF，上傳到網路任何地方，給我們可以看得到的連結就好
- 看到 `ok, it works` 才算成功喔！
- 歡迎送 PR，有很多功能我懶得做了 XDDDD
- 因為大家都亂洗版，所以加上了紀錄 IP 的功能，如果抓不到會忍痛放棄這筆資料 (￣口￣)!!



