import styles from '../../styles/General_Input.module.css'

export default function EducationInput({educationInfo, setEducationInfo, onSave}){
    const handleSave = (e) => {
        e.preventDefault();
        onSave();
    }

    return(
        <div className={styles.generalDiv}>
            <h2>Education</h2>
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
                    placeholder = "StartDate"
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
                    className = {styles.last}
                    type = "text"
                    placeholder="City, Country"
                    value = {educationInfo.location}
                    onChange={(e) => setEducationInfo({...educationInfo, location: e.target.value})}
                />
                <div className={styles.buttonsDiv}>
                    <button onClick={handleSave}>Save</button>

                    <button>Delete</button>
                </div>
            </form>
        </div>
    )
}

// save OnClick = {educations.push(educationInfo),
// setEducationInfo(school: '', degree: '',startDate: '',endDate: '',location: '',)}
//
        
        
        

