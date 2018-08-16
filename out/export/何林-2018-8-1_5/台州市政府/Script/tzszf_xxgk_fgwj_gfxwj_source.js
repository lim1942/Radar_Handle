function TRS_Document_Source(urlname,urltitle,content){
    if(urlname.indexOf('order=1')!=-1){
        url_list = content.match(/http:\/\/www\.zjtz\.gov\.cn\/xxgk\/jcms_files\/.+?art.+?html/g)
        con = ''
        for (var i =0; i<15 ;i++){
           tag_a = '<a href="' +url_list[i] +'">' + i.toString() + '</a>\n'
           con += tag_a
        }
        content = con
        return content
    }
    else{
            content = content.replace(/zfxxgk\/download\/downfile.+?filename=/g,'attach/0/')
    	return content
    }
}