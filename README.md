#### Link to live Heroku app
[Heroku app](https://shielded-river-27328.herokuapp.com/)

#### Design mockup
![Design mockup](./design/todoMockup.png)

#### Routes
| Path               | Method | Action             |
| ------------------ | ------ | ------------------ |
| /                  | get    | getAll()           |
| /add               | post   | add()              |
| /complete/:id      | put    | markAsComplete()   |
| /incomplete/:id    | put    | markAsIncomplete() |
| /edit/:id          | put    | edit()             |
| /delete/:id        | delete | remove()           |
| /reorder/:id1/:id2 | put    | reorder()          |
