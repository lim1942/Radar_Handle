function TRS_Document_Source(urlname,urltitle,content){
    if(urlname.indexOf('index')!=-1){
  
        hook  = '<div id="4621259">'
        hook_index = content.indexOf(hook)
        content =content.substring(hook_index)
    
        url_list = content.match(/\/art\/.+?html/g)
        con = ''
        for (var i =0; i<15;i++){
           tag_a = '<a href="' +url_list[i] +'">' + i.toString() + '</a>\n'
           con += tag_a
        }
        content = con
        return content
}
    else{
    	return content
    }
}