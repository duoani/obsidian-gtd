const tags = require('./config')

module.exports = function (dv) {
  const queryRows = () => {
    const projects = dv.pages(config.TAG_PROJECT)
      .sort(p => p.state)
      .map(p => ({
        project: p.file.link,
        projectName: p.file.name,
        state: p.state
      }))
      .array()
    
    const actions = dv.pages(config.TAG_ACTION)
      .filter(e => e.project) // filter all project-related actions
      .groupBy(e => e.project) // group by project
      .map(e => ({
        project: e.key,
        actions: (
        e.rows.filter(r => r.file.econfig.TAG_includes(config.TAG_ACTION_DONE) || r.file.econfig.TAG_includes(config.TAG_ACTION_CANCELED)).length) +
        '/' +
        e.rows.length
      }))
      .array()
    
    const resultRows = projects.map(p => {
      var action = actions.find(row => row.project.path === p.projectName)
      return [
        p.project,
        p.state,
        action ? action.actions : '--'
      ]
    })
    
    return dv.array(resultRows)
  }
  
  dv.table(["Project", "State", "Actions"], queryRows())
}