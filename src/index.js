/**
 * Represents todosData.
 * todoItem._id 존재할 경우 특정 _id에 해당하는 todo 조회 / 없으면 전체데이터 조회
 * @property {todoItem[]} todosData - all todos data
 * @param {string} todoItem._id
 */
function getTodos() {}

/**
 * Represents todoItem.
 * @constructor
 * @param {string} _id
 * @param {string} body
 * @param {boolean} completed
 * @param {string} category
 * @param {string[]} tags
 */
function createTodoItem(body, category, tags) {}

/**
 * Represents update todoItem.
 * _id 제외한 모든 컨텐츠 수정
 * category, tags 삭제 가능
 * @param {string} body
 * @param {boolean} completed
 * @param {string} category
 * @param {string[]} tags
 */
function updateTodoItem(body, category, tags) {}

/**
 * Represents delete todoItem.
 * _id로 삭제
 * @param {string} todoItem._id
 */
function deleteTodoItem(_id) {}

/**
 * Represents delete all todos.
 * @augments todosData
 */
function deleteTodosAll() {}
