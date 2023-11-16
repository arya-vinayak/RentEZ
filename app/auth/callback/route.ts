import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the Auth Helpers package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-sign-in-with-code-exchange
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code') // url is of form: 

  if (code) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.exchangeCodeForSession(code)
    const { data:{session}} = await supabase.auth.getSession()
    // console.log('session', session)
    const uid = session?.user?.id
    const {data} = await supabase.from("users").select("role").eq("id", uid).single()
    if (!data) {
      const redirectUrl = new URL(requestUrl.origin + '/signup')
      return NextResponse.redirect(redirectUrl.href)
    }
    const role = data.role
    console.log('role', role)
    const redirectUrl = new URL(requestUrl.origin + '/' + role)
  }

  // URL to redirect to after sign in process completes
  // redirect tenant to /tenant, admin to /admin, owner to /owner
  // get user uid
  
  return NextResponse.redirect(requestUrl.origin)
}
