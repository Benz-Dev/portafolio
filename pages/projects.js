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
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}