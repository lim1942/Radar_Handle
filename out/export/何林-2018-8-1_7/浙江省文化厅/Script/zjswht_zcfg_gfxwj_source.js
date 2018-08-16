function TRS_Document_Source(urlname,urltitle,content){
    if(urlname == 'http://www.zjwh.gov.cn/zcfg/gfxwj.htm'){
        return content
    }
    else{
   content = content.replace(/htm/g,'')
    	return content
    }
}