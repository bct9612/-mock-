import Mock from 'mockjs'
import actile from './actile.json' 

Mock.mock('/mock/actile',{code:200,data:actile})