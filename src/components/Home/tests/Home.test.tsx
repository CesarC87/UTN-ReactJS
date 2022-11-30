// import { render, screen } from "@testing-library/react"; // Al importarse directo de RTL, no tenemos el wrapper
import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Home from "../Home";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "../../../context/ContextProvider";


describe('Testing en home', ()=>{
    test('Carousel appears', async ()=> {
        render(<Home/>) 

        const carouselDiv = screen.getByTestId('carousel-area')

        expect(carouselDiv).toBeInTheDocument()
        expect(carouselDiv).toHaveClass('carousel-area')
    }) 

    test('Titulo del carousel se despliega correctamente', async ()=> {
        render(<Home/>) 

        // const headingCarousel = screen.queryByText("Populares")
        // expect(headingCarousel).not.toBeInTheDocument()
        const headingCarousel = screen.getByText("Populares en MovieFun")
        expect(headingCarousel).toBeInTheDocument()
    }) 

    test('Los carouseles desaparecen cuando el usuario busca en el input', async ()=>{
        const user = userEvent.setup()
        render(<BrowserRouter><Home/></BrowserRouter>) 

        const inputSearch = screen.getByRole('searchbox')
        const headingCarousel = screen.getByText("Populares en MovieFun")
        const notHeadingCarousel = screen.queryByText("Populares en MovieFun")

        expect(inputSearch).toBeInTheDocument()
        expect(headingCarousel).toBeInTheDocument()
        
        await user.type(inputSearch, 'john')
        
        expect(notHeadingCarousel).not.toBeInTheDocument()
    })

    test('Cards aparecen y son clicleables', async ()=>{
        const user = userEvent.setup()
        render(<BrowserRouter><Home/></BrowserRouter>)  

        const carouselDiv = await screen.findByTestId('carousel-area')

        expect(carouselDiv).toBeInTheDocument()

        const cardLink = await screen.findAllByRole('link') 

        cardLink.map( async (link) => {

            expect(link).toHaveAttribute('href')
            await user.click(link)

            const fechaEstreno = await screen.findByText('Fecha de estreno:')
            expect(fechaEstreno).toBeInTheDocument()
        })        
    })
})