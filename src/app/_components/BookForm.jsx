

"use client"
 import { useEffect, useState, useRef } from "react"
import { IoChevronDownSharp } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa6";
import { GoCalendar } from "react-icons/go";
import { format, parse } from 'date-fns';
import usePopupDirection from "../_hooks/usePopUpDirection";

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';



export const BookForm = ({width}) => {
	const calendarrefA = useRef(null)
	const calendarrefB = useRef(null)
    const [show, setShow] = useState({
        arrival: false,
        departure: false,
    })
	const [selectedGuests, setSelectedGuests] = useState(null)
	const [selected, setSelect ] = useState({
		arrival: null,
		departure: null,
	})
	const [input, setInput] = useState({
		email: '',
		name: '',

	})
	useEffect(() => {
		console.log(selected.arrival)
	}, [selected])


	const handleState = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		setInput(prev => ({...prev, [name]: value}))
	}
	



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

	const closeArrival = () => {
		setShow(prev => ({...prev, arrival: false}))
	
	}
	const closeDeparture = () => {
		setShow(prev => ({...prev, departure: false}))
	
	
	}

	const handleSubmit = () => {
		

	}

    return (
        <div className="form_container_mobile">

           <div style={{width: width}}>
			<div className="book_now_intro">
				<span>BOOK NOW</span>
				<p>PLEASE NOTE WE ARE CLOSED SEASONALLY FROM NOVEMBER 1ST TO MARCH 27TH.
				WE LOOK FORWARD TO WELCOMING YOU BACK ON MARCH 28TH 2024</p>
			</div>
			<Input
				name="name"
				type="text"
				placeholder="Full name"
				state={input.name}
				handleState={handleState}
			 />
			<Input
				name="email"
				type="email"
				placeholder="Type your email"
				state={input.email}
				handleState={handleState}
				hasIcon={true}
			 />
           <CalendarInput 
            	text="Arrival" 
				show={show.arrival} 
				handleShow={handleShowArrival} 
				selected={selected.arrival}
				handleSelect={handleSelectArr}
				handleClose={closeArrival}
				calRef={calendarrefA}
			/>
           <CalendarInput 
				text="Departure"
				show={show.departure} 
				handleShow={handleDeparture}
				selected={selected.departure}
				handleSelect={handleSelectDep}
				handleClose={closeDeparture}
				calRef={calendarrefB}
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


const CalendarInput = ({
	text, 
	date, 
	show, 
	handleShow, 
	selected, 
	handleSelect, 
	handleClose,
	calRef
}) => {
	const direction = usePopupDirection(calRef, show);
	const handleClickOutside = (event) => {
		if (calRef.current && !calRef.current.contains(event.target)) {
			 handleClose()
		}
	  };	
	
	  useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
		  document.removeEventListener('mousedown', handleClickOutside);
		};
	  }, []);
   return (
      <div  ref={calRef}  className="calendar_container" >
        <div  onClick={handleShow} className="input icon_input">
		<span>{selected ? selected: text}</span>
		<GoCalendar />
           
        
      </div>
      {show ? (
         <div className={`calendar_picker ${direction === 'up' ? 'upwards' : 'downwards'}`}>
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


const Guests = ({
	closeCalendars, 
	selectedGuests, 
	setSelectedGuests,
}) => {
	const ref = useRef(null)
	const [show, setShow] = useState(false)
	const direction = usePopupDirection(ref, show);
	const guests = [1,2,3,4,5,6,7,8,9]
	const [active, setActive] = useState(null)
	const handleInput = (num) => {
		setShow(prev => !prev)
		setSelectedGuests(num)
		
	}
		
	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setShow(false)
		}
	  };	
	
	  useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
	
		return () => {
		  document.removeEventListener('mousedown', handleClickOutside);
		};
	  }, []);

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
		<div ref={ref} className="guests_container">
			<div className="input icon_input" onClick={handleClick}>
				<span>Guests
					<span className="guest_bold">{selectedGuests ? `: ${ selectedGuests}` : null}</span>
				</span>
				<IoChevronDownSharp />
			</div>
			{show ? (
				<div className={`guests_dropdown ${direction === 'up' ? 'upwards' : 'downwards'}`}>
				<Num />
				
			</div>
			) : null}
		</div>
	)
}


const Input = ({
	state, 
	handleState, 
	placeholder, 
	type, 
	name,
	hasIcon,
}) => {
	return (
		<div className="input input_text" >
			<input 
				value={state} 
				onChange={handleState} 
				name={name} 
				type={type} 
				placeholder={placeholder} 
			/>
			{hasIcon ? (
				<FaRegEnvelope />
			) : null}
		</div>
	)
}