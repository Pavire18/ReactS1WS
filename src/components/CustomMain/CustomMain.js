import './CustomMain.css'

const CustomMain = (props) =>{
    return (
        <main className="main">
            <h1 className="main__title">{props.title}</h1>
            <p className="main__text">{props.text}</p>
        </main>
        )
}

export default CustomMain;