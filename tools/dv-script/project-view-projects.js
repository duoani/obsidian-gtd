const config = require('./config')

module.exports = function (dv) {
  const queryRows = () => {
    const projects = dv.pages(`${config.TAG_PROJECT_ACTIVE} OR ${config.TAG_PROJECT_DONE}`)
      .sort(p => p.state)
      .array()
    
    const actions = dv.pages(config.TAG_ACTION)
      .filter(e => e.project) // filter all project-related actions
      .groupBy(e => e.project) // group by project
      .map(e => {
        const activeActions = e.rows.filter(r => r.file.tags.includes(config.TAG_ACTION_ACTIVE)).length
        const completedActions = e.rows.filter(r => r.file.tags.includes(config.TAG_ACTION_DONE) || r.file.tags.includes(config.TAG_ACTION_CANCELED)).length
        const totalActions = e.rows.length
        const percent = totalActions > 0 ? Math.round(completedActions / totalActions * 100) : 0
        return {
          project: e.key,
          actions: totalActions ? (activeActions ? `${completedActions}/${totalActions} (${percent}%)` : 'Blocked') : '',
        }
      })
      .array()
    
    const resultRows = projects.map(p => {
      var action = actions.find(row => row.project.path === p.file.name)
      return [
        p.file.link,
        p.state,
        action ? action.actions : 'N/A',
        p.start_date ? p.start_date.toFormat(config.DATE_FORMAT) : '',
        p.due_date ? p.due_date.toFormat(config.DATE_FORMAT) : ''
      ]
    })
    
    return dv.array(resultRows)
  }
  
  dv.table(["Project", "State", "Actions", "Start Date", "Due Date"], queryRows())
}
