const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('List of all employee');
});

router.post('/', (req, res, next) => {
    res.send('Create a new employee');
});


router.get('/:id', (req, res, next) => {
    res.send('Get a single employee');
});


router.patch('/:id', (req, res, next) => {
    res.send('Patch a single employee by its ID');
});


router.delete('/:id', (req, res, next) => {
    res.send('Delete a single employee by its ID');
});

module.exports= router;