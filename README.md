# TestUIAutomation-Codeceptjs

#### 项目介绍
成都陶娟娟
使用 Codeceptjs 来实现基本的自动化测试功能，用作demo展示。

#### 软件架构
基础层 - Common:
common.js （公用的方法）
config.js （公共配置项）

第三方库 - libs

测试输出 - output:
report （存放测试结果和截图）
log （以后可以放生成的日志文件）

页面信息 - pages

文件资源 - resource

测试文件 - tests/cases （以_test.js结尾）

框架配置文件 - codecept.json/steps_file.js


#### 安装教程
1.下载并安装nodejs
2.在home文件夹下执行：npm install
3.下载并安装allure报告插件：https://docs.qameta.io/allure/#_installing_a_commandline


#### 使用说明
1.在tests目录下添加测试文件（如果直接看效果，这步可忽略）

2.执行脚本命令：
npm run start
npm run report

3.生成测试报告
cd到output/report文件夹下
执行：allure generate . -o ./html --clean


Run in Docker...


注：针对用例Import Org By Excel，我先注释了最后一步'确认导入'，因为目前这里功能有点问题，每次执行，可以插入相同编号的组织机构，插入之后就删不掉了，
都需要先手动删除之前插入的数据，或者改resource/ou.xls文件里的组织编号
