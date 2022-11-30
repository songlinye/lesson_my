- git init

- git add readme.md  多次添加到暂存区                    (尽量不要用 . )

- git commit -m 'reason'   一次性提交

- git log --oneline  提交记录                       （git log 显示全部版本的全部信息      git log --oneline 好像只显示 HashID         如果多了可能需要按 q 返回）

- git reset --hard HEAD^ / HEAD^^ / xxxxxxx(版本号/HashId前七位)     月光宝盒

- git status   当前仓库状态

- git pull origin master     从远程仓库拉下来

- git push origin master     提交到远程仓库