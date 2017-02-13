exports.render = path => {
  let isTasks = path === "tasks" ? "active" : "";
  let isTaskForm = path === "taskForm" ? "active" : "";
  let isUser = path === "user" ? "active": "";
  return `
    <div class="tabs-striped tables-color-calm">
      <div class="tabs">
        <a data-path="tasks" class="tab-item ${isTasks}">
          <i class="icon ion-home"></i>
        </a>
        <a data-path="taskForm" class="tab-item ${isTaskForm}">
          <i class="icon ion-compose"></i>
        </a>
        <a data-path="user" class="tab-item ${isUser}">
          <i class="icon ion-android-person"></i>
        </a>
        <a data-logout class="tab-item">
          <i class="icon ion-log-out"></i>
        </a>
      </div>
    </div>`;
};
