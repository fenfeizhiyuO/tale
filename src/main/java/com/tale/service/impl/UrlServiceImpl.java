package com.tale.service.impl;

import com.blade.ioc.annotation.Inject;
import com.blade.ioc.annotation.Service;
import com.blade.jdbc.ActiveRecord;
import com.tale.model.Contents;
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
    public int saveUrlType(UrlType urlType){
        return Integer.valueOf(activeRecord.insert(urlType)+"") ;
    }
}
