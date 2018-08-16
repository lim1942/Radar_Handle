function TRS_Document_Source(urlname,urltitle,content){
    if(urlname.indexOf('shtml')==-1){
        return content
    }
    else{
            content = content.replace(/shtml/g,'')
    	return content
    }
}