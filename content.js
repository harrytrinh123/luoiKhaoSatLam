window.onload = () => {
    $(".caption-subject").append("&nbsp<button id='ksNhanh'>Khảo sát nhanh</button>");
    khaoSatNhanh();
}
function khaoSatNhanh() {
    $("#ksNhanh").click(function(){
        $("label:contains('D. Đồng ý') input").each(function() {
            $(this).attr('checked', 'checked');
        });
        $(".input-ykien").text("Không có ý kiến");
        $("input:submit").click();
    });
}