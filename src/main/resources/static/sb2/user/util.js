function isNUllStr(str) {
    if(str== undefined||str==null||str.replace(/(^s*)|(s*$)/g, "").length ==0){
        return true;
    }
    return false;
}

function NotNullStr(str, message) {
    if(isNUllStr(str)){
        alert(message);
        return false;
    }
    return true;
}

function replaceNullStr(str,str2) {
    if(isNUllStr(str)){
        return str2;
    }
    return str;
}