---
prev:
  text: '将 MissRose 连接到私聊'
  link: '/robots/missrose/connect'
next:
  text: '欢迎欢送与入群验证'
  link: '/robots/missrose/greeting-farewelling-group-verification'
---
# 清理功能

## 清理 Telegram 系统消息

当新用户加入群组时、成员推出群组时、置顶消息时等等，Telegram 会产生系统消息。

![Missrose](../photo/bot-1-3-1.webp)

我们并不希望群组里出现这种影响美观的消息，这时候可以使用 MissRose 删除这些消息。

发送命令`/cleanservice on`，这样可以删除所有的 Telegram 系统消息。

发送命令`/cleanservice off`，MissRose 就不会再删除 Telegram 系统消息了。

如果只想删除部分系统消息（类如只删除进入群组消息，不删除置顶消息），那么发送`/cleanservice 你想删除的消息类型`即可。

|消息类型|描述|
|----|----|
|all|所有服务消息（与`on`相同）|
|join|当新用户加入或被添加时。例如：“X加入了聊天”|
|leave|当用户离开或被移除时。例如：“X离开了聊天群”|
|other|杂项；例如Telegram支付成功、接近警报、网页应用消息或消息自动删除|
|photo|当群组头像改变时|
|pin|当新消息被置顶时。例如：“X 置顶了一条消息”|
|title|当群组名称变更时|
|videochat|当视频聊天作发生时——例如开始、结束、安排或添加成员|

发送命令`/cleanservicetypes`也可以获得上表。

MissRose 还有两个清理功能，具体的可以去文档看，这里不会去讲。~~（因为一个用不到，一个要花钱）~~

下面我们来讲一讲欢迎欢送与入群验证。
