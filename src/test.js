// 실패코드

const onClickCart = (book) => {
        if (uid) {
            get(ref(db, `cart/${uid}/${book.isbn}`))
                .then(snapshot => {
                    if (snapshot.exists()) {
                        alert('장바구니에 이미 존재함!');

                    } else {
                        const date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
                        set(ref(db, `cart/${uid}/${book.isbn}`), { ...book.date });
                        alert('장바구니 추가 성공!');
                    }
                });

        } else {
            // 로그인 이동
            navi('/login');
        }
    }



    //성공코드

    const onClickCart = (book) => {
    if (uid) {
      get(ref(db, `cart/${uid}/${book.isbn}`))
      .then(snapshot=>{
        if(snapshot.exists()) {
          alert('장바구니에 이미 존재합니다.');
          
        } else {
         //장바구니 넣기
        const date = moment(new Date()).format("YYYY-MM-DD HH:mm-ss");
        set(ref(db,`cart/${uid}/${book.isbn}`), {...book, date});
        alert("장바구니에 추가되었습니다."); 
        }
      });      
    } else {
      navi("/login");
    }
  }