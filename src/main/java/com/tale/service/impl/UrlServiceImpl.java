package com.tale.service.impl;

import com.blade.ioc.annotation.Inject;
import com.blade.ioc.annotation.Service;
import com.blade.jdbc.ActiveRecord;
import com.tale.model.Contents;
import com.tale.model.Url;
import com.tale.model.UrlType;
import com.tale.service.UrlService;

import java.util.List;

@Service
public class UrlServiceImpl implements UrlService{

    @Inject
    private ActiveRecord activeRecord;

    @Override
    public List<UrlType> queryUrlTypes(){
        String sql="select * from tb_url_type";
      return activeRecord.list(UrlType.class,sql,null);
    }

    @Override
    public int saveUrl(Url url){
        return Integer.valueOf(activeRecord.insert(url)+"");
    }

    @Override
    public boolean checkNotExistUrl(Url url){
        Url queryUrl=new Url();
        queryUrl.setUrl(url.getUrl());
        return activeRecord.one(queryUrl)==null;
    }

    @Override
    public int saveUrlType(UrlType urlType){
        return Integer.valueOf(activeRecord.insert(urlType)+"") ;
    }

    @Override
    public boolean checkNotExistUrlType(String name){
        UrlType urlType=new UrlType();
        urlType.setName(name);
        return activeRecord.one(urlType)==null;
    }
}
