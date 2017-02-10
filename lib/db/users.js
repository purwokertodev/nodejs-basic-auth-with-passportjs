'use strict';

let userDatas = [
  {'username': 'wuriyanto', 'password': '12345', 'displayName': 'Wuriyanto Musobar'},
  {'username': 'walker', 'password': '12345', 'displayName': 'Walker Ahmad'}
];

class User {
  constructor(username, password, displayName){
    this.username = username;
    this.password = password;
    this.displayName = displayName;
  }

  isValidPassword(password){
    return this.password === password;
  }
}

module.exports.findByUsername = function(username, cb){
  let userData = '';
  for(let i=0;i<userDatas.length;i++){
    if(userDatas[i].username === username){
      userData = userDatas[i];
      break;
    }

  }
  let user =  new User(userData.username, userData.password, userData.displayName);
  cb(user);
};
