import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import CategoryCard from './CategoryCard'
import { useDispatch, useSelector } from 'react-redux'
import { allCategories, getCategories } from '../store/slices/categorySlice'

const Categories = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  const categories = useSelector(allCategories)

  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
    >

      {categories.length > 0 && categories.map(category => <CategoryCard key={category.id} imgUrl={category.img} title={category.name} />)}
    </ScrollView>
  )
}

export default Categories