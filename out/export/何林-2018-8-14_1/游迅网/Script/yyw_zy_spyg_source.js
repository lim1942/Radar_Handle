function TRS_Document_Source(urlname,urltitle,content){
    if(urlname.indexOf('yugao')!=-1){
        return content
    }
    else{
            var url_con = []
            page_url = content.match(/<a.+news\/\d+\/\d+_\d+\.html">\d+<\/a>/g)
            if (page_url instanceof Array){
            for(var i=0; i < page_url.length; i++){
                tag_a = page_url[i]
                if(url_con.indexOf(tag_a) ==-1){
                     url_con.push(tag_a)
                 }
            }
            content+= '<div id="page">' + url_con.join('\n') + '</div>';
            }
            content.replace(/alt="ÓÎÑ¸Íøwww.yxdown.com"\s/g,'').replace(/title="" \//g,'')
    	return content
    }
}