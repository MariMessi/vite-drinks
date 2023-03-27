import { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
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
        setReservationVisibility(false);

    };

    const onHandleCloseReservation = () => { setCloseReservation(false);
};


    return(
        <div className={styles.reservations}>
           
            <div className={styles.formDiv}>
                <button className={styles.ClosingButton} onClick={onHandleCloseReservation}><AiFillCloseSquare /></button>
            
             <form className={styles.form}>
                <label htmlFor="text">Prenota la tua serata qui</label> 
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
            id="date"
            name="date"
            type="date"
            value={date}
            onChange={onHandleDate}
            required
          />
          <label htmlFor="time">A che ora</label>
          <input
            id="time"
            name="time"
            type="time"
            value={hour}
            onChange={onHandleHour}
            required
          />

            <input type="submit" value="Prenota" />
            </form>
            </div>
        </div>
    )
}

export default Reservations;