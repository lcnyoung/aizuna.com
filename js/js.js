$(function(){ 
    //mobi QRcode show
    $(".mobi").on(
        {"mouseover":function(){
                $(".mobiaizu").show();
            }
        }
    )
    $(window).on("click",function(){
        $(".mobiaizu").stop(true).fadeOut(500);
    })
    
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
    $(".txt3").on("keyup",function(){
        var val = $(".txt3").val();
        if(!ht.test(val)){
            $(".veri3").addClass("h").html("&#xe625;")
        } else{
            $(".veri3").removeClass("h").html("&#xe600;")
        }
    })
    $(".txt3-t").on("keyup",function(){
        var val = $(".txt3-t").val();
        if(!ht.test(val)){
            $(".veri3").addClass("h").html("&#xe625;")
        } else{
            $(".veri3").removeClass("h").html("&#xe600;")
        }
    })
    $(".txt3-w").on("keyup",function(){
        var val = $(".txt3-w").val();
        if(!ht.test(val)){
            $(".veri3").addClass("h").html("&#xe625;")
        } else{
            $(".veri3").removeClass("h").html("&#xe600;")
        }
    })
    $(".txt3-y").on("keyup",function(){
        var val = $(".txt3-y").val();
        if(!ht.test(val)){
            $(".veri3").addClass("h").html("&#xe625;")
        } else{
            $(".veri3").removeClass("h").html("&#xe600;")
        }
    })
    
    
    $(".info2:eq(0) input").on("keyup",function(){
        if($(".txt3").val()+$(".txt3-t").val()+$(".txt3-w").val()+$(".txt3-y").val() == "0000"){
            $(".veri3").addClass("h").html("&#xe625;")
        } else if(!ht.test($(".txt3").val()) || !ht.test($(".txt3-t").val()) || !ht.test($(".txt3-w").val()) || !ht.test($(".txt3-y").val())){
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
    var ha = /^[1-9][0-9]*$/
    $(".inp-l").on("keyup",function(){
        var val = $(".inp-l").val();
        if(!ha.test(val)){
            $(".veri-HA").addClass("h").html("&#xe625;")
        } else{
            $(".veri-HA").removeClass("h").html("&#xe600;")
        }
    })
    
    
    
    
    //verifying rental price input type
    $(".inp-l2").on("keyup",function(){
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
        $(this).hide();
        $(".img").slideDown(1000);
        
    })
    $(".close").on("click",function(){
        $(".img").slideUp(1000);
        $(".upload").show();
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
        if($("#first").attr("checked")){
            var m = "整租"
        } else {
            m = ""
        };
        if($("#radio").attr("checked")){
            var n = "合租"
        } else{
            n = ""
        }
        if($(".c:eq(0)").attr("checked")){
            var o = "月付"
        } else{
            o = ""
        }
        if($(".c:eq(1)").attr("checked")){
            var p = "季付"
        } else{
            p = ""
        }
        if($(".c:eq(2)").attr("checked")){
            var q = "半年付"
        } else{
            q = ""
        }
        if($(".c:eq(3)").attr("checked")){
            var r = "年付"
        } else{
            r = ""
        }
        if($("#c").attr("checked")){
            var s = "都可以"
        } else{
            s = ""
        }
        
        $(".textarea").html("小区名称："+a+"<br>区属板块："+b+c+"<br>户型："+d+"室 "+e+"厅 "+f+"卫 "+g+"阳台"+"<br>出租形式："+m+"，"+n+"，"+h+"，"+i+"<br>面积："+j+"平方米"+"<br>租金："+k+"元/月"+"<br>付款方式："+o+"，"+p+"，"+q+"，"+r+"，"+s+"<br>手机号码："+l)
    })
//    submit button

    $(".submit").bind("click",function(){
        var tt = $('.veri1').text();
        if($('.veri1').hasClass('h') || $('.veri2').hasClass('h') || $('.veri3').hasClass('h') || $('.veri-HA').hasClass('h') || $('.veri-RM').hasClass('h') || $('.veri-RP').hasClass('h') || $(".btn").val() == "验证失败" || $(".btn").val() == "待验证"){
//            $('.submit').val("提交失败").css({"background":"#ec6c00"});
//            $('.subwarn').html("部分信息有误或未填写,请完善信息后重新提交");
            alert("提交失败,部分信息有误或未填写,请完善信息后重新提交")
        } else{
            
//            $('.subwarn').html("");
            alert("提交成功");
            $('.submit').val("提交成功").css({"background":"green"}).attr("disabled","true");
        }
    })
})