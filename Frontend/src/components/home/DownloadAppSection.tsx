const DownloadAppSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Download Our Mobile App</h2>
            <p className="text-gray-600 mb-6">
              Get the CallHealth app for a seamless healthcare experience. Book appointments, order medicines, schedule
              lab tests, and access your health records on the go.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="inline-block">
                <img src="/placeholder.svg?height=50&width=150" alt="Download on App Store" className="h-12" />
              </a>
              <a href="#" className="inline-block">
                <img src="/placeholder.svg?height=50&width=150" alt="Get it on Google Play" className="h-12" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-blue-600">1M+</span>
                <span className="text-gray-600">App Downloads</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-blue-600">4.8</span>
                <span className="text-gray-600">App Rating</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img src="/placeholder.svg?height=500&width=300" alt="CallHealth Mobile App" className="max-w-xs" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadAppSection
