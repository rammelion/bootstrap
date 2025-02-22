export default function Logo(props) {
    if (props.type==='horizontal') {
        return (
            <a href="/">
                <img src={'/assets/img/Rammelion-horizontal.png'} alt="Rammelion Logo" width={props.width}></img>
            </a>
        )
    } else if (props.type==='standalone') {
        return (
            <div>
                    <img src={'/assets/img/Rammelion-logo.png'} alt="Rammelion Logo" width={props.width}></img>
            </div>

        )
    } else {
        return (
            <h2>Navbar</h2>
        )
    }
}