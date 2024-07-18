---
title: "Java简介"
description: Java的历史和计算机知识
date: 2024-07-16T19:32:59+08:00
image: 
math: 
license: 
hidden: false
comments: true
draft: 
categories:
    - java
tag:
    -编程
---
## java简介

### 1.什么是程序

计算机执行某些操作或解决某个问题而编写的一系列**有序指令的集合**

个人理解就是：按照逻辑制作一个方法方案的步骤

### 2.Java诞生

1. 1990 sun公司 启动绿色计划
2. 1992 创建oak(像素)语言--java
3. 1994 gosling参加 硅谷大会 演示java功能，震惊世界
4. 1995 sun正式发布Java第一个版本
5. 2009年，甲骨文公司收购sun.2011,发布java7

### 3.Java分类

1. Java se(java Standard Edition)标准版 J2SE
   - 提供完整api,面向桌面级应用
2. Java EE(java Enterprise Edition)企业版 J2EE
   - 是为开发企应用程序用的。
3. JavaME(java Micro Edition)小型版 J2ME
   - 现在几乎没有再用了，诺基亚时代很火。

### 4.java特点（多敲代码才能理解的）

1. java语言是面向对象的
2. java语言的健壮的，Java的强类机制、异常处理、垃圾的自动手机等是Java程序健壮的重要保证
3. Java语言是跨平台的
4. Java语言是解释型的
   - 编译型语言编译好后机器可以直接执行
   - 解释型语言编译后的代码不能被机器执行，需要解释器来执行

### 5.Java运行机制

编写Test.java文件，编译成Test.class文件，通过JVM(java virtual machine)运行

(大白话：写一个我们能懂得文件，通过javac翻译成class文件，通过JVM运行class文件,因为系统存在差异所以需要一个javac来翻译，这样就能实现所有得机器只要安装了JVM都能运行)

1. JDK(java Development kit) java 开发工具包：包含JRE +java得开发工具[java,Javac,javadoc,javap等]
2. JRE(java Runtime Environment)java运行环境：包含JVM+java的核心类
3. JVM(java virtual machine)java虚拟机，主要运行代码，设备和代码的沟通交流。