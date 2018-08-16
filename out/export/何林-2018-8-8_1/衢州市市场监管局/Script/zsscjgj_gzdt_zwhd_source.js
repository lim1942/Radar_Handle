function TRS_Document_Source(urlname,urltitle,content){
    if(urlname.indexOf('orderbysub=0')!=-1){
        return content
    }
    else{
           content = content.replace(/art/g,'')
    	return content
    }
}