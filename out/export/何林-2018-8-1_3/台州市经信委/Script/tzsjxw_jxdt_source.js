function TRS_Document_Source(urlname,urltitle,content){
    if(urlname.indexOf('index')!=-1){
        url_list = content.match(/href='.+?html/g)
        con = ''
        for (var i =0; i<20 ;i++){
           tag_a = '<a href="' +url_list[i].replace(/href='/,'') +'">' + i.toString() + '</a>\n'
           con += tag_a
        }
        content = con
        return content
    }
    else{
    	return content
    }
}