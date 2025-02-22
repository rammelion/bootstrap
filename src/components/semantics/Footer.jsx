import Logo from "../Logo"
import FooterColumn from '../FooterColumn'

export default function Footer() {
    return (
        <footer className="mt-5 mx-auto flex-column flex-lg-row">
            <FooterColumn className="flex flex-row">
                <h4>Copyright (c) 2025 Rammelion</h4>
                <h2>MIT License</h2>
                <p>
                    Permission is hereby granted, free of charge, to any person obtaining a copy
                    of this software and associated documentation files (the "Software"), to deal
                    in the Software without restriction, including without limitation the rights
                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                    copies of the Software, and to permit persons to whom the Software is
                    furnished to do so, subject to the following conditions:
                </p>
                <p>
                    The above copyright notice and this permission notice shall be included in all
                    copies or substantial portions of the Software.
                </p>
                <p>
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                    SOFTWARE.
                </p>
            </FooterColumn>
            <FooterColumn>
                <div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
                <div className="text-center">
                <a href="https://vite.dev" target="_blank">
                        <img src="/vite.svg" className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://reactjs.org" target="_blank">
                        <img src="/react.svg" className="logo react" alt="React logo" />
                    </a>
                </div>
                </div>
                <h4 className="text-center">Vite + React</h4>
            </FooterColumn>
            <FooterColumn>
                <h2>Lorem Ipsum</h2>
                <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi est class massa porta fermentum. Curae elementum faucibus nisl nullam est felis. Elit lorem est consequat ex mus hac finibus. Dignissim varius turpis tempor lacus massa sagittis torquent mattis. Dignissim ex dignissim taciti elit ante ut neque tempus. Dui penatibus mus; ultrices mus facilisis felis. Ridiculus venenatis porta viverra suspendisse tortor ipsum metus.
                </p>
                <p>
                Dis potenti odio justo; vitae aptent class gravida maximus. Aridiculus neque quam eleifend penatibus nam. Varius vitae laoreet pretium nisi nulla etiam semper. Sodales nunc auctor justo; mauris turpis erat eget. Eu etiam orci urna montes auctor tristique laoreet? Libero vel molestie volutpat inceptos eleifend.
                </p>
                <p>
                Litora mollis nisl ac aenean sagittis vel bibendum arcu. Ante tempor erat vel lectus pellentesque venenatis ante tempor. Ligula mollis turpis inceptos quisque ex donec platea vestibulum. Bibendum accumsan donec senectus dignissim volutpat aenean. Sem dictum pharetra eleifend ridiculus ultricies; elit facilisi. Nunc pretium senectus metus tempus integer. Nunc tristique cursus porta amet per suscipit. Adipiscing mollis vulputate in donec scelerisque mattis purus. Dictumst mollis montes finibus aliquam euismod massa donec mus nec. Rhoncus sem montes himenaeos ad sagittis tellus eget velit.
                </p>
            </FooterColumn>
        </footer>
    )
}