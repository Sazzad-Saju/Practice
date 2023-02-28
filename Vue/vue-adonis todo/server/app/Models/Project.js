'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
    user() {
        return this.belongsTo('App/Models/User')
    }
    tasks() {
        return this.hasMany('App/Models/Task'); //here I had error 'app/Models/Task' not app it is App!
    }
}

module.exports = Project
