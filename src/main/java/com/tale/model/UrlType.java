package com.tale.model;

import com.blade.jdbc.annotation.Column;
import com.blade.jdbc.annotation.Table;

import java.io.Serializable;
import java.util.Date;


@Table(name = "tb_url_type", pk = "id")
public class UrlType implements Serializable {

    @Column(name="id")
    private Integer id;

    @Column(name="name")
    private String name;


    private Date create_time;



    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getCreate_time() {
        return create_time;
    }

    public void setCreate_time(Date create_time) {
        this.create_time = create_time;
    }
}
