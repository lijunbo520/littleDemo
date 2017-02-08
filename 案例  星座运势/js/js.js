window.onload = function () {
    function $(id) {return document.getElementById(id);}
    var stargroup =[10,6,8,4,6,8,6,2,8,4,10,6];
    var content = [
        "白羊座的内容",
        "金牛座的内容",
        "双子座的内容",
        "巨蟹座的内容",
        "狮子座的内容",
        "处女座的内容",
        "天秤座的内容",
        "天蝎座的内容",
        "射手座的内容",
        "摩羯座的内容",
        "水瓶座的内容",
        "双鱼座的内容",
    ]
    $("sele").onchange = function(){
        /*icon背景与索引号是乘以50的关系，但是是负数 */
        $("myicon").style.backgroundPosition = "0 "+(-50*this.value)+"px ";
        /*星级10级（80/10） 总宽度80px*/
        $("mystar").style.width = stargroup[this.value]*8 + "px";
        $("mycontent").innerHTML = content[this.value];
    }
}