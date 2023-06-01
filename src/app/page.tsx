import Image from 'next/image'
import UserSettings from '../components/UserSettings';

export default function Home() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <UserSettings />
    </div>
  )
}