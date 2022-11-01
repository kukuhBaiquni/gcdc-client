import DefaultLayout from 'layouts/default-layout'

export default function Home() {
  return (
    <div className='bg-pink-300'>
      TEsts
      <div className='h-10 w-10 rounded-full bg-sky-500' />
    </div>
  )
}

Home.getLayout = (page) => (
  <DefaultLayout>
    {page}
  </DefaultLayout>
)
