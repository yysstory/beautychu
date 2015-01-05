$(function(){
  //$('.footer').load('../common/footer.html');
  
  $('#btnLogin').click(function(event){
    $.post('../json/auth/login.do'
        , {
          email : $('#uid').val(),
          password : $('#pwd').val(),
          save : $('#save').is(':checked')
        }
        , function(data){
        	console.log(data);
        	console.log(data.loginUser)
          if (data.status == 'success') {
        	  
            location.href = 'app.html';
            
          } else {
            alert('로그인 아이디 또는 암호가 맞지 않습니다.');
            $('#pwd').val('');
          }
        }
        , 'json');
  });
});



























