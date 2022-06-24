import './Header.css'

function Header() {
    return (
        <div className="App-header">
            <div className='logo'>
                <p className='p-fname noselect'>Atif<br />Imal</p>
            </div>
            <div className='links'>
                <div className='linkedin'><a
                    className="App-link"
                    href="https://linkedin.com/in/atif-imal"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a></div>
                <div className='github'><a
                    className="App-link"
                    href="https://github.com/atifimal"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a></div>
                <div className='blog'><a
                    className="App-link"
                    href="https://www.atifimal.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Blog
                </a></div>
                <div className='Trivia'><a
                    className="App-link"
                    href="https://www.atif.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Trivia
                </a></div>
                <div className='Email'><a
                    className="App-link"
                    href="mailto:me@atif.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    me@atif.dev
                </a></div>
            </div>
        </div>
    )
}

export default Header;