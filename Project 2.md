[[000 Project View]] | [[000 Action View]]

# Project2

state:: #project/active
start_date::
end_date::

### Active

```dataview
TABLE state AS "State", due_date AS "Due Date"
FROM #action AND #action/active
WHERE project = this.file.link
SORT priority ASC, start_date ASC
```

### Pending | Available

```dataview
TABLE state AS "State", due_date AS "Due Date"
FROM #action AND (#action/waiting OR #action/maybe)
WHERE project = this.file.link
SORT priority ASC, start_date ASC
```

### Completed

```dataview
TABLE state AS "State", due_date AS "Due Date"
FROM #action AND (#action/done OR #action/canceled)
WHERE project = this.file.link
SORT due_date DESC
```
