import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
    return <>
        {children}
    </>
}

Layout.Header = ({ children }: { children: ReactNode }) => {
    return <div id="chatList" className='h-full min-w-96 max-w-100 w-full flex flex-col bg-private-secondary overflow-y-hidden border border-transparent'>
        {children}
    </div>
}

Layout.Body = ({ children }: { children: ReactNode }) => {
    return <div className='w-full h-full border flex flex-col'>
        {children}
    </div>
}

export default Layout