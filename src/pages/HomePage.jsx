

const HomePage = () => {

  return(
    
    <>
    <main className="main-content">
      <section className="my-5 container text-center">
      <h2 className="display-3 fw-bold p-5">Track every move, drive every sale. Simplify your workflow with <span className="text-primary">Tracker CRM</span></h2>
      <p className="mx-4 text-center fs-5 fw-light">From lead management to customer relationships, stay ahead with real-time insights and seamless automation. Your business, always on track.</p>

      <button className="btn btn-primary mt-5">Get started free</button>
      </section>
      
      <section className="my-5 container text-center">
      <img src="tracker1.avif" className="img-fluid rounded my-5"/>
      </section>

      <section className="py-5 text-light" style={{backgroundImage:'linear-gradient(to top, #00c6fb 0%, #005bea 100%)'}}>
        <h2 className="mx-5 display-4  text-center pt-5">Everything you need to grow your portfolio.</h2>

        <p className="mx-4 text-center fs-6 fw-light pt-3">Comprehensive tools and features designed to help you manage and grow your merchant portfolio efficiently.</p>

        <div className="container">

       
        <div className="row my-5 py-3">
          <div className="col-md-5">
            <div className="card mb-3 p-0 card-info" >
              <div className="card-body">
                <div className="card-title">
                  <h5>Onboarding</h5>
                </div>

                  <p className="fs-6 fw-light">
                  Onboard new merchants faster and boost your team's productivity with our cutting-edge application software, designed to automate boarding at multiple ISOs seamlessly.
                  </p>
              </div>
            </div>


            <div className="card mb-3 p-0 card-info" >
              <div className="card-body">
                <div className="card-title">
                  <h5>Underwriting</h5>

                </div>
                  <p className="fs-6 fw-light">
                  Accelerate Merchant Underwriting with comprehensive checks, ensuring rapid processing with consistent reliability.
                  </p>
              </div>
            </div>


            <div className="card p-0 card-info" >
              <div className="card-body">
                <div className="card-title">
                  <h5>Reporting</h5>
                </div>

                  <p className="fs-6 fw-light">
                  Easily export your data into an Excel spreadsheet where you can do whatever you want with it.
                  </p>
              </div>
            </div>
          </div>

          <div className="col-md-7 text-center">
              <img src="tracker1.avif" className="rounded img-fluid" style={{ maxWidth: '100%', height: '100%' }}/>
          </div>
        </div>
        </div>
      </section>
    </main>  
    </>
  )
}


export default HomePage;