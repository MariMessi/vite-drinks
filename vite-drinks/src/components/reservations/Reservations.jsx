import { useState } from "react";
import styles from "./index.module.scss";


const Reservations = ({ setReservationVisibility }) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [hour, setHour]= useState("");
    const [date, setDate] = useState(""); 
    const [closeReservation, setCloseReservation] = useState(false);


    const onHandleName = (e) => setName(e.target.value);
    const onHandleSurname = (e) => setSurname(e.target.value);
    const onHandleDate = (e) => setDate(e.target.input);
    const onHandleHour = (e) => setHour(e.target.value);

    const onHandleSubmit = (e) => {
        e.preventDefault();

    };

    const onHandleCloseReservation = () =>{ setCloseReservation(true);

    setTimeout(() => {
        setReservationVisibility(false)
    }, 5000);
};


    return(
        <div className={styles.reservations}>
            <div className={styles.overlay} onClick={onHandleCloseReservation}></div>
            <div className={styles.formDiv}>
            
            <form className={styles.form}>
                <h3>Prenota la tua serata qui</h3>
                <input 
                id="text" 
                name="text" 
                value={name} 
                placeholder="Name"  
                onChange={onHandleName}
                required/>

                <input 
                id="text" 
                name="text"  
                value= {surname}
                placeholder="Surname" 
                onChange={onHandleSurname} 
                required/>

            <label htmlFor="time">Quando sarai dei nostri?</label>
            
             <input 
             id="time" 
             name="time" 
             value={hour} 
             onChange= {onHandleHour}
             required/>

             <input 
             id="time" 
             name="time"
             value={date} 
             onChange={onHandleDate}
             required/>
            <input type="submit" value="Prenota" />
            </form>
            </div>
        </div>
    )
}

export default Reservations;