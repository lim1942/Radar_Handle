function TRS_Document_Source(urlname,urltitle,content){
    if(urlname.indexOf('search')!=-1){
        return content
    }
    else{
            content = content.replace(/php\/cms\/item-view-id-/g,'')
    	return content
    }
}