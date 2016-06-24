# Brocas

應徵方式：請把履歷的 **連結** 用下面這個 API 傳給我們。

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
