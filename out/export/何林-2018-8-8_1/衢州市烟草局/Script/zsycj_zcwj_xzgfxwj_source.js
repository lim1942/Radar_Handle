function TRS_Document_Source(urlname,urltitle,content){
    if(urlname.indexOf('divid=zupei_')!=-1){
        url_list = content.match(/\/art\/.+?art_.+?\d\.html/g);
        tag_con = '' ;
        for(i=0;i<17;i++){
           tag_a = '<a href="http://www.qz.gov.cn/xxgk/jcms_files/jcms1/web57/site' +url_list[i] + '">' + i +'</a>\n';
           tag_con += tag_a;
        }
        content = tag_con;
        return content ;
    }
    else{
            content = content.replace(/art/g,'')
            content = content.replace(/zfxxgk\/download.+filename=/g,'attach/0/')
    	return content
    }
}