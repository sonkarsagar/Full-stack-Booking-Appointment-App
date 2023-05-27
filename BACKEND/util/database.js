const Sequelize=require('sequelize')

const sequelize=new Sequelize('new_schema','root','SagarS123@',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports=sequelize