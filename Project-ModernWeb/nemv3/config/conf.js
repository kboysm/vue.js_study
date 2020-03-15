module.exports = {
  recaptchaSecretKey:'',
  dbUrl: 'mongodb://localhost:27017/nemv',
  // dbUrl: 'mongodb://localhost:27017/nemv',
  admin: {
    id: 'LSM',
    pwd: '1234',
    name: '관리자'
  },
  jwt: {
    subject:'LSM_Token',
    secretKey: 'abcdefg',
    issuer: 'xxx.com',
    algorithm: 'HS256',    
    expiresIn: 60 * 3, // 기본 3분
    expiresInRemember: 60 * 60 * 24 * 6 ,// 기억하기 눌렀을 때 6일
    expiresInDiv: 3, // 토큰시간 나누는 기준
  }
}