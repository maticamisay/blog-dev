import React from 'react'
import ContainerLayout from '../containers/ContainerLayout'
import Post from './Post'

const MasVistos = () => {
  return (
    <ContainerLayout title={'Hola'} btnTitle={'Ver más'}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />

    </ContainerLayout>
  )
}

export default MasVistos