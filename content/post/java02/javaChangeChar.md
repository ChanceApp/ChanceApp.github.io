---
title: "Java Escape Characters"
description: 
date: 2024-07-17T16:15:00+08:00
image: 
math: 
license: 
hidden: false
comments: true
draft: true
---
## Java转义字符

```java
// Demonstration of escape character usage
public class ChangeChar{
    public static void main(String[] args){
        // In the console, pressing the tab key can achieve command completion
        // \t : a tab character, used for alignment
        System.out.println("Beijing\tShanghai\tTianjin");
        
        // \n : newline character
        System.out.println("jack\nsmith\nmary");
        
        // \\ : a backslash
        System.out.println("C:\\Windows\\System32\\cmd.exe");
        
        // \" : a double quote
        System.out.println("Lao Han said: \"Study Java well, it has a bright future\"");
        
        // \' : a single quote \r : a carriage return
        System.out.println("Han Shunping Education\r Beijing");

        System.out.println("Book Title\t Author \t Price \t Sales \nThree Kingdoms\t Luo Guanzhong\t 120\t 1000");
    }
}
```

