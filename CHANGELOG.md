## 3.22.0 (2022-02-18)
- [A] 升级微信 SDK 获取手机号方法

## 3.21.5 (2022-02-14)
- [A] 请求错误时添加 fail 信息打印

## 3.21.4 (2021-11-18)
- [F] 修复 百度 SDK 静默登录失败错误

## 3.21.3 (2021-11-03)
- [F] 修复 ts wxExtend、updateUserInfo、updatePhoneNumber 方法没对应类型检测问题

## 3.21.2 (2021-11-02)
- [F] 修复指定 host 不生效的问题

## 3.21.1 (2021-08-27)
- [A] 升级微信内容检测接口

## 3.21.0 (2021-06-25)
- [A] 支持上传文件指定存储路径

## 3.20.0 (2021-04-22)
- [A] 微信小程序支持创建私密消息
- [M] 修改百度小程序关联百度的部分，废弃 getUserInfo
- [F] 修复因快手请求失败时没有返回相关状态码导致不能自动登录的问题
- [M] 升级微信用户信息更新接口

## 3.19.1 (2021-04-09)
- [A] 添加快手小程序 SDK 支持

## 3.18.0 (2021-04-06)
- [A] 添加微信登录接口调整 getUserProfile 支持

## 3.17.1 (2021-04-01)
- [F] 修复支付宝小程序实时数据库出错问题

## 3.17.0 (2021-03-12)
- [A] 微信小程序支持获取用户安全等级

## 3.16.0 (2021-02-05)
- [A] 微信小程序加密手机号登录
- [A] 支持微信小程序加密后的手机号进行用户资料（手机号）更新

## 3.15.2 (2021-01-06)
- [M] 实时数据库 WebSocket 用户未登录时不再主动重连

## 3.15.1 (2020-12-18)
- [A] 升级用户和数据表接口

## 3.15.0 (2020-11-06)
- [A] Array 类型数据支持 pop 和 shift
- [F] 修复微信小程序文件上传调用 onProgressUpdate 出错的问题

## 3.14.8 (2020-10-27)
- [F] 修复支付宝小程序调用云函数出错问题

## 3.14.7 (2020-10-21)
- [F] 敏感图片检测请求头修复

## 3.14.6 (2020-10-16)
- [F] 修复更新数据项时传入空字符串触发批量更新的问题

## 3.14.5 (2020-09-30)
- [A] 添加记录保存 save 和 更新 update 方法支持传入 expand 展开字段

## 3.14.4 (2020-09-18)
- [F] 修复更新单记录 enableTrigger 选项无效的问题

## 3.14.3 (2020-08-31)
- [A] 支持 QQ 订阅消息

## 3.14.2 (2020-08-14)
- [M] 修复小程序插件版不能使用实时数据库的问题

## 3.14.1 (2020-08-04)
- [M] 修复重复登录代码报错的问题

## 3.14.0-beta.2 (2020-07-20)
- [A] 支持基于 WebSocket 的表订阅功能

## 3.13.0-beta.10 (2020-07-10)
- [M] JSSDK Web 支持第三方静默登录

## 3.13.0-beta.9 (2020-06-22)
- [M] 优化静默登录和强制登录接口调用

## 3.13.0-beta.7 (2020-06-05)
- [M] 支持修改用户内置字段

## 3.13.0-beta.5 (2020-06-05)
- [F] 修复百度 SDK storage bug。
- [A] 添加支付宝文本内容安全检测接口。
- [A] 添加京东小程序 SDK。

## 3.13.0-beta.4 (2020-06-02)
- [A] JSSDK Web 支持获取微信 JSSDK 调用凭证

## 3.13.0-beta.2 (2020-05-29)
- [F] 修复 android 编译报错的问题。

## 3.13.0-beta.0 (2020-05-28)
- [A] 支持 react native。
- [A] 添加异步 storage 接口。
- [M] sdk 内部改为依赖异步 storage。

## 3.12.0 (2020-04-24)
- [A] 支持获取字节跳动小程序码。

## 3.11.0 (2020-04-20)
- [A] 支持字节跳动小程序支付。

## 3.10.0 (2020-04-17)
- [A] 支持上报字节跳动小程序 formId。

## 3.9.1 (2020-04-08)
- [M] 兼容百度小程序开发者工具与真机上传文件成功后的不同返回内容。

## 3.9.0 (2020-03-27)
- [A] 支持字节跳动小程序

## 3.8.0 (2020-03-13)
- [A] 微信小程序支持 unionid 登录

## 3.7.0 (2020-03-09)
- [M] wxacode 接口接口返回文件对象

## 3.6.0 (2020-01-06)
- [M] pointer 字段展开后，改为使用 select 指定返回的属性

## 3.5.0 (2019-12-26)
- [M] pointer 字段展开，支持指定返回的属性

## 3.4.0 (2019-12-13)
- [A] 支持环境切换

## 3.3.0 (2019-12-05)
- [A] QQ SDK qq.setStorageSync、qq.getStorageSync 接口增加重试机制
- [M] 升级 user/account 接口
- [F] 修复自动登录并重发请求后，获取不到请求结果的 bug

