import 'assets/styles/Footer.css'
import IconGithub from 'components/icons/IconGithub'
import IconTwitter from 'components/icons/IconTwitter'
import IconLinkedin from 'components/icons/IconLinkedin'

const Footer = () => {
    return (
        <footer>
            <div></div>
            <nav>
                <a href="https://github.com/cristianpoleyJS" target="_blank" without rel="noreferrer" aria-label="GitHub"><IconGithub width={30} height={30} /></a>
                <a href="https://twitter.com/cristianpoley" target="_blank" without rel="noreferrer" aria-label="Twitter"><IconTwitter width={30} height={30} /></a>
                <a href="https://linkedin.com/cristian-poley" target="_blank" without rel="noreferrer" aria-label="YouTube"><IconLinkedin width={30} height={30} /></a>
            </nav>
        </footer>
    )
}

export default Footer