

"use client"
import { useEffect, useState, useRef } from "react"
import { IoChevronDownSharp } from "react-icons/io5";
import { GoCalendar } from "react-icons/go";
import { format, } from 'date-fns';
import usePopupDirection from "../_hooks/usePopUpDirection";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useCookies } from 'next-client-cookies';
import { text } from "@/translations"
import { useRouter } from "next/navigation";
import axios from "axios";



async function bookingRqs(data) {
	try {
		const resp = await axios.post('https://strapi.3v7i.com/api/booking-rqs', {
			data: data
		})
		return resp.data.data;
	  } catch {
		return null;
	  }
}


async function sendEmail(recipient, data, villa) {
    const response = {
        emailCustomer: false,
        emailHost: false,
        error: null
    };

    try {
        const emailCustomer = await axios.post('https://smtp.3v7i.com/send-email', {
            sender: "info@ionian-dream-villas.com",
            recipient: recipient,
            bcc: ["gkozyris@gmail.com"],
            subject: "Booking Request Confirmation",
            message: `
                Dear ${data.Name},
                We received your booking request with the following details:
                Name: ${data.Name}
                Email: ${data.email}
                Phone Number: ${data.contactPhone}
                Villa: ${villa}
                Period: ${data.arrivalDate} - ${data.departureDate}
                Special Request: ${data.specialRequest}
                We will contact you shortly.
            `
        });

      

        if (emailCustomer.data && emailCustomer.data.success) {
            response.emailCustomer = true;
        }
    } catch (e) {
        console.error('Error sending email to customer:', e);
        response.error = e.message;
    }

    try {
        const emailHost = await axios.post('https://smtp.3v7i.com/send-email', {
            sender: "info@ionian-dream-villas.com",
            recipient: "info@ionian-dream-villas.com",
            bcc: ["gkozyris@gmail.com"],
            subject: "New Booking Request",
            message: `
                New booking request received with the following details:
                Name: ${data.Name}
                Email: ${data.email}
                Phone Number: ${data.contactPhone}
                Villa: ${villa}
                Period: ${data.arrivalDate} - ${data.departureDate}
                Special Request: ${data.specialRequest}
            `
        });

       

        if (emailHost.data && emailHost.data.success) {
            response.emailHost = true;
        }
    } catch (e) {
        console.error('Error sending email to host:', e);
        response.error = e.message;
    }

    return response;
}

