/**
 * Created by chen on 2018/3/9.
 */
$(function () {
    let isHeart=true;
    $('.heartIcon').click(function () {
        if(isHeart){
            $(this).css({'transform':'scale(1.25)','color':'#77c0cd'});
        }else {
            $(this).css({'transform':'scale(1)','color':'#e7e7e7'});
        }
        isHeart=!isHeart;
    })
})