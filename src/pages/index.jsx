import DefaultLayout from 'layouts/default-layout'
import Introduction from 'components/content/introduction'

export default function Home() {
  return (
    <div>
      <Introduction />
    </div>
  )
}

Home.getLayout = (page) => (
  <DefaultLayout>
    {page}
  </DefaultLayout>
)
