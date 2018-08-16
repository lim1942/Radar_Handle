function TRS_Document_Source(urlname,urltitle,content){
    if(urlname.indexOf('gov.cn/?list-5.html')!=-1){
        return content
    }
    else{
content= content.replace(/\?thread-/g,'')
    	return content
    }
}