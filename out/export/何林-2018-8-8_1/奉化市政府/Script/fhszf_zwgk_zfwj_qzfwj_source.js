function TRS_Document_Source(urlname,urltitle,content){
    if(urlname.indexOf('html')==-1){
        return content
    }
    else{
            content = content.replace(/html/g,'')
    	return content
    }
}