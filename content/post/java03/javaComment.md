---
title: "JavaComment"
description: 
date: 2024-07-17T21:54:41+08:00
image: 
math: 
license: 
hidden: false
comments: true
draft: 
categories:
    - java
tags:
    
---
## Comments

### Comments in Java

1. Single-line comments
2. Multi-line comments

```java
public class Comment {
    public static void main(String[] args){
        // This is a single-line comment
        /*
        I will start writing multi-line comments,
        below is a print method.
        */
        System.out.println("Hello, World!");
    }
}
```

3. Documentation comments

Comments can be parsed by the Javadoc tool provided by JDK to produce a set of web-based documentation for the program. Generally, these comments are written in the class.

```java
/**
 * @author chance
 * @version 1.0
 */
public class Comment02 {
    public static void main(String[] args){
        System.out.println("This is a documentation comment");
    }
}
```

## Javadoc Tags

The Javadoc tool can recognize some special tags within documentation comments. These tags usually start with @ followed by a specific name, and some start with {@ and end with }. The tags recognized by Javadoc are shown in the table below:

| Tag                        | Description                                                    | Applicable to                        |
| -------------------------- | -------------------------------------------------------------- | ------------------------------------ |
| @author                    | Identifies the author                                          | Package, Class, Interface            |
| @deprecated                | Marks an API as deprecated; warns developers not to use it    | Package, Class, Interface, Field, Constructor, Method |
|                            | Specifies the path to the root directory of the current document |                                      |
| @exception                 | Marks an exception thrown by a class                           | Constructor, Method                  |
|                            | Inherits comments from the immediate parent class              |                                      |
|                            | Links to the documentation for a specific member               | Package, Class, Interface, Field, Constructor, Method |
|                            | Inserts a link to another topic but displays as plain text     | Package, Class, Interface, Field, Constructor, Method |
| @param                     | Describes a method's parameter, including special requirements | Constructor, Method                  |
| @return                    | Describes a method's return value                              | Method                               |
| @see                       | References related content, such as classes, methods, variables | Package, Class, Interface, Field, Constructor, Method |
| @serial                    | Documents a serializable field                                 |                                      |
| @serialData                | Describes data written by writeObject() and writeExternal() methods |                                      |
| @serialField               | Documents an ObjectStreamField component                       |                                      |
| @since                     | Indicates the version when the API was first supported         | Package, Class, Interface, Field, Constructor, Method |
| @throws                    | Documents exceptions thrown by a constructor or method         | Constructor, Method                  |
|                            | Displays the constant value, which must be a static field      | Static Field                         |
| @version                   | Indicates the version                                          | Package, Class, Interface            |
| **Explanation of two tag formats:** |                                                      |                                      |

File Comment:

```java
/*
 * <p>Project Name: ${project_name} </p> 
 * <p>File Name: ${file_name} </p> 
 * <p>Description: [Type Description] </p>
 * <p>Creation Time: ${date} </p>
 * @author：<a href="mail to: *******@******.com" rel="nofollow">Author</a>
 * @version：
 * @update [Serial Number][Date YYYY-MM-DD] [Changer's Name][Change Description]
 */
```

Method Comment:

```java
/**
 * @Title：${enclosing_method}
 * @Description: [Function Description]
 * @Param: ${tags}
 * @Return: ${return_type}
 * @Author：<a href="mail to: *******@******.com" rel="nofollow">Author</a>
 * @CreateDate: ${date} ${time}</p> 
 * @update: [Serial Number][Date YYYY-MM-DD] [Changer's Name][Change Description]     
 */
```

Using Javadoc to Generate Documentation

```bash
javadoc -d Documentation Directory -author -version SourceFileName.java
```

