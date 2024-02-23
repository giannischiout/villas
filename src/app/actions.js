'use server'
import { cookies } from 'next/headers'


export async function createLocale(locale) {
     cookies().set('locale', locale)
}