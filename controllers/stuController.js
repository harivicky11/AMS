const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Student = mongoose.model('Student');

// ========================
// Routes
// ========================

router.get('/', (req, res) => {
    res.render("stu/addOrEdit", {
        viewTitle : "Insert Student"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
});

function insertRecord(req, res) {
    var stu = new Student();
    stu.fullName = req.body.fullName;
    stu.classGrade = req.body.classGrade;
    stu.month = req.body.month;
    stu.year = req.body.year;
    stu.attCount = req.body.attCount;
    stu.save((err, doc) => {
        if(!err)
            res.redirect('stu/list');
        else {
            console.log('Error during insertion ' + err);
        }
    });
}

function updateRecord(req, res) {
    Student.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('stu/list'); }
        else
            console.log('error during updation ' + err);
    });
}

router.get('/list', (req, res) => {
    Student.find((err, docs) => {
        if(!err) {
            res.render("stu/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list ' + err);
        }
    });
});

router.get('/:id', (req, res) => {
    Student.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("stu/addOrEdit", {
                viewTitle: "Update Attendance",
                stu: doc
            })
        }
    })
})

router.get('/delete/:id', (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/stu/list');
        }
        else {
            console.log('Error during deletion ' + err);
        }
    })
})

module.exports = router;