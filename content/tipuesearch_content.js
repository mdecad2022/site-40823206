var tipuesearch = {"pages": [{'title': 'About', 'text': 'site-40823206個人倉儲: site-40823206', 'tags': '', 'url': 'About.html'}, {'title': 'Week', 'text': '', 'tags': '', 'url': 'Week.html'}, {'title': 'w4', 'text': '(透過 sftp 建立近端目錄與 stud.cycu.org 帳號下的對應)\xa0 開啟另一個命令列, 執行 sftp\xa0 帳號@stud.cycu.org \xa0\xa0\xa0 輸入對應密碼, 即可建立近端目錄與遠端系統目錄間的對應. \xa0 \n \n (登入 stud.cycu.org)利用 @nfu 電子郵箱收到的帳號與密碼, 登入 stud.cycu.org:\xa0 在命令列視窗, 以 ssh\xa0 cad學號@stud.cycu.org , 輸入對應密後, 可以登入系統 \xa0 \n \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': '老師 透過 stud.cycu.org 執行動態網站NOTE: \n \n (登入 stud.cycu.org)利用 @nfu 電子郵箱收到的帳號與密碼, 登入 stud.cycu.org:\xa0 在命令列視窗, 以 ssh\xa0 cad學號@stud.cycu.org , 輸入對應密後, 可以登入系統 \xa0 \n 請到 excel 檔案\xa0 查詢 \xa0stud.cycu.org 中與帳號對應的近端 (給 127.0.0.1 使用) 與遠端 (給 stud.cycu.org) 埠號 \xa0 \n (透過 sftp 建立近端目錄與 stud.cycu.org 帳號下的對應)\xa0 開啟另一個命令列, 執行 sftp\xa0 帳號@stud.cycu.org \xa0\xa0\xa0 輸入對應密碼, 即可建立近端目錄與遠端系統目錄間的對應. \xa0 \n 與在近端(Windows)利用\xa0 SSH 建立 public/private keys 流程相同, 必須在 Linux (Ubuntu) 利用 ssh-keygen 建立 keys. 所產生的 id_rsa 為 private key, 而 id_rsa.pub 為 public key, 都位於 .ssh 目錄下. \xa0 \n 利用 sftp\xa0 進入 stud.cycu.org 後, cd 到 .ssh, 以 get id_rsa.pub 將 public key 取至\xa0 Windows 後, 送到 Github -> Settings -> SSH and GPG 設定區, 透過 new key 登錄公鑰. \xa0 \n 接下來要下載\xa0\xa0 config \xa0設定檔案,\xa0 以 sftp 放入 stud.cycu.org 主機的 .ssh 目錄中. \xa0 \n 上面的\xa0 config\xa0 主要設定 SSH 協定對\xa0 github.com\xa0 連線時的代理主機, 但取下\xa0 cmsimde\xa0 子模組使用的是\xa0 https,\xa0 因此執行下列\xa0 git clone 時將會同時用到\xa0\xa0 SSH\xa0 與 https\xa0 協定,\xa0 因此除了\xa0 .ssh\xa0 目錄下要有\xa0 config\xa0 設定檔案外, 也必須同時在\xa0 .gitconfig\xa0 檔案中設定\xa0 http.proxy,\xa0 也就是以 git config --global http.proxy\xa0 http://p42.cycu.org:3128 \xa0 設定供 https 連線使用的代理主機, 並且以\xa0 git config --global\xa0 user.name 以及\xa0 git config --global\xa0 user.email 設定提交用的身分註記. \xa0 \n 在 stud.cycu.org 中, 以 git clone --recurse-submodules\xa0\xa0 git@github.com:mdecad2022/site-個人github帳號.git \xa0\xa0 取下個人倉儲. \xa0 \n 假如先前使用\xa0 git clone 並沒有取下\xa0 cmsimde 子模組內容, 只要在設定 https 代理主機後, 進入倉儲根目錄執行\xa0 git submodule update --init\xa0 --recursive\xa0 即可取下子模組內容. \xa0 \n 接著下載\xa0 server.py , 在 Windows 編輯\xa0 server.py , 將個人分配到的 9xxxx 埠號填入後存檔, 以 sftp 放入上列取下的倉儲根目錄. \xa0 \n 在 stud.cycu.org 系統中, 進入倉儲 (site-github帳號) 後, 執行 python3 server.py, 就可啟用動態網站. \xa0 \n 設定完成後, 各學員將會有一個廣域網路上的動態網站 (取代 Replit 上的動態網站),\xa0 https://stud.cycu.org:8xxxx \xa0\xa0 看到個人的動態網站. \xa0 \n 動態網站改版後, 轉為靜態, 必須透過 source\xa0 acp \xa0以 SSH 將改版內容送回 github. (必須利用 chmod u+x acp 將 acp\xa0 檔案屬性改為對\xa0 user 可以 execute (也就是 x 屬性). \xa0 \n 執行 source acp\xa0 "提交字串" 之前必須要 git config\xa0 --global user.name,\xa0 git config\xa0 --global user.email,\xa0 git config\xa0 --global http.proxy \xa0 \n 上述採用指令模式對\xa0 server sftp 也可以利用\xa0\xa0 Filezilla portable , 以圖形介面完成. 而 ssh 也可以透過\xa0 putty.exe 執行遠端登入. \xa0 \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': 'Drill Press 零組件(Onshape) \n \n \n \n NX2027 \n \n \n \n onshape \n \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '', 'tags': '', 'url': 'w7.html'}, {'title': 'w8', 'text': '\n', 'tags': '', 'url': 'w8.html'}, {'title': 'w9', 'text': '期中考週 \n', 'tags': '', 'url': 'w9.html'}, {'title': 'w10', 'text': '校慶停課 \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': '\n [11/16 下午7:51]  嚴家銘 \n 建立 TCExam 題庫 \n \n \n \n \n \n \n 各分組如何建立 TCExam 線上考試系統的題庫? \n \n 啟動可攜 Python 程式系統後, 在命令列中輸入 leo, 開啟 Leo Editor. \n 下載  tcexam_network_setting_cadlab.leo , 以 Leo Editor 開啟. \n 了解如何使用 Leo Editor. \n 各組組員根據下列規劃出題: \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w12', 'text': '\n \n 延伸 w10 2b HW \n \n \n \n \n 延伸  w10 2b HW  題目: \n \n 如何直接讓使用者利用瀏覽器接受  w10 2b 考試結果 JSON 檔案 上傳, 然後直接列出考試結果, 缺考名單與該次考試的平均分數? \n 當各組利用 NX2027 完成  w6 鑽床零件繪圖作業 後, 能否讓使用者利用瀏覽器輸入可客製化零件的關鍵尺寸後, 直接取得零件檔案? \n 已知從  https://github.com/solvespace/solvespace  可以取得  Solvespace 3.1 套件 的原始碼, 請問我們可以自行從原始碼編譯後, 取得可以執行的 solvespace.exe 嗎? 請問在何種情況下, 需要自行編譯參數式電腦輔助設計與繪圖套件? \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '', 'tags': '', 'url': 'w13.html'}, {'title': 'w15', 'text': 'Solvespace \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'w14', 'text': '', 'tags': '', 'url': 'w14.html'}, {'title': 'Onshape', 'text': '\n \n \n \n', 'tags': '', 'url': 'Onshape.html'}, {'title': 'Solvespace', 'text': '\n \n \n \n \n \n', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'w16', 'text': '', 'tags': '', 'url': 'w16.html'}]};