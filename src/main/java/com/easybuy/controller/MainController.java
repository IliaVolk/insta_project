package com.easybuy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping("/")
public class MainController {


    @ExceptionHandler(Throwable.class)
    public String start(){
        return "index";
    }


    @RequestMapping("hello")
    @ResponseBody
    public List<?> hello(){
        return Arrays.asList("Hello, Oksana", "Other message");
    }
}
