import React from 'react'
import { Navbar } from '../../ui/components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'



export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="marvel" element={<MarvelPage/>} />
            <Route path="dc" element={<DcPage/>} />
            <Route path="/" element={<Navigate to="/marvel" />} />
            <Route path="search" element={<SearchPage/>} />
            <Route path="hero/:id" element={<HeroPage/>} />
        </Routes>
    </>
  )
}
