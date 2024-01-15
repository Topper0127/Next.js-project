'use client'
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';


const AUTH_PAGES = ['/auth/login','/auth/register']

const isAuthPages = (pathname) => AUTH_PAGES.some(page => page.startsWith(pathname)) 


export  async function middleware( NextRequest ) {

   

}

// we should define the URLS that we want to use the middleware in the following lines
export const config = {
   matcher:['/panel']
}