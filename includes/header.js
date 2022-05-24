import Link from "next/link";
import { useRouter } from "next/router";
import ActiveLink from '../includes/ActiveLink';

export default function Header(){
    const router = useRouter();

    return (
      <header>
        <div className='container'>
            <div className='navigation'>
                <Link className="title" href="/">jose-manuel</Link>
                <nav>
                    <ActiveLink activeClassName="active" href="/">
                        <a>_home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/about">
                        <a>_about-me</a>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/projects">
                        <a>_projects</a>
                    </ActiveLink>
                </nav>
            </div>
            <div className='contact'>
                <ActiveLink activeClassName="active" href="/contact-me">
                    <a>_contact-me</a>
                </ActiveLink>
            </div>
            <button className='only_mobile'><i className="ri-menu-line"></i></button>
        </div>
      </header>
    )
}