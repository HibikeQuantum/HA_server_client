var mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
    {
      name: String,
      email: String,
      phone: String
    });
// const kitty = new Cat({name: 'Zildjian'});
// kitty.save().then(() => console.log('meow'));

module.exports = mongoose.model('User', mySchema);

// let a = {
//   "name": "이정도",
//   "email": "lee.jungdo@gmail.com",
//   "phone": "010-3192-2910",
// };

// 유저의 이름, 이메일, 모바일은 korean json api 를
// 이용하여 각 개인 정보를 받아 그립니다.