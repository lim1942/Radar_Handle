function TRS_Document_Source(urlname,urltitle,content){
    if(urlname.indexOf('infotypeId=A120')!=-1){
        return content
    }
    else{
           content = content.replace(/art/g,'')
           content = content.replace(/\/module\/download.+filename=/g,'http://zjjcmspublic.oss-cn-hangzhou.aliyuncs.com/jcms_files/jcms1/web2759/site/attach/0/')
    	return content
    }
}