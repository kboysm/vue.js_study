const mongoose = require('mongoose')
const cfg = require('../../config/conf')
const crypto = require('crypto')
mongoose.set('useCreateIndex', true)
const userSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  age: { type: Number, default: 1 },
  id: { type: String, default: '', unique: true, index: true },
  pwd: { type: String, default: '' },
  lv: { type: Number, default: 2 }, //add
  inCnt: { type: Number, default: 0 }, //add
  retry: { type: Number, default: 0 },
  img: { type: String, default: '' }
})

const User = mongoose.model('User', userSchema)
// User.collection.dropIndexes({ name: 1})

User.findOne({ id: cfg.admin.id })
  .then((r) => {
    // console.log(r)
    if (!r) return User.create({ id: cfg.admin.id, pwd: cfg.admin.pwd, name: cfg.admin.name, lv: 0 })
    // if (r.lv === undefined) return User.updateOne({ _id: r._id }, { $set: { lv: 0, inCnt: 0 } }) // 임시.. 관리자 계정 레벨 0으로..
    return Promise.resolve(r)
  })
  .then((r) => {
    if (r.pwd !== cfg.admin.pwd) return Promise.resolve(null)
    console.log(`admin:${r.id} created!`)
    const pwd = crypto.scryptSync(r.pwd, r._id.toString(), 64, { N: 1024 }).toString('hex')
    return User.updateOne({ _id: r._id }, { $set: { pwd } })
  })
  .then(r => {
    if (r) console.log('pwd changed!')
  })
  .catch((e) => {
    console.error(e.message)
  })

// User.findOne({ id: 'lv2' })
//     .then((r) => {
//       if (!r) return User.create({ id: 'lv2', pwd: '1234', name: 'lv2', lv: 2 })
//       return Promise.resolve(null)
//     })
//     .then((r) => {
//       if (r) console.log(`admin:${r.id} created!`)
//     })
//     .catch((e) => {
//       console.error(e.message)
//     })

module.exports = User