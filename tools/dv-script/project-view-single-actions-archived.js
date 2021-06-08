const config = require('./config')

module.exports = function (dv) {
  dv.table(
    ["Single Action", "State", "Start Date", "End Date", "Archived Date"],
    dv.pages(`${config.TAG_ACTION_ARCHIVED}`)
      .where(p => !p.project)
    .map(p => [
      p.file.link,
      p.state,
      p.start_date ? p.start_date.toFormat(config.DATE_FORMAT) : '',
      p.end_date ? p.end_date.toFormat(config.DATE_FORMAT) : '',
      p.archived_date ? p.archived_date.toFormat(config.DATE_FORMAT) : '',
    ])
  )
}