const Layout = (props) => {
    console.log(props);

    return (
        <>
        <Header myHeaderProp="header prop value" />
        {props.children}
        <br></br>
        {props.myProp}
        <Sidebar />
        <Footer />
        </>
    )
}