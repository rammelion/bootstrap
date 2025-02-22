import Logo from "../Logo"
import FooterColumn from '../FooterColumn'
export default function Footer() {
    return (
        <footer>
            <FooterColumn>
                <div>
                    <Logo type='standalone' width='64px' />
                </div>
            </FooterColumn>
            <FooterColumn>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src="/react.svg" className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            </FooterColumn>
        </footer>
    )
}