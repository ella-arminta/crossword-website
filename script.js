var pop_ups = document.querySelectorAll('.pop-up');
var buttons = document.querySelectorAll('button');
var silang = document.querySelectorAll('.silang-soal');
var soal;
// var pop_ups = document.getElementsByClassName('')
for(var i = 0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        for(var i = 0;i<pop_ups.length;i++){
            pop_ups[i].classList.add('hide');
        }
            var no_soal = this.getAttribute('class');
            soal = document.querySelector('div.'+no_soal);
            soal.classList.remove('hide');
            soal.classList.add('w3-animate-top')
    })
}
for(var i = 0;i<silang.length;i++){
    silang[i].addEventListener('click',function(){
    soal.classList.add('hide');
})
}
//yakin mau submit form?
function doConfirm(msg, yesFn, noFn){
    var confirmBox = $("#confirmBox");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".yes,.no").unbind().click(function()
    {
    confirmBox.hide();
});
    confirmBox.find(".yes").click(yesFn);
    confirmBox.find(".no").click(noFn);
    confirmBox.show();
}
//untuk menampilkan jawaban input bener atau tidak
window.onload=function(){
    var submit = document.querySelector('#submitInput');
    submit.addEventListener("click",function(){
        doConfirm("Are you sure you want to submit the answer?", function yes(){ //yakin mau submit?
            for(var i =0;i<inputs.length;i++){ //ya tentukan benar salah
                var input = inputs[i].value.toLowerCase().replace(" ","");
                if(input != list_kunci[i]){
                    kunci[i].innerHTML = "Jawaban: "+list_kunci[i];
                    form_control[i].style.backgroundColor = "#FF0266";
                    form_control[i].style.color = "black";
                    label[i].style.color = "black";
                }else{
                    form_control[i].style.backgroundColor = "white";
                    form_control[i].style.color = "black";
                    label[i].style.color = "black";
                    kunci[i].style.color = "white";
                    kunci[i].innerHTML = " Correct <svg style='color:white' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-check-lg' viewBox='0 0 16 16'><path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z'/></svg>";
                }
            //hilangkan submit
            inputs[i].readOnly= true;
            }
            document.querySelector("form div").style.pointerEvents = "none";
            submit.style.display = "none";
        }, function no(){
         // Do nothing
        });
    })
    
}
var inputs = document.querySelectorAll('input[type~="text"]');
var form_control = document.querySelectorAll(".form-control");
var label = document.querySelectorAll("label");
var kunci = document.querySelectorAll(".form-floating p");
var list_kunci = ['touchscreen','victus','processor','informatics','virtualreality','data','internetofthings','aluminium','foldable','smarttoilet','screenpadplus','roomba','artificialintelligence','zephyrus','pandemik']
