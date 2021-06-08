const config = require('./config')

module.exports = function (dv) {
  dv.table(
    ["Single Action", "State", "Due Date"],
    dv.pages(`${config.TAG_ACTION} AND -${config.TAG_ACTION_ARCHIVED}`)
      .where(p => !p.project)
    .map(p => [
      p.file.link,
      p.state,
      p.due_date ? p.due_date.toFormat(config.DATE_FORMAT) : ''
    ])
  )
}