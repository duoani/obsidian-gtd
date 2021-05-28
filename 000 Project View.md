[[000 Action View|Action View]]

```dataviewjs
dv.table(["Project", "State", "Actions"], dv.array(
  [
   dv.pages("#project")
     .sort(p => p.state)
     .map(p => ({
       project: p.file.link,
	   projectName: p.file.name,
       state: p.state
     })),
   dv.pages("#action")
     .filter(e => e.project) // filter all project-related actions
	 .groupBy(e => e.project) // group by project
     .map(e => ({
       project: e.key,
       actions: (e.rows.filter(r => r.file.etags.includes('#action/done') || r.file.etags.includes('#action/canceled')).length) + '/' + e.rows.length
     }))
  ].reduce((projects, item, index) => {
    if (index === 0) { // projects
      return item.array()
    } else if (index === 1) {
  	const actions = item.array()
  	return projects.map(p => {
  	  var action = actions.find(row => row.project.path === p.projectName)
  	  return [
  	    p.project,
  		p.state,
  	    action ? action.actions : '--'
  	  ]
  	})
    }
  }, {})
))
```

### Single Actions

```dataviewjs
dv.table(
  ["Single Action", "State", "Due Date"],
  dv.pages("#action")
    .where(p => !p.project)
	.map(p => [
	  p.file.link,
	  p.state,
	  p.due_date
	])
)
```