## 3.2.0 (2019-11-28)
- [A] 添加获取服务器时间接口
- [M] 支持设置 account 信息为 null
- [F] 修复 syncUserProfile 参数类型注释错误的 bug

## 3.1.0 (2019-11-07)
- [A] 添加内容库查询接口
- [M] 优化请求重发机制
- [F] 修复微信网页登录 popup-iframe 模式 iframe 设置无效的 bug

## 3.0.0 (2019-10-31)
- [A] 支持 TypeScript 与自动补全
- [A] 支持设置自定义域名
- [A] 支持设置 withCount 来提高接口对大量数据查询与批量操作的响应速度

## 2.9.0 (2019-10-17)
- [A] 微信小程序 SDK 支持上报订阅消息订阅关系
- [A] QQ 小程序 SDK 添加内容安全检测接口
- [A] 百度小程序 SDK 支持百度模版消息 formId 上报
- [M] 数据表批量操作，enableTrigger 为 false 时，移除默认的 limit
- [F] 修复 web 端微信 JSAPI 支付在获取支付配置出错时，依然发起支付的 bug
- [F] 修复 web 端上传文件成功后，返回值与其他平台不一致的 bug

## 2.8.1 (2019-9-29)
- [F] 兼容处理百度 iOS 支付成功返回 string 类型(bug)

## 2.8.0 (2019-9-27)
- [F] web SDK 第三方授权接口 createUser 参数默认为 true
- [A] 百度小程序 SDK 支持百度支付
- [A] 微信小程序 SDK 支持微信图片/音频异步检查

## 2.7.0 (2019-9-20)
- [A] 微信支付接口支持设置订单是否可以分账

## 2.6.0 (2019-9-10)
- [A] 发送短信验证码时，支持指定短信签名

## 2.5.0 (2019-9-3)
- [A] 支持百度小程序

## 2.4.0 (2019-8-21)
- [A] QQ SDK 支持 QQ 小程序支付
- [A] web 端支持 QQ 扫码支付
- [A] QQ SDK 支持解密 QQ 返回的加密信息

## 2.3.0 (2019-7-19)
- [A] 支持手机号登录
- [A] web 端支持微信 JSAPI 支付

## 2.2.1 (2019-7-4)
- [A] QQ 小程序支持上报消息卡片点击事件

## 2.2.0 (2019-6-27)
- [A] 支持 QQ 小程序
- [A] web 端支持微信支付、支付宝支付
- [M] 升级 file 相关接口至 v2.1

## 2.1.0 (2019-6-14)
- [A] web 端支持第三方登录

## 2.0.9 (2019-5-10)
- [F] 修复 wechat 重复发起 silent_login 调用的问题
- [F] 修复 wechat 强制登录时，获取到的用户信息语言错误的问题
- [A] wechat 强制登录接口支持自动获取 code，实现一步登录

## 2.0.8-a (2019-4-18)
- [A] ticket-report 接口增加频次限制（wechat、alipay）
- [M] 内容库、内容分类 api 版本升级至 2.0

## 2.0.7-a (2019-4-12)
- [A] 支持设置是否在强制登录更新第一层级用户信息（wechat、alipay）
- [F] wechat 端修复强制登录时，后端 session_key 过期引起的 401 问题
- [F] web 端兼容 IE

## 2.0.6-a (2019-4-08)
- [A] 支持模板消息卡片点击上报

## 2.0.5-a (2019-3-21)
- [A] 支持 log level 设置

## 2.0.4-a (2019-3-15)
- [A] 支持获取支付小程序二维码
- [A] 支持上报支付宝 formId

## 2.0.3-b (2019-3-13)
- [A] 支持匿名登录

## 1.16.0 (2019-1-25)
- [A] 新增又拍云视频处理 API

## 1.15.0 (2019-1-8)
- [F] 优化 baasRequest 对于错误的处理

## 1.14.0 (2019-1-4)
- [A] 新增 invoke API

## 1.13.1 (2018-12-27)
- [M] 升级 SDK FlexRecord API 到 v1.9

## 1.13.0 (2018-12-17)
- [M] API 域名迁移到 myminapp.com

## 1.12.0 (2018-12-10)
- [A] 新增 unset 方法提供清空字段值的支持

## 1.11.1 (2018-12-06)
- [A] 用户和内容库支持 select & expand 操作

## 1.11.0 (2018-12-06)
- [A] SDK request 增加 token 过期管理
- [M] 登录接口新增 session_expires_at 字段

## 1.10.2 (2018-11-27)
- [M] 数据表 array 字段操作（set、append、uAppend、remove）支持 geojson 子类型

## 1.10.1 (2018-11-22)
- [F] 增加 Array.prototype.includes polyfill

## 1.10.0 (2018-11-15)
- [A] 新增错误上报功能
- [A] 新增对 Pointer 字段类型的支持

## 1.9.1 (2018-11-01)
- [A] 文件查询支持 created_at
- [A] 数据表批量操作支持不触发触发器

