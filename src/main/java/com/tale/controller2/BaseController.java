package com.tale.controller2;

import com.blade.mvc.http.Request;
import com.tale.model.Users;
import com.tale.utils.MapCache;
import com.tale.utils.TaleUtils;

/**
 * Created by yangyu on 2017/6/24.
 */
public abstract class BaseController {
    public static String THEME = "themes/SB2";

    protected MapCache cache = MapCache.single();

    public String render(String viewName) {
        return THEME + "/" + viewName;
    }

    public com.tale.controller2.BaseController title(Request request, String title) {
        request.attribute("title", title);
        return this;
    }

    public com.tale.controller2.BaseController keywords(Request request, String keywords) {
        request.attribute("keywords", keywords);
        return this;
    }

    public Users user() {
        return TaleUtils.getLoginUser();
    }

    public Integer getUid(){
        return this.user().getUid();
    }

    public String render_404() {
        return "/comm/error_404";
    }
}
