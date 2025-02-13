import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const HomePage = () => {

  return(
    
    <>
    <Header />
    <main className="main-content mb-5">
      <section className="my-3 container text-center">
      <h2 className="display-3 fw-bold py-5">Track every move, drive every sale. Simplify your workflow with <div className="title-text">Tracker CRM</div></h2>
      <p className="mx-3 text-center fs-5 fw-light">From lead management to customer relationships, stay ahead with real-time insights and seamless automation. Your business, always on track.</p>

      <NavLink  to="/dashboard"  className="btn btn-primary mt-5">Get started free</NavLink>
      </section>
      
      <section className="m-5 text-center">
      <img src="homeImg1.png" className="img-fluid rounded my-5"/>
      </section>

      <section className="py-5 text-light" style={{backgroundImage:'linear-gradient(to top, #00c6fb 0%, #005bea 100%)'}}>
        <h2 className="mx-5 display-4  text-center pt-5">Everything you need to grow your portfolio.</h2>

        <p className="mx-4 text-center fs-6 fw-light pt-3">Comprehensive tools and features designed to help you manage and grow your merchant portfolio efficiently.</p>

        <div className="container">

       
        <div className="row my-5 py-3">
          <div className="col-md-5">
            <div className="card mb-3 card-info" >
              <div className="card-body">
                <div className="card-title">
                  <h5>Onboarding</h5>
                </div>

                  <p className="fs-6 fw-light">
                  Onboard new merchants faster and boost your team's productivity with our cutting-edge application software, designed to ease the process seamlessly.
                  </p>
              </div>
            </div>


            <div className="card mb-3 card-info" >
              <div className="card-body">
                <div className="card-title">
                  <h5>Management</h5>

                </div>
                  <p className="fs-6 fw-light">
                  Manage Leads through agents with defined steps for each lead's lifecycle. We can assign sales agents to leads and allow users to add comments or updates to each lead.
                  </p>
              </div>
            </div>


            <div className="card card-info" >
              <div className="card-body">
                <div className="card-title">
                  <h5>Reporting</h5>
                </div>

                  <p className="fs-6 fw-light">
                  Easily analyze your reports using interactive charts, helping you track performance, measure success, and gain valuable insights into your sales and lead management.
                  </p>
              </div>
            </div>
          </div>

          <div className="col-md-7 text-center">
              <img src="homeImg2.png" className="rounded img-fluid" style={{ maxWidth: '100%', height: '100%' }}/>
          </div>
        </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}


export default HomePage;