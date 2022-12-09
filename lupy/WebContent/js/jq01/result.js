$(document).ready(function(){
	
	/* eg01 버튼 클릭 이벤트 */
	$('#e1btn').click(function(){
		$(location).attr('href', './ex01.html');
		
	});
	
	//파라미터 내용 출력 클릭이벤트
	
	$('#printbtn').click(function(){
		// 할 일:
		//0. 기존 태그 감추고
		$('#fr').stop().slideUp(300, function(){

			//1. 파라미터 전체 꺼내고, 
			var param = $(location).attr('search'); //location 객체의 search 속성값 읽고,
			// ? 제거
			param = param.substring(1);
			//2. 키 값 따라서 잘라내고,
			//연관배열
			var data = {};
			var arr = param.split('&');
			for(var i = 0 ; i < arr.length ; i++ ){
				var tmp = arr[i].split('='); // <== id=Chopper ==>['id', 'Chopper']
				data[tmp[0]] = tmp[1];
				
			}
			
			// 3. 태그에 내용 채워주고
			var val_id = data['id'];
			var val_pw = data['pw'];
			
			$('pid').html(val_id);
			$('ppw').html(val_pw);
			
			//4. 감싸는 태그 보여주고,
			$('#fr').slideDown(500);
		});
	});
});