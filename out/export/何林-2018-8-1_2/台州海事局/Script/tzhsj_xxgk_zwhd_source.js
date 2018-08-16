function TRS_Document_Source(urlname,urltitle,content){
    if(urlname.indexOf('index')!=-1){
        return content
    }
    else{
content = content.replace(/zfxxgk\/download\/downfile.+?filename=/g,'attach/0/')
    	return content
    }
}