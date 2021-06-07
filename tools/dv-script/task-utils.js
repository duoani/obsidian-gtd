function countTasks (tasks, completed) {
  let total = 0
  tasks.forEach(task => {
    total += completed ? (task.completed ? 1 : 0) : 1
    total += countTasks(task.subtasks, completed)
  })
  return total
}
exports.countTasks = countTasks