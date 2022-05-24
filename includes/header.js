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
                <Link href="/contact-me" className={router.pathname.startsWith == "/projects" ? "active" : ""}>_contact-me</Link>
            </div>
            <button className='only_mobile'><i class="ri-menu-line"></i></button>
        </div>
      </header>
    )
}