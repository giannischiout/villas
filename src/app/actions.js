'use server'
import { redirect } from 'next/navigation'

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers';

export async function createLocale(locale) {
    cookies().set('locale', locale)
    redirect('/')
}