---
title: "JavaComment"
description: 
date: 2024-07-17T21:54:41+08:00
image: 
math: 
license: 
hidden: false
comments: true
draft: true
---
## 注释

### java中的注释

1. 单行注释
2. 多行注释

```java
public class Conmmet {
	public static void main(String[] args){
        //这个一个单行注释
        /*
        我将开始写多行注释演示，
        下面是一个输出方法。
        */
        System.out.println("世界你好！")
        
    }
} 
```

3.文档注释

注释内容可以被JDK提供的工具Javadoc所解析，生产一套以网页文件形式体现的该程序的说明文档，一般写在类

```java
/**
*@author chance
*@version 1.0
*/
public class Comment02{
    public static void main(String[]arg){
        System.out.println("这是一个文档注释              ")
    }
}
```

## Javadoc标签

Javadoc 工具可以识别文档注释中的一些特殊标签，这些标签一般以@开头，后跟一个指定的名字，有的也以{@开头，以}结束。Javadoc 可以识别的标签如下表所示：

| 标签                       | 描述                                                         | 标签类型                            |
| -------------------------- | ------------------------------------------------------------ | ----------------------------------- |
| @author                    | 作者标识                                                     | 包、 类、接口                       |
| @deprecated                | 标识当前API已经过期，仅为了保证兼容性依然存在，以此告之开发者不应再用这个API | 包、类、接口、值域、构造函数、 方法 |
|                            | 指明当前文档根目录的路径                                     |                                     |
| @exception                 | 标志一个类抛出的异常                                         | 构造函数、 方法                     |
|                            | 从直接父类继承的注释                                         |                                     |
|                            | 链接到某个特定的成员对应的文档中                             | 包、类、接口、值域、构造函数、 方法 |
|                            | 插入一个到另一个主题的链接，但是该链接显示纯文本字体         | 包、类、接口、值域、构造函数、 方法 |
| @param                     | 方法的入参名及描述信息，如入参有特别要求，可在此注释         | 构造函数、方法                      |
| @return                    | 对函数返回值的注释                                           | 方法                                |
| @see                       | 引用,查看相关内容，如类、方法、变量等                        | 包、类、接口、值域、构造函数、 方法 |
| @serial                    | 说明一个序列化属性                                           |                                     |
| @serialData                | 说明通过writeObject( ) 和 writeExternal( )方法写的数据       |                                     |
| @serialField               | 说明一个ObjectStreamField组件                                | @                                   |
| @since                     | 描述文本,API在什么程序的什么版本后开发支持                   | 包、类、接口、值域、构造函数、 方法 |
| @throws                    | 构造函数或方法所会抛出的异常                                 | 构造函数、 方法                     |
|                            | 显示常量的值，该常量必须是static属性                         | 静态值域                            |
| @version                   | 版本号                                                       | 包、 类、接口                       |
| **对两种标签格式的说明：** |                                                              |                                     |

文件注释：

```java
/*
 * <p>项目名称: ${project_name} </p> 
 * <p>文件名称: ${file_name} </p> 
 * <p>描述: [类型描述] </p>
 * <p>创建时间: ${date} </p>
 * @author：<a href="mail to: *******@******.com" rel="nofollow">作者</a>
 * @version：
 * @update [序号][日期YYYY-MM-DD] [更改人姓名][变更描述]
 */
```

方法注释：

```java
/**
 * @Title：${enclosing_method}
 * @Description: [功能描述]
 * @Param: ${tags}
 * @Return: ${return_type}
 * @author：<a href="mail to: *******@******.com" rel="nofollow">作者</a>
 * @CreateDate: ${date} ${time}</p> 
 * @update: [序号][日期YYYY-MM-DD] [更改人姓名][变更描述]     
 */
```

使用javadoc生成文档

```java
javadoc -d 文档存放目录 -author -version 源文件名.java
```

