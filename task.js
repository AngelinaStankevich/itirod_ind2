// task.js

class Task {
  constructor(title, description, startDate, endDate) {
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.subTasks = [];
  }

  // Метод для добавления дочерней подзадачи
  addSubTask(subTask) {
    this.subTasks.push(subTask);
  }
}

class ExecutableTask extends Task {
  constructor(title, description, startDate, endDate, completionPercentage, isCompleted) {
    super(title, description, startDate, endDate);
    this.completionPercentage = completionPercentage;
    this.isCompleted = isCompleted;
  }
}

export { Task, ExecutableTask }; // Экспорт обоих классов
