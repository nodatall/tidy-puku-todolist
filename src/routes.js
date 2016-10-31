const express = require('express')
const router = express()

const taskController = require('./controllers/taskController')

router.get('/', taskController.getAll)
router.post('/add', taskController.add)
router.put('/complete/:id', taskController.markAsComplete)
router.put('/uncomplete/:id'), taskController.markAsIncomplete)
router.put('/edit/:id', taskController.edit)
router.put('/reorder', taskController.reorder)
router.delete('/delete/:id', taskController.remove)

module.exports = router
