var storyWidth;
var storyHeight;
var storyIdent ;


function resizeStory(){

    var stageWidth = $('#stage').width()
    var stageHeight = $('#stage').height()

    var widthFactor = stageWidth / storyWidth;
    var heightFactor = stageHeight / storyHeight;

    var scaleFactor = widthFactor;

    if ( widthFactor > heightFactor ){
        scaleFactor = heightFactor;
    } 

    $('#story').css('-webkit-transform', 'scale(' + scaleFactor + ')');
    $('#story').css('transform', 'scale(' + scaleFactor + ')');
    var scaledStoryWidth = storyWidth * scaleFactor;
    var scaledStoryHeight = storyHeight * scaleFactor;

    $('#story').css('left', parseInt((stageWidth-scaledStoryWidth) / 2))
    //$('#story').css('top', parseInt((stageHeight-scaledStoryHeight) / 2))
}


function configureDimensions(){
    var prescribedWidth = $('#story').attr('width') || 1024;
    $('#story').width(prescribedWidth);
    storyWidth = $('#story').width()

    var prescribedHeight = $('#story').attr('height') || 810;
    $('#story').height(prescribedHeight);
    storyHeight = $('#story').height()
}


function onLoad(){

    configureDimensions();
resizeStory();
    $(window).on('resize', resizeStory);
  

}

$(onLoad);

jQuery(document).ready(function(){
    
	$(".tools ul li").on("click", "a", function () {
		$('#content').css({"z-index":"9999999" , "opacity":"1"});  
		$('.close-canvas').css("display","block"); 
	});
		
	$("body").on("click", ".close-canvas", function () {
		$('.close-canvas').css("display","none");     
		$('#content').css({"z-index":"0" , "opacity":"0"});
        $('.tools_logo .tools ul li').removeClass('selected');
        $('.tools_logo .colors').fadeOut()
	});		
				
	$("body").on("click", ".trial a.pink", function () {
		$('.pink_stk').toggle();
	});	
	
	$("body").on("click", ".trial a.green", function () {
		$('.green_stk').toggle();
	});			
				
	$("body").on("click", ".close_btn", function () {
		$('.popupwrap').hide();
	});
	
	$("body").on("click", ".link1", function () {
	   $('.popupwrap1').show();
	});
	
	$("body").on("click", ".link2", function () {
	   $('.popupwrap2').show();
	});
	
	$("body").on("click", ".link3", function () {
	   $('.popupwrap3').show();
	});
	
	$("body").on("click", ".link4", function () {
	   $('.popupwrap4').show();
	});
	
	$("body").on("click", ".link5", function () {
	   $('.popupwrap5').show();
	});
	
	$("body").on("click", ".link6", function () {
	   $('.popupwrap6').show();
	});
	
	$("body").on("click", ".bt1", function () {
	   $('.popupwrap7').show();
	});
	$("body").on("click", ".bt2", function () {
	   $('.popupwrap8').show();
	});
	$("body").on("click", ".bt3", function () {
	   $('.popupwrap9').show();
	});
	$("body").on("click", ".bt4", function () {
	   $('.popupwrap10').show();
	});
	$("body").on("click", ".bt5", function () {
	   $('.popupwrap11').show();
	});
	$("body").on("click", ".bt6", function () {
	   $('.popupwrap12').show();
	});
	$("body").on("click", ".bt7", function () {
	   $('.popupwrap13').show();
	});
	$("body").on("click", ".bt8", function () {
	   $('.popupwrap14').show();
	});
	
	
			
			
  $("body").on("click", ".green_bg", function () { 
		$(".cliffs10 p span").css("background","#3dfa44");
  });	
  		
		
		
	$("body").on("click", ".bt9", function () {
	   $('.popupwrap15').show();
	});
	$("body").on("click", ".bt10", function () {
	   $('.popupwrap16').show();
	});
	$("body").on("click", ".bt11", function () {
	   $('.popupwrap17').show();
	});
	$("body").on("click", ".bt12", function () {
	   $('.popupwrap18').show();
	});
	$("body").on("click", ".bt13", function () {
	   $('.popupwrap19').show();
	});
	$("body").on("click", ".bt14", function () { 
	   $('.popupwrap20').show();
	});
	$("body").on("click", ".bt15", function () {
	   $('.popupwrap21').show();
	});
	
	$("body").on("click", ".info_btn3", function () {
	   $('.popupwrap22').show();
	});
	$("body").on("click", ".info_btn2", function () {
	   $('.popupwrap23').show();
	});
	$("body").on("click", ".info_btn1", function () {
	   $('.popupwrap24').show();
	});
	$("body").on("click", ".info_consumption", function () {
	   $('.popupwrap25').show();
	});
    $("body").on("click", ".bt16", function () {
	   $('.popupwrap26').show();
	});
	$("body").on("click", ".popbtn1", function () {
	   $('.popupwrap27').show();
	});	
	$("body").on("click", ".popbtn2", function () {
	   $('.popupwrap28').show();
	});	
	$("body").on("click", ".popbtn3", function () {
	   $('.popupwrap29').show();
	});	
	$("body").on("click", ".popbtn4", function () {
	   $('.popupwrap30').show();
	});
	$("body").on("click", ".popbtn5", function () {
	   $('.popupwrap31').show();
	});
	$("body").on("click", ".popbtn6", function () {
	   $('.popupwrap32').show();
	});	
	
	$("body").on("click", ".bt17", function () {
	   $('.popupwrap33').show();
	});
	
	$("body").on("click", ".bt18", function () {
	   $('.popupwrap34').show();
	});	
	
	$("body").on("click", ".bt19", function () {
	   $('.popupwrap35').show();
	   $('.popupwrap34').hide();
	});	
	$("body").on("click", ".bt20", function () {
	   $('.popupwrap36').show();
	   $('.popupwrap35').hide();
	});	
	$("body").on("click", ".bt21", function () {
	   $('.popupwrap37').show();
	   $('.popupwrap36').hide();
	});	
	
	$("body").on("click", ".bt22", function () {
	   $('.popupwrap37').hide();
	});	
	
	$("body").on("click", ".bt23", function () {
	   $('.popupwrap38').show();
	});	
	
	$("body").on("click", ".bt24", function () {
	   $('.popupwrap39').show();
	});
	$("body").on("click", ".bt25", function () {
	   $('.popupwrap40').show();
	});
	$("body").on("click", ".bt26", function () {
	   $('.popupwrap41').show();
	});
	$("body").on("click", ".bt27", function () {
	   $('.popupwrap42').show();
	});
	$("body").on("click", ".bt28", function () {
	   $('.popupwrap43').show();
	});
	$("body").on("click", ".bt29", function () {
	   $('.popupwrap44').show();
	});
	
	
	
				
			});