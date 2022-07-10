import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { todosData } from '../data/todos'
import Todo from './Todo'

export default function TodoList() {
  return (
    <FlatList 
      data={todosData}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <Todo {...item}/>}
    />
  )
}
