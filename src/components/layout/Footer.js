import 'assets/styles/Footer.css'
import IconGithub from 'components/icons/IconGithub'
import IconTwitter from 'components/icons/IconTwitter'
import IconLinkedin from 'components/icons/IconLinkedin'

const Footer = () => {
    return (
        <footer>
            <div></div>
            <nav>
                <a href="https://github.com/cristianpoleyJS" target="_blank" rel="noreferrer"><IconGithub width={30} height={30} /></a>
                <a href="https://twitter.com/cristianpoley" target="_blank" rel="noreferrer"><IconTwitter width={30} height={30} /></a>
                <a href="https://linkedin.com/in/cristian-poley/" target="_blank" rel="noreferrer"><IconLinkedin width={30} height={30} /></a>
            </nav>
        </footer>
    )
}

export default Footer