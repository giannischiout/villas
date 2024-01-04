

"use client"
 import { useEffect, useState } from "react"
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa6";
import { GoCalendar } from "react-icons/go";

import { format, parse } from 'date-fns';


import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

 
export function DateInput() {
  const [date, setDate] = useState()
  const [selected, setSelected] = useState();

  return (
      <CalendarInput />
    //   <DayPicker
    //   mode="single"
    //   selected={selected}
    //   onSelect={setSelected}
    //   modifiersClassNames={{
    //     selected: 'calendar_selected',
    //     hoverRange: 'calendar_hover',
    //   }}
    // />
     
  )
}



export const BookForm = () => {
    const [show, setShow] = useState({
        arrival: false,
        departure: false,
    })
	const [selected, setSelect ] = useState({
		arrival: null,
		departure: null,
	})
	const [selectedGuests, setSelectedGuests] = useState(null)
	const [email, setEmail] = useState(null)
	useEffect(() => {
		console.log(selected.arrival)
	}, [selected])
    const handleShowArrival = (e) => {
		
      setShow(prev => ({...prev, arrival: true, departure: false}))
    }
    const handleDeparture = (e) => {
      setShow(prev => ({...prev, arrival: false, departure: true}))
    }

	const handleSelectArr = (e) => {
		const parsedDate = new Date(e);
		const formattedDate = format(parsedDate, 'yyyy-MM-dd');
		setSelect(prev => ({...prev, arrival: formattedDate}))
		setShow(prev => ({...prev, arrival: false, departure: false}))
	}
	const handleSelectDep = (e) => {
		const parsedDate = new Date(e);
		const formattedDate = format(parsedDate, 'yyyy-MM-dd');
		setSelect(prev => ({...prev, departure: formattedDate}))
		setShow(prev => ({...prev, arrival: false, departure: false}))
	}


	const closeCalendars = () => {
		setShow(prev => ({...prev, arrival: false, departure: false}))
	}

	const handleSubmit = () => {
		console.log(selected)
		console.log(selectedGuests)

	}

    return (
        <div className="form_container_mobile">

           <div className="form_container" >
			<div className="book_now_intro">
				<span>BOOK NOW</span>
				<p>PLEASE NOTE WE ARE CLOSED SEASONALLY FROM NOVEMBER 1ST TO MARCH 27TH.
				WE LOOK FORWARD TO WELCOMING YOU BACK ON MARCH 28TH 2024</p>
			</div>
			<EmailInput
				email={email}
				setEmail={setEmail}
			 />
           <CalendarInput 
            	text="Arrival" 
				show={show.arrival} 
				handleShow={handleShowArrival} 
				selected={selected.arrival}
				handleSelect={handleSelectArr}
			/>
           <CalendarInput 
				text="Departure"
				show={show.departure} 
				handleShow={handleDeparture}
				selected={selected.departure}
				handleSelect={handleSelectDep}
			/>
			<Guests 
			closeCalendars={closeCalendars} 
			selectedGuests={selectedGuests} 
			setSelectedGuests={setSelectedGuests} 
			/>
			<div>
			   <button onClick={handleSubmit} className="submit_btn">SUBMIT</button>
		   </div>
           </div>

          
        </div>
    )
}


const CalendarInput = ({text, date, show, handleShow, selected, handleSelect}) => {

   return (
      <div className="calendar_container" >
        <div onClick={handleShow} className="book_now_input">
		<GoCalendar />
            <span>{selected ? selected: text}</span>
        
      </div>
      {show ? (
         <div className="calendar_picker">
         <DayPicker
             mode="single"
             selected={selected}
             onSelect={handleSelect}
             modifiersClassNames={{
               selected: 'calendar_selected',
               hoverRange: 'calendar_hover',
             }}
           />
         </div>
      ) : null}
      </div>
   )
}


const Guests = ({closeCalendars, selectedGuests, setSelectedGuests}) => {
	const [show, setShow] = useState(false)
	const guests = [1,2,3,4,5,6,7,8,9]
	const handleInput = (num) => {
		setShow(prev => !prev)
		setSelectedGuests(num)
		
	}
	const Num = () => {
		return guests.map((num, i) => {
			return (
				<div onClick={() => handleInput(num)} key={i} className="guests_item">
					<span>{num}</span>
				</div>
			)
		})
	}

	const handleClick = () => {
		setShow(prev => !prev)
		closeCalendars()
	
	}
	return (
		<div className="guests_container">
			<div className="book_now_input" onClick={handleClick}>
				<span>Guests
					<span className="guest_bold">{selectedGuests ? `: ${ selectedGuests}` : null}</span>
				</span>
				<IoChevronDownSharp />
			</div>
			{show ? (
				<div className="guests_dropwdown">
				<Num />
				
			</div>
			) : null}
		</div>
	)
}


const EmailInput = ({email, setEmail}) => {
	return (
		<div className="input_container">
			<div className="book_now_input">
			<FaRegEnvelope />
				<span>your-email@gmail.com</span>
				
			</div>
		</div>
	)
}