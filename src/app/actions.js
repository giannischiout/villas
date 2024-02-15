'use server'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers';

export async function createLocale(locale) {
    const headersList = headers();
    const fullUrl = headersList.get('referer') || "";
    console.log('---------------------------------------------------')
    console.log('do we get the locale -----------------------')
    console.log(locale)
    cookies().set('locale', locale)
}