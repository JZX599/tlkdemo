package com.example.demostudy.service.impl;

import com.example.demostudy.common.lang.Result;
import com.example.demostudy.domain.Source;
import com.example.demostudy.mapper.ISourceMapper;
import com.example.demostudy.service.ISourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ISourceServiceImpl implements ISourceService {

    @Autowired
    private ISourceMapper iSourceMapper;
    // 查询所有  来源对象的  信息
    @Override
    public Result getSList() {
        List<Source> all = iSourceMapper.findAll();
        Result result = Result.succ(200, "查询所有来源对象数据成功", all);
        return result;
    }
}
