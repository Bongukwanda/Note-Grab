

class Operations:
  
  task_list:list = []
  
  def addTask(self, task: str) -> None:
    self.task_list.append(task)
  
  def getList(self) -> list:
    return self.task_list