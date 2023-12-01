import styles from '../../styles/PersonalInfo.module.css'
export default function PersonalInfo({ userInfo }) {
    return (
        <>
            <div className={styles.personalInfo}>
                <span className={styles.name}>{userInfo.firstName} {userInfo.lastName}</span>
                <ul className={styles.contacts}>
                    <li>{userInfo.email}</li>
                    <li>{userInfo.tel}</li>
                    <li>{userInfo.location}</li>
                </ul>
            </div>
        </>
    );
}