import Head from 'next/head'

const CvPreview = () => {
  return (
    <>
      <Head>
        <title>CV Preview</title>
        <meta name='robots' content='noindex' />
      </Head>
      <section className='mt-24 max-w-screen-lg mx-auto flex justify-center'>
        <object data='/api/cv' type='application/pdf' className='w-full h-[90vh]' />
      </section>
    </>
  )
}

export default CvPreview
