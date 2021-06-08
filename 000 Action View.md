[[000 Project View]]

### Active

```dataviewjs
const path = require("path")
require(path.resolve(dv.app.vault.adapter.basePath, "tools/dv-script/action-view-active.js"))(dv)
```

### Pending | Available

```dataviewjs
const path = require("path")
require(path.resolve(dv.app.vault.adapter.basePath, "tools/dv-script/action-view-pending-available.js"))(dv)
```

### Completed

```dataviewjs
const path = require("path")
require(path.resolve(dv.app.vault.adapter.basePath, "tools/dv-script/action-view-completed.js"))(dv);
```