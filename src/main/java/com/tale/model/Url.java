package com.tale.model;

import com.blade.jdbc.annotation.Table;

import java.io.Serializable;
import java.util.Date;

@Table(name = "tb_url", pk = "id")
public class Url implements Serializable {

    private Integer id;

    private Integer url_type;

    private String url;

    private String url_desc;


    private String url_title;

    private Date create_time;

    private Date update_time;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUrl_type() {
        return url_type;
    }

    public void setUrl_type(Integer url_type) {
        this.url_type = url_type;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getUrl_desc() {
        return url_desc;
    }

    public void setUrl_desc(String url_desc) {
        this.url_desc = url_desc;
    }

    public String getUrl_title() {
        return url_title;
    }

    public void setUrl_title(String url_title) {
        this.url_title = url_title;
    }

    public Date getCreate_time() {
        return create_time;
    }

    public void setCreate_time(Date create_time) {
        this.create_time = create_time;
    }

    public Date getUpdate_time() {
        return update_time;
    }

    public void setUpdate_time(Date update_time) {
        this.update_time = update_time;
    }
}
