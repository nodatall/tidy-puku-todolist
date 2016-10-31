# To Do List

### Specifications

- [X] Create design mockup using Figma
- [ ] Learn how to setup and use React
- [ ] Deepen understanding of Express
- [ ] Postgres database
- [ ] Responsive design

As a user, I can manipulate tasks in the following ways:
- [ ] Create
- [ ] Edit
- [ ] Delete
- [ ] Check off as complete

#### Stretch goals
- [ ] Rearrange tasks by dragging
- [ ] Deploy to Heroku

#### Design mockup
![Design mockup](./design/todoMockup.png)

#### Routes
| Path            | Method | Action             |
| --------------- | ------ | ------------------ |
| /               | get    | getAll()           |
| /add            | post   | add()              |
| /complete/:id   | put    | markAsComplete()   |
| /uncomplete/:id | put    | markAsIncomplete() |
| /edit/:id       | put    | edit()             |
| /delete/:id     | delete | remove()           |
| /reorder        | put    | reorder()          |
