function TRS_Document_Source(urlname,urltitle,content){
    if(urlname.indexOf('/zw/zwzx/mtjj/')!=-1){
        url_list = content.match(/http:\/\/daily.cnnb.com.cn\/nbrb.+?div=-1/g);
        tag_con = '' ;
        for(i=0;i<7;i++){
           tag_a = '<a href="' +url_list[i] + '">' + i +'</a>\n';
           tag_con += tag_a;
        }
        content = tag_con;
        return content ;
    }
    else{
            content = content.replace(/art/g,'')
    	return content
    }
}