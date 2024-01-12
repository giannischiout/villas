'use server'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers';

export async function createLocale(locale) {
    const headersList = headers();
    const domain = headersList.get('host') || "";
    const fullUrl = headersList.get('referer') || "";
    console.log('full url')
    console.log(fullUrl);
    cookies().set('locale', locale)
    revalidatePath(fullUrl)

}