---
title: "JavaHomework"
description: 
date: 2024-07-26T19:05:16+08:00
image: 
math: 
license: 
hidden: false
comments: true
draft: true
tags : 
categories : java
---
### Relative Path

A path that starts from the current directory.

```
../  Up one level in the directory
```

### Absolute Path

A path that starts from the top-level directory.

```
D:\abc2\text\hello.txt
```

### DOS Commands

#### dir (directory)

```
dir              View contents of the current directory
dir D:\text      View contents of the text directory on the D drive
```

### cd (change directory)

```
cd /D c:         Switch to the root directory of the C drive, /D indicates start
```

### tree

```
tree            View the contents of the subdirectories in the current directory
tree D:\text    View the contents of the subdirectories in the text directory on the D drive
```

### cls

```
Clear the current display content
```

### exit

```
Exit DOS
```

1. Write a Hello, World program [Homework01.java]

   ```java
   public class Homework01{
   	public static void main(String[] args){
           System.out.println("Hello world");
       }
   }
   ```

2. Print personal basic information (name, gender, place of origin, address) to the console, with each piece of information on a separate line. [Homework02.java]

   ```java
   public class Homework02{
   	public static void main(String[] args){
           System.out.println("chance");
           System.out.println("woman");
           System.out.println("guangdong");
           System.out.println("bluemoon");
       }
   }
   ```

3. The relationship between JDK, JRE, and JVM [Homework03.java]

   ```
   JDK includes JRE + Java development tools
   JRE includes JVM + core libraries
   JDK is the Java Development Kit
   JRE is the Runtime Environment
   JVM is the Virtual Machine
   ```

4. Path configuration and its function [Homework04.java]

   ```
   The path mainly allows the DOS system to directly find our compilation and running tools in any directory.
   It's like a shortcut, not mandatory but convenient.
   First, configure JAVA_HOME to point to the current JDK version for easy version changes.
   The path configuration is %JAVA_HOME%\bin
   This actually configures tools under the bin directory of the JDK, such as java, javac, javadoc, etc.
   ```

5. Steps for writing Java code [Homework05.java]

   ```
   1. Write the Java source code
   2. Compile with javac to get the corresponding .class bytecode file
   3. Run with java, essentially loading the .class file into the JVM to run
   ```

6. Seven Java coding standards

   ```
   1. Use Javadoc comments for class and method documentation
   2. Non-Javadoc comments are often used to describe code (for maintainers)
   3. Use Tab to indent code to the right, and Shift+Tab to indent to the left
   4. Leave spaces around operators and = for clarity, e.g., int n = 1 + 4
   5. Source files should use UTF-8 encoding
   6. Line width should not exceed 80 characters
   7. There are two coding styles: next-line style and end-of-line style.
   ```