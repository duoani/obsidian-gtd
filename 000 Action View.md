[[000 Project View|Project View]]

### Active
```dataview
TABLE priority AS "Priority", state AS "State", project AS "Project", due_date AS "DueDate"
FROM #action AND #action/active
SORT priority ASC, start_date ASC
```

### Pending | Available
```dataview
TABLE priority AS "Priority", state AS "State", project AS "Project", due_date AS "DueDate"
FROM #action AND (#action/waiting OR #action/maybe)
SORT state DESC, priority ASC
```

### Completed

```dataview
TABLE priority AS "Priority", state AS "State", project AS "Project", end_date AS "End Date"
FROM #action AND (#action/done OR #action/canceled)
SORT end_date DESC
```