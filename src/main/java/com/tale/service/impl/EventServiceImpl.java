package com.tale.service.impl;

import com.blade.ioc.annotation.Inject;
import com.blade.ioc.annotation.Service;
import com.blade.jdbc.ActiveRecord;
import com.tale.controller.admin.UrlController;
import com.tale.model.Event;
import com.tale.service.EventService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.Marker;

import java.util.Date;

@Service
public class EventServiceImpl implements EventService{

    private static Logger logger= LoggerFactory.getLogger(EventServiceImpl.class);

    @Inject
    private ActiveRecord activeRecord;

    @Override
    public void insertEvent(String title, String content){
        try{
            Event event=new Event();
            event.setTitle(title);
            event.setContent(content);
            event.setCreate_time(new Date());
            activeRecord.insert(event);
        }catch (Exception e){
           e.printStackTrace();
           logger.error(title+";"+content);
           logger.error(e.getMessage());
        }

    }
}
