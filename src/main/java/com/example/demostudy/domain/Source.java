package com.example.demostudy.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
@Data
@Entity //标明这就只是个实体，其他什么都不干
@Table(name = "source") //对应表名
public class Source implements Serializable {


    // s_id

    @javax.persistence.Id //标明是id字段
    @GeneratedValue(strategy = GenerationType.IDENTITY) //指定主键生成策略
    @Column(name = "s_id") //字段名称
    private Long SId;

    // s_product
    @Column(name = "s_product") //字段名称
    private String SProduct;

    // s_ucode
    @Column(name = "s_ucode") //字段名称
    private Double SUcode;

    // s_vcode
    @Column(name = "s_vcode") //字段名称
    private Double SVcode;


    //s_ccode
    @Column(name = "s_ccode") //字段名称
    private Double SCcode;

}
