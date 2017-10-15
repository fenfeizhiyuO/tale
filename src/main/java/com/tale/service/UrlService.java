package com.tale.service;

import com.tale.model.UrlType;

import java.util.List;

public interface UrlService {


    List<UrlType> queryUrlTypes();

    int saveUrlType(UrlType urlType);
}
