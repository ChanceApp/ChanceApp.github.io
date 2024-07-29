---
title: "JavaVar"
description: 
date: 2024-07-29T23:17:11+08:00
image: 
math: 
license: 
hidden: false
comments: true
draft: 
tags : 
categories : 
---
## 变量

- 变量是程序的基本组成单位
- 变量三要素（类型 + 名称 + 值）
- 变量使用步骤
  - 声明变量int a;
  - 赋值a = 6 ;
  - 使用System.out.println(a);

```java
public class Var01{
	public static void main(String[] args){
		//声明变量
		int a ;
		a = 100;
		System.out.println(a);

		//还可以这样使用
		int b = 800;
		System.out.println(b);

	}
}

```

多个变量类型

```
public class Var02{
	public static void main(String[] args){
		//记录人的信息
		int age = 30;
		double score =88.9;
		char gender = '男';
		String name = "king";
		//输出信息
		System.out.println("人的信息如下:");
		System.out.println(name);
		System.out.println(age);
		System.out.println(score);
		System.out.println(gender);
	}
}
```

### 数据类型(重点)

在内存中分配了不同大小的内存空间（字节）

#### 基本数据类型

1. 数值型
   - 整数型，存放整数(byte[1],short[2],int[4],long[8])
   - 浮点型，存放小数(float[4],double[8])
2. 字符型（char[2],存放连个字节）
3. 布尔型（boolean[1],存放true,false

#### 引用数据类型

1. 类(class)
2. 接口(interface)
3. 数组([ ])

**String是一个类，是引用数据类型**

整数类型：

| 类型          | 占用存储空间 | 范围                                   |
| ------------- | ------------ | -------------------------------------- |
| byte[字节]    | 1字节        | -128 ~ 127                             |
| short[短整型] | 2字节        | -（2<sup>15</sup> ~  2<sup>15</sup>-1) |
| int[整型]     | 4字节        | -（2<sup>31</sup> ~  2<sup>31</sup>-1) |
| long[长整型]  | 8字节        | - （2<sup>63</sup> ~ 2<sup>63</sup>-1) |

浮点类型；

| 类型           | 占用存储空间 | 范围                    |
| -------------- | ------------ | ----------------------- |
| float(单精度)  | 4字节        | -3.403E380 ~ 3.403E38   |
| double(双精度) | 8字节        | -1.798E308 ~  1.798E308 |

**浮点数 = 符号位 + 指数位 + 尾数位**

5.12e2[5.12*10的2次方]

5.12E-2[5.12/10的2次方]

```java
System.out.println(5.12e2);//512.0
System.out.println(5.12E-2)//0.0512
//浮点数使用陷阱
double num1	= 2.7;
double num2 = 8.1 / 3;
System.out.println(num1);//2.7
System.out.println(num2);//2.699999999997
//当我们对运算结果是小数进行相等判断时，小心
if(num1 == num2){
    System.out.println("相等")
}
//正确写法，使用绝对值
if(Math.abs(num1-num2)<0.0001){
    
}
```

字符类型(char)：

表示单个字符，包含两个字节。只能用单引号，双引号是字符串类型。

```
public class CharDetail{
	public static void main(String[] args){
		char c1 = 'a';
		char c2 = '\at';
		char c3 = '陈';
		char c4 = 97;
		//转换成数)
		System.out.println((int)c3);
		//打印输出
		System.out.println(c1);
		System.out.println(c2);
		System.out.println(c3);
		System.out.println(c4);//ctrl+ shift + d
		//ctrl+ shift + k 删除行

	}
}
```

