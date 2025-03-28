import Content from 'layout/content.component'
import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from 'layout/header.component'
import Footer from 'layout/footer.component'

function App(): React.ReactElement {
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        AOS.init({
            delay: 300,
            once: true,
        })
    }, [])

    return (
        <>
            <div className="logistical-layout">
                <Header />
                <Content>
                    <Outlet />
                </Content>
                <Footer />
            </div>
        </>
    )
}

export default App
