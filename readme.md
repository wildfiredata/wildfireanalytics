# 项目简介

​	野火数据分析社区版本致力于为广大开发者提供免费的分析工具。该版本囊括了全面的模型分析功能,包括事件分析、漏斗分析、LTV分析、留存分析、分布分析、间隔分析、路径分析和属性分析等。除了强大的分析模型,它还支持用户分群、用户标签和用户详情查询等个性化功能。用户可以借助报表概览和组合报表功能,轻松掌握核心分析数据,深入洞察用户行为和营销表现。该版本的完善功能和免费特性,将为开发者们带来极大的分析支持和价值体验。


**报表概览**

![报表概览](https://v.png.pub/imgs/2024/04/02/d7fa6e810e99e820.png)


# 项目部署

## 1 环境配置
- 硬件配置推荐：内存16GB以上，固态硬盘1TB以上
- 操作系统：Linux
- 系统添加网络对时功能
- 安装docker和docker-compose

## 2 下载部署资源

下载需要部署的制品

``` shell
git clone https://github.com/wildfiredata/wildfireanalytics.git
```
文件夹各文件内容说明：

  server文件夹

  - envs文件： 包含所有商品分配表、数据路径等配置
  - app.sh文件： 应用业务逻辑服务启停脚本，可以全部启停，也可以指定服务启停
  - data.sh文件： 数据服务启停脚本，可以全部启停，也可以指定服务启停
  - deploy.sh文件： 部署辅助脚本，可以拉取最新镜像和初始系统数据
    - > 可以在deploy.sh中倒数第二行中，指定自定义的超级用户super的密码


  web文件夹
   - html文件： 包含需要部署资源
      - html/static/config.js: 服务API配置文件
   - nginx.config文件:  nginx部署参考配置


## 3 服务器部署

``` shell
cd server
chmod +x *.sh
./deploy.sh pull
./deploy.sh install
./app.sh up
```

服务器初始化成功提示如下：

  ![resultok](https://v.png.pub/imgs/2024/04/02/e9ea766e6d6c79fa.png)


## 4 web部署

   - 在html/static/config.js中修改服务API地址。根据服务器具体部署情况，替换{APIGATE_HTTP_ENDPOINT}为APIGATE服务HTTP地址; 替换{TRACKGATE_HTTP_ENDPOINT}TRACKGATE服务HTTP地址; 并
```
var addrConfig = {
    WSS_WATCH_URL: "{TRACKGATE_HTTP_ENDPOINT}/api/trackgate/ws/watch", // TRACKGATE HTTP (sdk上报数据服务器API地址); 建议使用wss
    BASE_API_URL: "{APIGATE_HTTP_ENDPOINT}", // APIGATE HTTP (分析网站服务器API地址); 建议使用https
}
```
  - 修改nginx.config
```
server_name  192.168.3.25;              # 修改WEB服务地址
root         /usr/share/nginx/html;     # 修改web资源路径
```
  - 复制下载的资源 web/html到nginx.config中配置root所指路径下
  - 启动nginx
```
  systemctl start nginx
```
 
  至配置完成，可以通过web服务地址进行访问；登录账号super密码super(可以在deploy.sh中最后第二行，指定自定义的密码)

## 5 测试上传数据
上传数据测试如下。正式接入数据和SDK接入文档，点击查看[接入指南](https://www.galaxyok.cn/wf/Help)了解详情。

```
curl  -X POST "http://localhost:8390/sync_json" --data '{"#app_id":"app001","data":{"#account_id":"test_account_1","#distinct_id":"11112223334444xxx","#type":"track","#event_name":"hello","#event_time":"2022-12-26 22:34:11","properties":{"#os":"ios","phone":"apple"}}}'
```
上传成功后，返回
```
{"code":0,"msg":"ok"}
```

## 6 支持与反馈

  微信：
  ![我的微信](https://v.png.pub/imgs/2024/03/23/16804076e94cb81b.png)



## 7 分析截图


!<img src=https://v.png.pub/imgs/2024/03/22/2c04fe1fc3cad56a.png width=48%/>
!<img src=https://v.png.pub/imgs/2024/03/22/442c781f407b0390.png width=48%/>
!<img src=https://v.png.pub/imgs/2024/03/22/4216c207e2825ecd.png width=48%/>
!<img src=https://v.png.pub/imgs/2024/03/22/94ec50d646fc6be1.png width=48%/>
!<img src=https://v.png.pub/imgs/2024/03/22/84b977ece791f3f9.png width=48%/>
!<img src=https://v.png.pub/imgs/2024/03/22/340b3af321bc99d3.png width=48%/>
!<img src=https://v.png.pub/imgs/2024/03/22/839b13a9bc84d644.png width=48%/>
!<img src=https://v.png.pub/imgs/2024/03/22/dbc59e18fce4897a.png width=48%/>
