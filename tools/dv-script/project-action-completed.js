const config = require('./config')
const countTasks = require('./task-utils').countTasks

module.exports = function (dv) {
  const rows = dv.pages(`${config.TAG_ACTION_DONE} OR ${config.TAG_ACTION_CANCELED}`)
    .sort(row => row.end_date, "DESC")
    .map(row => {
      const completedTasks = countTasks(row.file.tasks, true)
      const totalTasks = countTasks(row.file.tasks)
      const percent = totalTasks > 0 ? Math.round(completedTasks / totalTasks * 100) : 0
      return [
        row.file.link,
        row.priority,
        row.state,
        row.project,
        totalTasks ? `${completedTasks}/${totalTasks} (${percent}%)` : '',
        row.end_date ? row.end_date.toFormat(config.DATE_FORMAT) : ''
      ]
    })
  dv.table(["Action", "Priority", "State", "Project", "Tasks", "END Date"], dv.array(rows))
}