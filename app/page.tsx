import { User } from './user';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { LoginButton, LogoutButton } from './auth';

export default async function Home() {
const session = await getServerSession(authOptions)
  return (
    <main>
      <LoginButton />
      <LogoutButton />
      <h2>Server session</h2>
      <pre>{JSON.stringify(session)}</pre>
      <h2>Client session</h2>
      <User />
    </main>
  )
}
