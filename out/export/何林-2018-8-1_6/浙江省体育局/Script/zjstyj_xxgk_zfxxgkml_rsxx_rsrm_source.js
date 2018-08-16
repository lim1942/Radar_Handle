function TRS_Document_Source(urlname,urltitle,content){
    if(urlname.indexOf('divid=div1347232')!=-1){

        return content
}
    else{
      content = content.replace(/html/g,'')
    	return content
    }
}