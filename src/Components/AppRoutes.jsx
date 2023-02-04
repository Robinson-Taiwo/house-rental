import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contacts from './Contacts'
import Home from './Home'
import Landlord from './Landlord'
import Tenants from './Tenants'

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Landlord' element={<Landlord />} />
                <Route path='/Tenants' element={<Tenants />} />
                <Route path='/Contact' element={<Contacts />} />
            </Routes>


        </div>
    )
}

export default AppRoutes
