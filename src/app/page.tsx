import { ApplyLoan, Qualification } from '@/components'

const Home = () => {
  return (
    <main className="bg-white dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <Qualification />
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <ApplyLoan />
        </div>
      </section>
    </main>
  )
}

export default Home
