import Link from 'next/link'

import { Button } from '@/components/ui/button'

const NotFound = () => {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-9 p-6'>
      <div className='flex flex-col items-center gap-4 text-center'>
        <h1 className='text-6xl font-bold'>404</h1>
        <p className='text-muted-foreground text-xl sm:text-2xl'>We couldn&apos;t find the page you are looking for</p>
        <Button asChild>
          <Link href='/'>Go back to home</Link>
        </Button>
      </div>
    </div>
  )
}

export default NotFound
