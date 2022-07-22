let kakao = document.querySelector(".btn_area");

kakao.addEventListener('click', () => {
    Window.Kakao.init("b2f40460bfbcf51ae3063f91dbeb53d6");
    Window.kakao.Auth.login({
        scope: 'profile_nickname,account_email, gender, age_range',
        success: function (authObj) {
            console.log(authObj);
            Window.kakao.API.request({
                url: '/v2/user/me',
                success: res => {
                    const kakao_account = res.kakao_account;
                    console.log(kakao_account);
                }
            });

        }
    });
})