## 1.9.0 (2018-10-18)
- [A] wx.BaaS.pay() 成功回调对象增加 `trade_no` 字段
- [A] 新增 Order 类，支持更多查询参数

## 1.8.1 (2018-9-26)
- [F] 修复状态码判断过于严格的问题

## 1.8.0 (2018-9-21)
- [A] 增加短信验证码 API
- [A] 文件上传支持 uploadTask


## 1.7.0 (2018-08-23)
- [A] 数据表查询增加 count 方法
- [A] 增加检测违规图片、文本 API
- [A] 内容库、用户查询支持 select 操作
- [F] 修复 Promise 中 reject 没有 return 导致的报错


## 1.6.0 (2018-08-14)
- [A] 增加对 object 字段类型的查询和更新支持

## 1.5.0 (2018-07-03)
- [A] 请求区分使用的是 SDK 还是 SDK 微信小程序插件
- [A] 生成小程序码支持 is_hyaline 选项
- [C] 微信支付取消授权检查

## 1.4.0 (2018-05-11)
- [A] 增加请求用户授权获取用户信息接口 handleUserInfo
- [A] 数据表支持批量创建、更新、删除数据操作

## 1.3.0 (2018-04-12)
- [A] 增加触发知晓云云函数接口 invokeFunction
- [A] 数据表支持字段过滤返回 select 操作
- [A] 数据表支持 expand 查询操作，获取 created_by 用户信息
- [A] 获取二维码接口 getWXACode 支持将二维码上传 CDN
- [F] 修复在同一个 TableObject （或 User, ContentGroup, File）实例上设置 limit 和 offset 后进行 find 操作，在进行下一次 find 操作时，之前设置的 limit 和 offset 未被清除问题

## 1.2.1 (2018-03-19)
- [F] 修复数据表字段名为 categoryID 和 categoryName 时，调用查询和创建 record 时出现异常问题

## 1.2.0 (2018-03-09)
- [A] 数据表操作支持根据数据表名进行表操作
- [A] 增加获取小程序码接口 wx.BaaS.getWXACode
- [C] 替换接口请求域名 sso.ifanr.com 为 ${clientID}.xiaoapp.io
- [C] 请求 wx.BaaS.login 成功后返回的用户 id 由 String 类型改为 Number 类型
- [C] wx.BaaS.logout 接口去掉是否已登录检查
- [F] 修复 Array.prototype.includes() 不兼容 ios8 问题

## 1.1.6 (2018-02-04)
- [F] 用户拒绝授权后，返回用户信息而不是 Error 对象

## 1.1.5 (2018-01-31)
- [F] 修复新用户进行授权后，unionid 不重新进行本地存储问题
- [F] 修复用户拒绝授权后不触发错误回调问题

## 1.1.4 (2018-01-11)
- [C] 优化全局错误返回信息

## 1.1.3 (2018-01-02)
- [A] 添加多个用户操作接口
- [A] 添加多个内容库操作接口

## 1.1.2 (2017-12-21)
- [A] 添加多个文件操作接口
- [A] 添加多个文件分类操作接口

## 1.1.1 (2017-10-13)
- [A] 支持 matches、exists、notExists 和 arrayContains 等查询方法
- [A] schema 支持文件类型
- [F] 调用微信支付前检查是否完成授权

## 1.1.0（2017-09-13）
- [A] 支持像操作对象一样对 schema 进行增删改查
- [A] 支持添加地理数据和多种地理位置查询
- [A] schema 支持日期类型
- [A] schema 支持与或等组合条件查询
- [A] 支持微信模版消息上报 formid
- [A] 支持静默登录
- [A] 支持对微信加密数据进行解密
- [C] 文件上传改为上传到又拍云

## 1.0.11 ( 2017-08-23 )
- [F] 修复传入参数到操作数据表的方法中，在操作成功后，参数被重写的 bug

## 1.0.10 ( 2017-08-10 )
- [F] 修复在传入参数时可能产生多余的 query string 的 bug

## 1.0.9 ( 2017-08-08 )
- [F] 修复 wx.BaaS.pay 调用失败问题
- [F] 修复内容库接口用户自定义参数无法被转为服务端所需参数的 bug

## 1.0.8 ( 2017-07-20 )
- [F] 修复 wx.BaaS.getUserInfo 传递 userID 参数 400 的 bug

## 1.0.5 ( 2017-06-02 )
- [C] 升级 RECORD_LIST，RECORD_DETAIL，CREATE_RECORD，UPDATE_RECORD 以及 DELETE_RECORD 接口到 v1.1 版本

## 1.0.4 ( 2017-05-22 )
- [F] 修复 baasRequest 参数顺序导致的 bug

## 1.0.3 ( 2017-05-12 )
- [A] 新增微信支付接口、支付交易详情查询接口以及文件上传接口

## 1.0.2 ( 2017-03-15 )
- [C] 优化 SDK 验证授权逻辑，避免重复验证授权

## 1.0.1 ( 2017-03-09 )
- [C] 修改 SDK 验证授权逻辑

## 1.0.0 ( 2017-03-01 )
- 发布正式版

## 0.0.1 ( 2017-02-14 )
- 发布体验版
