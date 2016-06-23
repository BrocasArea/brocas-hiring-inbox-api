# Brocas

應徵方式：請把履歷的 **連結** 用下面這個 API 傳給我們。

###### 位址

- POST
- https://qzqmgdxcm5.execute-api.ap-northeast-1.amazonaws.com/dev/inboxapi


###### 請求格式

```json
{
  "job": "掃地清潔工",
  "name": "Brocas小幫手",
  "phone": "0912345678",
  "email": "hr@brocas.com.tw",
  "resume": "brocas.com.tw"
}
```

###### Tips 

- 五個欄位都是 `String`
- 亂搞 API 的話會導致我們收不到你的履歷 XD
