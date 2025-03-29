import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from 'pages/main-page/main-page.component'

function App(): React.ReactElement {

    useEffect(() => {
        AOS.init({
            delay: 300,
            once: true,
        })
    }, [])

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
