/**
 * Created by chen on 2018/3/9.
 */

$(function () {

    let data=[];
    let nextid=0;

    if(localStorage.data){
        data=JSON.parse(localStorage.data);
        nextid=Number(localStorage.nextid);
    }

    if(data.length>0){
        $('.recent').show();
    }else if(data.length=0){
        $('recent').hide();
    }

    let recentList=$('.recentList');
    function rander() {
        let str="";
        $(data).each(function (index) {
            str+=`<li>
                    <a href="tokyo.html">
                        <div class="recentWhere">${this}</div>
                        <div class="recentTime"></div>
                    </a>
                </li>`;
        });
        recentList.html(str);
        localStorage.data=JSON.stringify(data);
        localStorage.nextid=nextid;
    }
    rander();



    //点击搜索框
    $('input').focus(function () {
        $(this).next().next().text("");
    }).blur(function () {
        if($(this).val()==""){
            $(this).next().next().text("请选择您的旅行地点");
        }
    });

    //跳转页面
    $('footer').click(function () {
        if($('input').eq(0).val()){
            window.location.href = "tokyo.html";
            let arr=$('input').eq(0).val();
            data.push(arr);
            $('input').eq(0).val("");
            rander();
        }
    });

    //清除
    $('.clear').click(function () {
        data=[];
        recentList.html("").hide();
        rander();
    })

});
