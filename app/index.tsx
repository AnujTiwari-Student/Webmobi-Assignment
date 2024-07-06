import { Redirect, Stack } from 'expo-router'
import React from 'react'

function index() {
  return <Redirect href={'/Home'} />
}

export default index
