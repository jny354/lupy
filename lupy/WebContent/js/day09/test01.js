/*
	비밀번호 형식
	==>
	첫문자는 소문자로 시작하고,
	소문자, 대문자, 숫자, 특수문자(@#$%*_!?)를 각각 한개 이상 포함해야 한다.
*/
	
	
	document.getElementById('rbtn').onclick = function(){
		document.getElementById('id').value = '';
		document.getElementById('pw').value = '';
	};

	document.getElementById('lbtn').onclick = function(){
		// 할 일
		// 1. 입력내용 읽어오고
		var sid = document.frm.id.value;
		var spw = document.frm.pw.value;
		
		// 2. 데이터 유효성 검사하고
		// 2-1. 입력되어있는지 검사하고,
		if(!sid){
			// 아이디가 입력이 안된경우
			document.frm.id.focus();
			return;
			
		}
		if(!spw){
			// 비밀번호가 입력이 안된경우
			document.frm.pw.focus();
			return;
			
		}
	// 2-2. 형식에 맞게 입력되었는지 검사하고
	// 아이디 형식 : 첫 문자는 소문자로 하고, 알파벳과 숫자로 이루어진 5글자 이상 10글자 이하
	var idPattern = new RegExp('^[a-z][a-zA-Z0-9]{5,10}$');
	var idResult = idPattern.test(sid);
	
	if(!idResult){
		//아이디가 형식에 맞지 않은 경우
		document.frm.id.value = '';
		document.frm.id.focus();
		return;
		
	}
	
	// 비밀번호 형식 검사 : 숫자 '12345' 만 허용하는 것으로 한다.
	var pwPattern = /^12345$/;
	var pwResult = pwPattern.test(spw);
	
	if(!pwResult){
		//비밀번호가 형식에 맞지 않은 경우
		document.getElementById('pw').value = '';
		document.getElementById('pw').focus();
		return;
		
	}
	//이름 유효성 검사
	var sname = document.frm.name.value;
	if(!sname){
		alert('이름을 입력해주세요!');
		document.getElementById('name').focus();
		return;
	}
	
	var namePattern = /^[가-힣]{2,10}$/;
	var nameResult = namePattern.test(sname);
	if(nameResult == false){
		alert('이름 입력형식이 맞지 않습니다.');
		document.frm.name.value = '';
		document.frm.name.focus();
		return;
	}
	
	//이메일 유효성 검사
	var smail = document.getElementById('mail').value;
	if(!smail){
		alert('이메일을 입력해주세요 :)');
		document.frm.mail.focus.focus();
		return;
	}
	var mailPattern = /^[a-z][a-zA-Z0-9_.#]{5,9}@[a-z]{2,10}[.][a-z]{2,3}(\.[a-z]{0,2})?$/;

	var mailResult = mailPattern.test(smail);
	if(mailResult == false){
		alert('메일 입력형식이 맞지 않습니다.');
		document.frm.mail.value = '';
		document.frm.mail.focus();
		return;
	}
		
	//전화번호 유효성검사
	var stel = document.getElementById('tel').value;
	if(!stel){
		//전화번호가 입력이 안된경우
		alert('전화번호 입력은 필수입니다.');
		document.getElementById('tel').focus();
		return;
	}
	//패턴 만들기
	var telPattern = new RegExp('/^0[0-9]{1,2}-\d{3,4}-\d{4}$/')
	
	//검사
	var telResult = telPattern.test(stel);
	if(!telResult){
		alert('전화번호 형식이 잘못됐습니다.');
		document.getElementById('tel').value = '';
		document.getElementById('tel').focus();
		return;
	}
	
	if(confirm('전송할까요???')){
		alert('전송 진행 중 입니다.');
		
	}
	
	//	if(!(idResult && pwResult))
			// 아이디와 비밀번호중 형식에 맞지 않은 것이 있는 경우
		
//		alert(idResult);
		
		// 비밀번호 형식 : 
		// 3. 폼 전송하고
		
//		document.frm.submit();
	};
	

