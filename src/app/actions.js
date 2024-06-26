'use server'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function createLocale(locale) {
    cookies().set('locale', locale)
    redirect('/')
}




export async function createBooking(data) {
    try {
        const respsonse = await fetch(`${process.env.URL}/api/sendEmail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const responsejson = await respsonse.json()
        return responsejson
    } catch (e) {
        console.log(e)
    }
}