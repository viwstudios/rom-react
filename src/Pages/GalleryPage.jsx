import React from 'react'
import MainGallery from '../Gallery/MainGallery'
import Navbar from '../Common/Navbar'
import GalleryHero from '../Gallery/GalleryHero'

const GalleryPage = () => {
  return (
    <div>
      <Navbar/>
      <GalleryHero/>
      <MainGallery/>
    </div>

  )
}

export default GalleryPage