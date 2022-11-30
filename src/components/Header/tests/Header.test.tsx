import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Header from "../../Header/Header";
import { BrowserRouter } from "react-router-dom";


describe('Testing en home', ()=>{
    test('Navbar appears on render', async()=> {
        const user = userEvent.setup()
        render(<Header/>, {wrapper: BrowserRouter}) 

        // const homeBtnLink = screen.getByRole('link', { name: 'Home'}) 
        const homeBtnLink = screen.getByRole('link', { name: /home/i })
        const genreBtnLink = screen.getByRole('link', { name: /géneros/i })
        const filmBtnLink = screen.getByRole('link', { name: /películas/i })
        const seriesBtnLink = screen.getByRole('link', { name: /series/i })
        const movieFuntitle = screen.getByAltText('Moviefun - Tu cine en casa')

        expect(homeBtnLink).toBeInTheDocument()
        expect(genreBtnLink).toBeInTheDocument()
        expect(filmBtnLink).toBeInTheDocument()
        expect(seriesBtnLink).toBeInTheDocument()
        expect(movieFuntitle).toBeInTheDocument()

        await user.click(homeBtnLink)
                
        expect(homeBtnLink).toHaveClass('active')
        
        await user.click(genreBtnLink)
        
        expect(homeBtnLink).not.toHaveClass('active')
        expect(genreBtnLink).toHaveClass('active')
    }) 
})

// import { render, screen } from '@testing-library/react'
// import { BrowserRouter } from 'react-router-dom'
// import { render, screen } from '../../../test-utils/testing-library-utils'
// import Header from '../Header'

// test('Navbar appears on render', ()=>{
//     render(<Header/>, {wrapper: BrowserRouter})

//     const homeLink = screen.getByRole('link')

//     expect(homeLink).toBeInTheDocument()
// })


