import styles from '../styles/Projects.module.css'
import 'remixicon/fonts/remixicon.css'

export default function about(){
    return (
        <div className={styles.container_projects}>
            <div className={styles.navigation}>
                <div className={styles.title}>
                    <div className={styles.container}>
                        <i className="ri-arrow-down-s-fill"></i> projects
                    </div>
                </div>
                <div className={styles.container}>
                    Filtros deshabilitados temporalmente<br/><br/>
                    <div className={styles.box_check}>
                        <input type='checkbox' /><i className="ri-flutter-fill"></i>Flutter
                    </div>
                    <div className={styles.box_check}>
                        <input type='checkbox' /><i className="ri-flutter-fill"></i>Flutter
                    </div>
                    <div className={styles.box_check}>
                        <input type='checkbox' /><i className="ri-flutter-fill"></i>Flutter
                    </div>
                    <div className={styles.box_check}>
                        <input type='checkbox' /><i className="ri-flutter-fill"></i>Flutter
                    </div>
                </div>
            </div>
            <div className={styles.projects_content}>
                <div className={styles.container_projects}>
                    <div className={styles.project}>
                        <div className={styles.title}>Project 1 <div className={styles.comment}>_bsapp</div> </div>
                        <div className={styles.card}>
                            <div className={styles.image}><img src='https://play-lh.googleusercontent.com/94CN7DBT1ZVrNKIjIuXIGqvXg8VegSbsDPkjzth5D_u0BeBenLtb_yCIvcRqpAWcVA=w416-h235-rw' alt='image'/></div>
                            <div className={styles.content}>
                                <div className={styles.image}>DETAIL as as   h g hah jdah adfh  sadasd ds ad dafh a gh ghghj dj dfj dghj djh dj dghj dj dj djh asasaf safgadg eraerwarea df</div>
                                <a className={styles.button}>view-project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}