export const BookForm = ({ dates }) => {
	const cookies = useCookies();
	const router = useRouter();
	const locale = cookies.get('locale') || 'locale=en';
	const calendarrefA = useRef(null)
	const calendarrefB = useRef(null)

	const [responseBook, setResponseBooking] = useState(null)
	const [show, setShow] = useState({
		arrival: false,
		departure: false,
		chooseVilla: false,
	})

	const [selected, setSelect] = useState({
		arrival: null,
		departure: null,
	})
	const [input, setInput] = useState({
		email: '',
		name: '',
		phone: '',
		message: '',
		villa: {
			id: 1,
			name: 'Castro'
		}
	})

	const handleVillaId = (id, name) => {
		setInput(prev => ({ ...prev, villa: { id: id, name: name } }))
	}
	const handleState = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		setInput(prev => ({ ...prev, [name]: value }))
	}



	const handleShowArrival = (e) => {
		setShow(prev => ({ ...prev, arrival: true, departure: false }))
	}
	const handleDeparture = (e) => {
		setShow(prev => ({ ...prev, arrival: false, departure: true }))
	}
	const handleShowVilla = (e) => {
		setShow(prev => ({ ...prev, arrival: false, departure: false, chooseVilla: !prev.chooseVilla }))
	}

	const handleSelectArr = (e) => {
		const parsedDate = new Date(e);
		const formattedDate = format(parsedDate, 'yyyy-MM-dd');
		setSelect(prev => ({ ...prev, arrival: formattedDate }))
		setShow(prev => ({ ...prev, arrival: false, departure: false }))
	}
	const handleSelectDep = (e) => {
		const parsedDate = new Date(e);
		const formattedDate = format(parsedDate, 'yyyy-MM-dd');
		setSelect(prev => ({ ...prev, departure: formattedDate }))
		setShow(prev => ({ ...prev, arrival: false, departure: false }))
	}




	const closeArrival = () => {
		setShow(prev => ({ ...prev, arrival: false }))

	}
	const closeDeparture = () => {
		setShow(prev => ({ ...prev, departure: false }))


	}

	const handleSubmit = async () => {
		if (!selected.arrival || !selected.departure || !input.name || !input.email || !input.phone || !input.villa.id) {
			setResponseBooking(text[locale].allFields)
			return;


		}

		
		let formData = {
			Name: input.name,
			email: input.email,
			arivalDate: selected.arrival.toString(),
			departureDate: selected.departure.toString(),
			contactPhone: input.phone.toString(),
			specialRequest: input.message,
			villa: input.villa.id,
			sitemap_exclude: true

		}

		const strapiBooking = await bookingRqs(formData);
		console.log(strapiBooking)
		const emailResponse = await  sendEmail(input.email, formData, input.villa.name)
		if(emailResponse.emailCustomer && emailResponse.emailHost) {
			setResponseBooking(text[locale].thankYou)
		} else {
			setResponseBooking(text[locale].failed)
		}
	}

	return (
		<div className="bookform_container">
			<div className="book_now_intro">
				<span>{text[locale].bookNow}</span>
				<div className="book_available_dates">
					<span>{text[locale].bookNowMessage} {dates.opening}</span>
				</div>
			</div>
			<Input
				name="name"
				type="text"
				placeholder={text[locale].placeholderName}
				state={input.name}
				handleState={handleState}
			/>
			<Input
				name="email"
				type="email"
				placeholder={text[locale].placeholderEmail}
				state={input.email}
				handleState={handleState}
				hasIcon={true}
			/>
			<Input
				name="phone"
				type="tel"
				placeholder={text[locale].placeholderPhone}
				state={input.phone}
				handleState={handleState}
				hasIcon={true}
			/>
			<TextArea
				name="message"
				rows={4}
				className="text_area"
				placeholder={text[locale].typeMessage}
				state={input.message}
				handleState={handleState}
			/>
			<CalendarInput
				text={text[locale].arrival}
				show={show.arrival}
				handleShow={handleShowArrival}
				selected={selected.arrival}
				handleSelect={handleSelectArr}
				handleClose={closeArrival}
				calRef={calendarrefA}
			/>
			<CalendarInput
				text={text[locale].departure}
				show={show.departure}
				handleShow={handleDeparture}
				selected={selected.departure}
				handleSelect={handleSelectDep}
				handleClose={closeDeparture}
				calRef={calendarrefB}
			/>
			<ChooseVilla
				handleShow={handleShowVilla}
				show={show.chooseVilla}
				handleState={handleVillaId}
				input={input.villa.name}
			/>
			<div className="form_button_container">
				<button onClick={handleSubmit} className="submit_btn">{text[locale].submit}</button>
				<button onClick={() => router.back()} className="close_btn">{text[locale].close}</button>
			</div>
			<div>
				{responseBook ? <span className="response_booking">{responseBook}</span> : null}
			</div>
		</div>
	)
}


const ChooseVilla = ({ handleShow, show, handleState, input }) => {
	const cookies = useCookies();
	const locale = cookies.get('locale') || 'locale=en';
	const [choise, setChoise] = useState(text[locale].chooseVilla)
	const handleClick = (id, name) => {
		setChoise(name)
		handleState(id, name)
		handleShow()

	}
	return (
		<div className="choosevilla_container">
			<div onClick={handleShow} className="input choosevilla" >
				<p>{choise}</p>
				<IoChevronDownSharp />
			</div>
			{show ? (
				<div className="villa_dropdown">
					<div onClick={() => handleClick(1, ' Castro')} className="villa_item">
						<span>Castro</span>
					</div>
					<div onClick={() => handleClick(2, 'Jira')} className="villa_item">
						<span>Jira</span>
					</div>
					<div onClick={() => handleClick(3, 'Milos')} className="villa_item">
						<span>Milos</span>
					</div>
				</div>
			) : null}
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
		<div ref={calRef} className="calendar_container" >
			<div onClick={handleShow} className="input icon_input">
				<span>{selected ? selected : text}</span>
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
	const guests = [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
					<span className="guest_bold">{selectedGuests ? `: ${selectedGuests}` : null}</span>
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

		</div>
	)
}


const TextArea = ({
	state,
	handleState,
	placeholder,
	name,
	rows
}) => {

	return (
		<div className="input input_textarea">
			<textarea
				className="text_area"

				value={state}
				onChange={handleState}
				name={name}
				rows={rows}
				placeholder={placeholder}
			/>
		</div>
	);
};