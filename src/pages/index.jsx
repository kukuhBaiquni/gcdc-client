import DefaultLayout from 'layouts/default-layout'
import Introduction from 'components/content/introduction'

export default function Home() {
  return (
    <div className='h-[2000px]'>
      <Introduction />
    </div>
  )
}

Home.getLayout = (page) => (
  <DefaultLayout>
    {page}
  </DefaultLayout>
)
