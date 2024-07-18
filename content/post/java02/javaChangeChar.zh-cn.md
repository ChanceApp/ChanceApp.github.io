---
title: "Java转义字符"
description: 
date: 2024-07-17T16:15:00+08:00
image: 
math: 
license: 
hidden: false
comments: true
draft: 
categories:
    - java
tags:
    - 编程
---
## Java转义字符

```java
//演义转义字符的使用
public class ChangeChar{
	public static void main(String[] args){
// 在控制台，输入 tab 键，可以实现命令补全
// \t ：一个制表位，实现对齐的功能
		System.out.println("北京\t上海\t天津");

// \n ：换行符
		System.out.println("jack\nsmith\nmary");

// \\ ：一个\
		System.out.println("C:\\Windows\\System32\\cmd.exe");

// \" :一个"
		System.out.println("老韩说:\"好好学习java,有前途\"");

// \' ：一个' \r :一个回车 System.out.println("韩顺平教育\r 北京");
		System.out.println("韩顺平教育\r 北京");

		System.out.println("书名\t 作者 \t 价格 \t 销量 \n三国\t 罗贯中\t 120\t 1000");

	}
}
```

