const Header = () =>{

    const getText = text =>{
        return (
            <div>
                <h1>Hello {text}</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution </p>
            </div>
        )

    }
    return <div>{getText("text")}</div>
}

export default Header;