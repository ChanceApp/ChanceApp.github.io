---
title: "JavaHomework"
description: 
date: 2024-07-26T19:05:16+08:00
image: 
math: 
license: 
hidden: false
comments: true
draft: 
tags : 
categories : java
---
### 相对路径

从当前目录开始定位，形成的一个路径

```
../ 上一级目录
```

### 绝对路径

从顶级目录开始定位，形成的路径

```
D:\abc2\text\hello.txt
```

### dos命令

####  dir(directory)

```
dir				查看当前目录内容
dir	D:\text     查看d盘text文件下内容
```

### cd(change directory)

```
cd /D c: 切换根目录c盘 ， /D表示启动
```

### tree

```
tree 			查看当前目录子文件子集内容
tree D:\text	查看d盘text文件下的子集目录
```

### cls

```
清除当前显示内容
```

### exit

```
退出dos
```

1. 编写一个hello,world程序[Homework01.java]

   ```java
   public class Homework01{
   	public static void main(String[]args){
           System.out.println("Hello world");
       }
   }
   ```

2. 将个人的基本信息（姓名、性别、籍贯、住址）打印到控制台上输出。各条信息分别占一行。[Homework02.java]

   ```java
   public class Homework02{
   	public static void main(String[]args){
           System.out.println("chance");
           System.out.println("woman");
           System.out.println("guangdong");
           System.out.println("bluemoon");
       }
   }
   ```

3. JDK , JRE , JVM的关系[ Homework03.java]

   ```
   JDK包含JRE +java开发工具
   JRE包含JVM +核心类库
   JDK是java开发工具包
   JRE是运行环境
   JVM是虚拟机
   ```

4. 环境变量path配置及其作用[Homework04.java]

   ```
   path主要是让dos系统能在任意目录直接找到我们的编译工具和运行工具。
   没有其实也可以，相当于多了一个快捷方式。
   首先要配置我们的JAVA_HOME也就是当前jDK版本，方便更改jdk版本
   path配置%JAVA_HOME%bin
   其实配置JDK下的bin目录工具，如java,javac,javadoc等
   ```

5. java编写步骤[Homework05.java]

   ```
   1.编写Java的源代码
   2.javac编译，得到对应的.class 字节码文件
   3.java运行，本质就是把.class 加载到JVM 运行
   ```

6. java编写7个规范

   ```
   1.类方法的注释，使用Javadoc的方法，即文档注释
   2.非javadoc注释，往往是对代码的一个说明（给程序维护者）
   3.使用tab,整体代码右移，使用shift+tab 整体左移
   4.运算符和 = 的两边，给空格，代码看上去清楚 int n = 1 + 4
   5.源码文件使用utf—8编码
   6.行宽的字符不要超过80
   7.代码编程风格有两种，次行风格，行尾风格。 
   ```

   

