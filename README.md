# Restaurant List
使用此應用程式可以記錄生活開銷，有五種類別分類，並可於首頁看到全部總金額或是挑選種類的總金額...

# 更新


# 功能
+ 首頁下拉式選單可以分類顯示
+ 首頁Create按鈕，可新增一筆開銷紀錄
+ 可在首頁中點選Edit進行資料修改
+ 可在首頁中點選Delete刪除資料
+ 必須註冊登入才行進行以上功能

## 相關安裝
1. 開啟terminal(終端機)，作業目錄下執行：
   ```
   git clone https://github.com/jofu1123/expense-tracker.git
   ```
2. 移動至目錄expense-tracker
   ```
   cd restaurant-list
   ```
3. 使用npm安裝相關套件
   ```
   npm install
   ```
4. 開啟本地MongoDB資料庫，並啟動伺服器
   ```
   ~/restaurant-list/models/seeds node user2restaurant.js
   ```
5. 輸入指令建立user和record種子資料
   ```
   npm run seeder
   ```
6. 輸入指令啟動本機伺服器
   ```
   npm run dev
   ```
   出現
   ```
   Express is listening on localhost:3000
   mongodb connected
   ```
   即成功，並移置 http://localhost:3000/users/login 登入種子資料，可使用種子資料帳號密碼進行登入操作
   ```
   Email:user1@example.com
   Password:12345678
   
   Email:user2@example.com
   Password:12345678
   ```
   
   
# 預覽畫面
### 首頁
![index](https://github.com/jofu1123/expense-tracker/blob/master/libs/pic/index.jpg)
### 編輯餐廳頁面
![edit](https://github.com/jofu1123/expense-tracker/blob/master/libs/pic/edit.jpg)
### 註冊頁面
![register](https://github.com/jofu1123/expense-tracker/blob/master/libs/pic/register.jpg)
### 登入頁面
![login](https://github.com/jofu1123/expense-tracker/blob/master/libs/pic/login.jpg)

# 使用工具
 + [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) -開發code環境
 + [Express](https://www.npmjs.com/package/express) -應用程式架構
 + [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) -使用模板引擎
 + [body-parser](https://www.npmjs.com/package/body-parser) -處理URLencoded格式的請求
 + [Mongoose](https://www.npmjs.com/package/mongoose) -MongoDB ODM
 + [method-override](https://www.npmjs.com/package/method-override) -處理PUT、DELETE動詞功能
 + [bcrypt-js](https://www.npmjs.com/package/bcrypt) -處理加密功能
 + [connect-flash](https://www.npmjs.com/package/connect-flash) - 暫存器
 + [dotenv](https://www.npmjs.com/package/dotenv) - 隱藏環境變數
 + [passport](https://www.npmjs.com/package/passport) - 驗證系統
