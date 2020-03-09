const mongoose = require('mongoose')
const cfg = require('../../config/conf')
const siteSchema = new mongoose.Schema({
  title: { type: String, default: 'NEMV', index: true },
  copyright: { type: String, default: '© 2018 nemv' },
  dark: { type: Boolean, default: false }
})
 const Site = mongoose.model('Site', siteSchema)
 Site.findOne()
  .then(r => {
    if (!r) return Site.create({title:'기본타이틀'})
    return Promise.resolve(null)
  })
  .then(r => {
    if (r) console.log(`${r.title} site is created`)
  })
  .catch(e => console.error(e.message))
 module.exports = Site