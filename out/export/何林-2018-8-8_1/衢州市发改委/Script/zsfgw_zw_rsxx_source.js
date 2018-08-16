function TRS_Document_Source(urlname,urltitle,content){
    if(urlname.indexOf('perpage')!=-1){
        url_list = content.match(/\/art\/.+?art_.+?\d\.html/g);
        tag_con = '' ;
        for(i=0;i<12;i++){
           tag_a = '<a href="' +url_list[i] + '">' + i +'</a>\n';
           tag_con += tag_a;
        }
        content = tag_con;
        return content ;
    }
    else{
    	return content
    }
}