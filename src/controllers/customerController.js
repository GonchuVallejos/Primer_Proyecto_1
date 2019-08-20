const controller = {};
const $ = require('jquery');
const dt = require('datatables.net');
const datatabledt = require('datatables.net-dt');

controller.list = (req,res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuarios',(err, usuarios) => {
            if (err){
                res.json(err);
            }
            else
            {
                res.render('customers', {
                    data: usuarios
                });  
            }
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usuarios SET ?', [data], (err, row) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM usuarios WHERE ID_Usuario = ?',[id], (err, row) => {
            res.redirect('/');
        });
    });
};

controller.edit = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuarios WHERE ID_Usuario = ?', [id], (err,  usuarios) => {
            res.render('customers_edit', {
                data: usuarios[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const id = req.params.id;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE usuarios SET ? WHERE ID_Usuario = ?', [newCustomer, id], (err, row) => {
            res.redirect('/');
        })
    })
};

controller.print = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuarios WHERE ID_Usuario = ?', [id], (err,  usuarios) => {
            res.render('customers_print', {
                data: usuarios[0]
            });
        });
    });
};

module.exports = controller;