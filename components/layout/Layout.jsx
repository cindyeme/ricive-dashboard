import TopNavigation from "../ui/navigation/TopHeader";

function Layout({children}) {
  return (
    <>
      <TopNavigation />
      <main>{ children}</main>
    </>
  )
}

export default Layout;