$(function(){ 
    //citys switching
    var status = 0
    $(".iconf").on("click",function(){
        if(status == 0){
            $(".citys").fadeIn();
            status = 1;
        } else{
            $(".citys").fadeOut();
            status = 0;
        }
    })
    $(window).on({"scroll":function(){
        $(".citys").fadeOut();
        status = 0;
        }}
    )
    //house name fuzzy query
    var house = {
        a:"弓箭坊小区",
        b:"弓箭坊40号欣才IT学院",
        c:"弓箭坊39号民生银行",
        d:"弓箭坊40号",
        e:"弓箭坊38号",
        f:"弓箭坊40号邮政",
        g:"南京欣才IT学院",
        h:"南京夫子庙",
        i:"南京水游城"
    }
    $(".txt1").on("keyup",function(){
        var val = $(this).val();
        if(val == ''){
            $(".veri1").addClass("h").html("&#xe625;")
        } else{
            $(".veri1").removeClass("h").html("&#xe600;")
        }
        search();
        $(".i").on("click",function(){
            var p = $(this).text();
            $(".txt1").val(p);
            $(".query").hide();
        })
    })
    function search(){
        var val = $(".txt1").val();
        if(val == "弓"){
            $(".query").html("");
            $(".query").show().append("<p class='i'>"+house.a+"</p>").append("<p class='i'>"+house.b+"</p>").append("<p class='i'>"+house.c+"</p>").append("<p class='i'>"+house.d+"</p>").append("<p class='i'>"+house.e+"</p>").append("<p class='i'>"+house.f+"</p>"); 
        } else if(val == "弓箭"){
            $(".query").html("");
            $(".query").show().append("<p class='i'>"+house.a+"</p>").append("<p class='i'>"+house.b+"</p>").append("<p class='i'>"+house.c+"</p>").append("<p class='i'>"+house.d+"</p>").append("<p class='i'>"+house.e+"</p>").append("<p class='i'>"+house.f+"</p>");
        } else if(val == "弓箭坊"){
            $(".query").html("");
            $(".query").show().append("<p class='i'>"+house.a+"</p>").append("<p class='i'>"+house.b+"</p>").append("<p class='i'>"+house.c+"</p>").append("<p class='i'>"+house.d+"</p>").append("<p class='i'>"+house.e+"</p>").append("<p class='i'>"+house.f+"</p>");
        } else if(val == "南"){
            $(".query").html("");
            $(".query").html("");
            $(".query").show().append("<p class='i'>"+house.g+"</p>").append("<p class='i'>"+house.h+"</p>").append("<p class='i'>"+house.i+"</p>");
        } else if(val == "南京"){
            $(".query").html("");
            $(".query").show().append("<p class='i'>"+house.g+"</p>").append("<p class='i'>"+house.h+"</p>").append("<p class='i'>"+house.i+"</p>");
        } else if(val == ""){
            $(".query").html("");
            $(".query").hide();
        }
    }
    //Looking for houses by map
    $(".find").on("click",function(){
        if($(this).val() == "地图找房"){
            $(this).val("收起地图找房");
            $(".map").css({"height":300}).slideDown(1000)
        } else{
            $(this).val("地图找房");
            $(".map").slideUp(1000)
        }
    })
    //Verifying mobile number
    var mobi = /^1[34578]\d{9}$/;
    var num = null;
    $(".txt-mobi").on("change",function(){
        num = $(".txt-mobi").val();
        if(num == ''){
            $(".warn").html("警告:号码不能为空");
            $(".btn").val("验证失败")
        } else if(!mobi.test(num)){
            $(".warn").html("警告:手机号码格式有误,请重新输入");
            $(".btn").val("验证失败")
        } else{
            $(".warn").html('');
            $(".btn").val("验证通过").css({"background": "green" })
        } 
    })
    
    //Verifying whether option selected
    
    $(".txt2").on("change",function(){
        var sel = $(".txt2").find('option:selected');
        if(sel.text() == "区属"){
            $(".veri2").addClass("h").html("&#xe625;")
        } else{
            $(".veri2").removeClass("h").html("&#xe600;")
        } 
    })
    $(".txt2-r").on("change",function(){
        var sel = $(".txt2").find('option:selected');
        if(sel.text() == "板块"){
            $(".veri2").addClass("h").html("&#xe625;")
        } else{
            $(".veri2").removeClass("h").html("&#xe600;")
        } 
    })
    //Verifying housing type
    var ht = /^[0-9]*$/;
    $(".txt3").on("change",function(){
        var val = $(".txt3").val();
        if(!ht.test(val)){
            $(".veri3").addClass("h").html("&#xe625;")
        } else{
            $(".veri3").removeClass("h").html("&#xe600;")
        }
    })
    $(".txt3-t").on("change",function(){
        var val = $(".txt3-t").val();
        if(!ht.test(val)){
            $(".veri3").addClass("h").html("&#xe625;")
        } else{
            $(".veri3").removeClass("h").html("&#xe600;")
        }
    })
    $(".txt3-w").on("change",function(){
        var val = $(".txt3-w").val();
        if(!ht.test(val)){
            $(".veri3").addClass("h").html("&#xe625;")
        } else{
            $(".veri3").removeClass("h").html("&#xe600;")
        }
    })
    $(".txt3-y").on("change",function(){
        var val = $(".txt3-y").val();
        if(!ht.test(val)){
            $(".veri3").addClass("h").html("&#xe625;")
        } else{
            $(".veri3").removeClass("h").html("&#xe600;")
        }
    })
    
    
    $(".info2:eq(0) input").on("change",function(){
        if($(".txt3").val()+$(".txt3-t").val()+$(".txt3-w").val()+$(".txt3-y").val() == "0000"){
            $(".veri3").addClass("h").html("&#xe625;")
        }
    })
    //Rental mode
    $(".txt4").on("change",function(){
        var sel = $(".txt4").find('option:selected');
        if(sel.text() == "选择卧室内容"){
            $(".veri-RM").addClass("h").html("&#xe625;")
        } else{
            $(".veri-RM").removeClass("h").html("&#xe600;")
        } 
    })
    $(".txt4-r").on("change",function(){
        var sel = $(".txt4-r").find('option:selected');
        if(sel.text() == "选择限制条件"){
            $(".veri-RM").addClass("h").html("&#xe625;")
        } else{
            $(".veri-RM").removeClass("h").html("&#xe600;")
        } 
    })
    
    //verifying house area input type
    var ha = /^[0-9]+(.[0-9]{1,2})?$/
    $(".inp-l").on("change",function(){
        var val = $(".inp-l").val();
        if(!ha.test(val)){
            $(".veri-HA").addClass("h").html("&#xe625;")
        } else{
            $(".veri-HA").removeClass("h").html("&#xe600;")
        }
    })
    
    //verifying rental price input type
    $(".inp-l2").on("change",function(){
        var val = $(".inp-l2").val();
        if(!ha.test(val)){
            $(".veri-RP").addClass("h").html("&#xe625;")
        } else{
            $(".veri-RP").removeClass("h").html("&#xe600;")
        }
    })
    
    //Verifying payment checkbox selected
    $("#c").on("click",function(){
        $(".c").attr("checked",false);
    })
    $(".c").on("click",function(){
        $("#c").attr("checked",false);
    })
    //images uploading
    $(".upload").on("click",function(){
        $(".img").slideDown(1000);
    })
    $(".close").on("click",function(){
        $(".img").slideUp(1000);
    })
    
    //filling the textarea information
    $(window).on("change",function(){
        var a = $(".txt1").val();
        var b = $(".txt2").find('option:selected').text();
        var c = $(".txt2-r").find('option:selected').text();
        var d = $(".txt3").val();  
        var e = $(".txt3-t").val();
        var f = $(".txt3-w").val();
        var g = $(".txt3-y").val();
        var h = $(".txt4").find('option:selected').text();
        var i = $(".txt4-r").find('option:selected').text();
        var j = $(".inp-l").val();
        var k = $(".inp-l2").val();
        var l = $(".txt-mobi").val();
        $("textarea").html("小区名称:"+a+";"+"区属板块:"+b+c+";"+"户型:"+d+"室"+e+"厅"+f+"卫"+g+"阳台"+";"+"出租形式:"+h+","+i+";"+"面积:"+j+"平方米;"+"租金:"+k+"元/月;"+"手机号码:"+l+".")
    })
    
})