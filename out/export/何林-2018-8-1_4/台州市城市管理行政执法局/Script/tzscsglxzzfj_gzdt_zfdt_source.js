function TRS_Document_Source(urlname,urltitle,content){
    if(urlname.indexOf('index')!=-1){
        url_list = content.match(/art\/.+?html/g)
        con = ''
        for (var i =0; i<40 ;i++){
           tag_a = '<a href="http://www.tzzfj.gov.cn/' +url_list[i] +'">' + i.toString() + '</a>\n'
           con += tag_a
        }
        content = con
        return content
    }
    else{
    	return content
    }
}