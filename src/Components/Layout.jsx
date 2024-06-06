import Header from "./Header"


const Layout = ({children}) => {
  return (
    <>
      <Header/> 
     <main style={{minHeight:"90vh"}}>{children}</main> 
    </>
  )
}

export default Layout
