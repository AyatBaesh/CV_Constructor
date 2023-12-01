import styles from '../../styles/EducationInput.module.css'

export default function EducationInput({educationInfo, setEducationInfo}){

    return(
        <div className={styles.educationDiv}>

            <form className={styles.educationForm}>
               <label>School:</label> 
               <input 
                    type = "text"
                    placeholder = "School"
                    value = {educationInfo.school}
                    onChange={(e) => setEducationInfo({...educationInfo, school: e.target.value})}
                />

                <label>Degree:</label> 
                <input 
                    type = "text"
                    placeholder = "Degree/Field of study"
                    value = {educationInfo.degree}
                    onChange={(e) => setEducationInfo({...educationInfo, degree: e.target.value})}
                />

                <label>Start Date:</label> 
                <input 
                    type = "date"
                    placeholder = "Start Date"
                    value = {educationInfo.startDate}
                    onChange={(e) => setEducationInfo({...educationInfo, startDate: e.target.value})}
                />

                <label>End Date:</label> 
                <input 
                    type = "date"
                    placeholder="End Date"
                    value = {educationInfo.endDate}
                    onChange={(e) => setEducationInfo({...educationInfo, endDate: e.target.value})}
                />

               <label>Location:</label> 
               <input 
                    type = "text"
                    value = {educationInfo.location}
                    onChange={(e) => setEducationInfo({...educationInfo, location: e.target.value})}
                />

            </form>
        </div>
    )
}
