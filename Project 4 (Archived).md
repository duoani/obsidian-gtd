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
