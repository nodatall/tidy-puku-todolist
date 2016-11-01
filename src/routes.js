const express = require('express')
const router = express()

const taskController = require('./controllers/taskController')

router.post('/add', taskController.add)
// router.put('/complete/:id', taskController.markAsComplete)
// router.put('/incomplete/:id', taskController.markAsIncomplete)
router.post('/edit/:id', taskController.edit)
// router.put('/reorder', taskController.reorder)
// router.delete('/delete/:id', taskController.remove)
router.get('/getAll', taskController.getAll)
router.get('*', taskController.renderApp)

module.exports = router
