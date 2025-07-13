import React from 'react'
import NavbarComponent from '../navbarComponent'
import FooterComponent from '../FooterComponent'

const HomeLayouts = ({ childern }) => {
    return (
        <>
            <NavbarComponent />
            
            {childern}

            <FooterComponent />
        </>
    )
}
export default HomeLayouts