import styles from '../../styles/General_Input.module.css'
export default function GeneralInput({userInfo, setUserInfo}){
    return(
        <div className={styles.generalDiv}>
            <h2>Personal Details</h2>
            <form className = {styles.generalForm}>

            <label>First Name: </label>
            <input
                type="text"
                placeholder="First Name"
                value={userInfo.firstName}
                onChange={(e) => setUserInfo({ ...userInfo, firstName: e.target.value })}
            />

            <label>Last Name: </label>
            <input
                type="text"
                placeholder="Last Name"
                value={userInfo.lastName}
                onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })}
            />

            <label>E-mail: </label>
            <input
                type="text"
                placeholder="E-mail"
                value={userInfo.email}
                onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            />

            <label>Tel no: </label>
            <input
                type="tnumber"
                placeholder="(123) 456 789"
                value={userInfo.tel}
                onChange={(e) => setUserInfo({ ...userInfo, tel: e.target.value })}
            />

            <label>Location: </label>
            <input
                type="text"
                placeholder="City, Country"
                value={userInfo.location}
                onChange={(e) => setUserInfo({ ...userInfo, location: e.target.value })}
            />

            </form>
        </div>
    )
}