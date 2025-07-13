import { Footer } from '@/components/layout'
import Navigation from '@/components/Navigation'
import { ReactNode } from 'react'
import '../page-styles.css'
import '../enhanced-styles.css'

interface RootLayoutProps {
    children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <div className="page-container">
            <Navigation />
            {children}
            <Footer />
        </div>
    )
}

export default RootLayout;
