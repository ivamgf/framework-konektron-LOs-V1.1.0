// Utils file

// Variables
var navbar = require('./header').navbar;
var footer = require('./footer').footer;

// Const
const project = { 
                title: 'Framework-Konektron-LOs V1.1.0',
                description: 'Framework for development and design of learning objects',
                version: '1.1.0',
                header: navbar.nav,
                footer: footer.foot
            };

module.exports.project = project;