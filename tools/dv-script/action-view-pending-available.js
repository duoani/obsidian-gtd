const config = require('./config')
const countTasks = require('./task-utils').countTasks

module.exports = function (dv) {
  const rows = dv.pages(`${config.TAG_ACTION_WAITING} OR ${config.TAG_ACTION_MAYBE}`)
    .sort(row => row.priority)
    .sort(row => row.state, "desc")
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
        row.due_date ? row.due_date.toFormat(config.DATE_FORMAT) : ''
      ]
    })
  dv.table(["Action", "Priority", "State", "Project", "Tasks", "Due Date"], dv.array(rows))
}