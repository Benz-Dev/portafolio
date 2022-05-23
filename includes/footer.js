import 'remixicon/fonts/remixicon.css'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="socials">
                    <div className="findme">find me in:</div>
                    <a><i class="ri-twitter-fill"></i></a>
                    <a><i class="ri-facebook-fill"></i></a>
                </div>
                <a className="github">
                    @benz-dev <i class="ri-github-fill"></i>
                </a>
            </div>
        </footer>
    )
}