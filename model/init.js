const nodeFetch = require('node-fetch');
const User = require('./user')

nodeFetch('https://koreanjson.com/users')
    .then((res) => res.json())
    .then((json) => {
      let newJsonArr = [];
      for ( let i =0; i < json.length; i++){
        let obj = {};
        ( {name, email, phone} = json[i] );
        obj.name = name;
        obj.email = email;
        obj.phone = phone;
        newJsonArr.push(obj);
      }

      User.insertMany(newJsonArr, (error, docs) =>{
        if (error) console.log(error)
        console.log(docs, "입력된   데이터에요 주인님!!");

      })
          .then(User.findOne({id: 1}, (err, doc) => {
            if (err) {
              console.log(err)
            }
            console.log("제대로 넣었을까요? 여기까지 왔으면 좋은거에요", doc)
          }));

    });

// let a = {
//   "name": "이정도",
//   "email": "lee.jungdo@gmail.com",
//   "phone": "010-3192-2910",
// };