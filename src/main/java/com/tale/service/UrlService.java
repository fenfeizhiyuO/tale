package com.tale.service;

import com.tale.model.Url;
import com.tale.model.UrlType;

import java.util.List;

public interface UrlService {


    List<UrlType> queryUrlTypes();

    int saveUrl(Url url);

    boolean checkNotExistUrl(Url url);

    int saveUrlType(UrlType urlType);

    boolean checkNotExistUrlType(String name);
}
