[[000 Project View]] | [[000 Action View]]

# Project 1

state:: #project/active
start_date::
end_date::

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
