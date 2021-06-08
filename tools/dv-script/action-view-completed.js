const config = require('./config')
const countTasks = require('./task-utils').countTasks

module.exports = function (dv) {
  // all archived projects
  const archivedProjectMap = dv.pages(config.TAG_PROJECT_ARCHIVED)
    .array()
    .map(p => p.file.name)
    .reduce((obj, name) =>{obj[name] = 1; return obj}, {})

  const rows = dv.pages(`(${config.TAG_ACTION_DONE} OR ${config.TAG_ACTION_CANCELED}) AND -${config.TAG_ACTION_ARCHIVED}`)
    .filter(row => !archivedProjectMap[row.project.path])
    .sort(row => row.end_date, "desc")
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