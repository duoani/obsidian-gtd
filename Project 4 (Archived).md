[[000 Project View]] | [[000 Action View]]

# Project4

state:: #project/archived
start_date:: 2021-01-01
end_date:: 2021-03-04
archived_date:: 2021-06-01


### Active

```dataviewjs
const path = require("path")
require(path.resolve(dv.app.vault.adapter.basePath, "tools/dv-script/project-action-active.js"))(dv)
```

### Pending | Available

```dataviewjs
const path = require("path")
require(path.resolve(dv.app.vault.adapter.basePath, "tools/dv-script/project-action-pending-available.js"))(dv)
```

### Completed

```dataviewjs
const path = require("path")
require(path.resolve(dv.app.vault.adapter.basePath, "tools/dv-script/project-action-completed.js"))(dv)
```

```dataviewjs
const archivedProjectMap = dv.pages('#project/archived').array().map(p => p.file.name).reduce((obj, name) =>{obj[name] = 1; return obj}, {})
// console.log(archivedProjectMap)
const actions = dv.pages('#action/done OR #action/cancelled').filter(row => !archivedProjectMap[row.project.path])
console.log(actions)
```