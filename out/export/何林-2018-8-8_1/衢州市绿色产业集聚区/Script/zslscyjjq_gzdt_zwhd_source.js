function TRS_Document_Source(urlname,urltitle,content){
    if(urlname.indexOf('showsub=0')!=-1){
        return content
    }
    else{
          content = content.replace(/art/g,'')
          content = content.replace(/zfxxgk\/download.+?filename=/g,'attach/0/')
    	return content
    }
}