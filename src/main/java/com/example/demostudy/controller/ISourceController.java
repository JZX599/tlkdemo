package com.example.demostudy.controller;

import com.example.demostudy.common.lang.Result;
import com.example.demostudy.service.ISourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class ISourceController {


    @Autowired
    private ISourceService iSourceService;



    @GetMapping(path = "/getAllSource")
    public Result getAllSource(){

        System.out.println("查询所有数据");
        Result  result=  iSourceService.getSList();

        return result;
    }


}
