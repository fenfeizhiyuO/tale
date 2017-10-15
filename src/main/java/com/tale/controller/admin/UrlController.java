package com.tale.controller.admin;

import com.blade.ioc.annotation.Inject;
import com.blade.mvc.annotation.Controller;
import com.blade.mvc.annotation.JSON;
import com.blade.mvc.annotation.QueryParam;
import com.blade.mvc.annotation.Route;
import com.blade.mvc.http.HttpMethod;
import com.blade.mvc.http.Request;
import com.blade.mvc.view.RestResponse;
import com.tale.controller.BaseController;
import com.tale.model.UrlType;
import com.tale.service.UrlService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Date;
import java.util.List;

@Controller("url")
public class UrlController extends BaseController {

    @Inject
    private UrlService urlService;

    private static final Logger LOGGER = LoggerFactory.getLogger(IndexController.class);

    @Route(value ="/list", method = HttpMethod.GET)
    public String toUrlHtml(Request request){
        return "admin2/url/urlList.html";
    }


    @Route(value = "/typeList", method = HttpMethod.GET)
    @JSON
    public RestResponse<List<UrlType>> getUrlTypeList(Request request){
        RestResponse<List<UrlType>> restResponse=RestResponse.ok();
        restResponse.setPayload(urlService.queryUrlTypes());
        return restResponse;
    }

    @Route(value = "/saveUrl", method = HttpMethod.POST)
    @JSON
    public RestResponse saveUrl(@QueryParam Integer type,@QueryParam String urlTitle,@QueryParam String url,
                                    @QueryParam String urlDesc){
        return null;

    }

    @Route(value = "/saveUrlType", method = HttpMethod.POST)
    @JSON
    public RestResponse saveUrlType(@QueryParam String name){
        UrlType urlType=new UrlType();
        urlType.setName(name);
        urlType.setCreate_time(new Date());
        int key= urlService.saveUrlType(urlType);
        RestResponse<Integer> res=RestResponse.ok();
        res.setPayload(key);
        return res;
    }
}
