[[000 Project View]] | [[000 Action View]]

# Project 1

state:: #project/active
start_date:: 2020-12-01
end_date:: 2021-11-12
due_date::2021-05-01

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
