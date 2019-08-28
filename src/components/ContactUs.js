import React from "react"

export const ContactUs = () => {
  return (
    <div class="contact-form-container">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-sm-12 px-4 py-5">
            <div class="header text-center">
              <h3>Contact Us</h3>
              <span class="d-block sub-header">
                We're here to make it easier
              </span>
            </div>
            <span class="d-block mt-5 sub-a-req">Submit a request</span>
            <form class="container-fluid w-100">
              <div class="row pt-4">
                <div class="col-md-6 p-0 pr-3">
                  <input
                    class="default-input w-100 pl-4"
                    placeholder="Name"
                    type="text"
                  />
                </div>
                <div class="col-md-6 p-0">
                  <input
                    class="default-input w-100 pl-4"
                    placeholder="Email"
                    type="text"
                  />
                </div>
              </div>
              <div class="row pt-4">
                <div class="col p-0">
                  <input
                    class="default-input w-100 pl-4"
                    placeholder="Organization"
                    type="text"
                  />
                </div>
              </div>

              <div class="row pt-4">
                <div class="col p-0">
                  <textarea
                    class="default-textarea w-100 pl-4 pt-3"
                    placeholder="Message"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>

              <div class="row mt-4">
                <div class="col">{/* Please Secondar btn */}</div>
                <div class=""></div>
              </div>
            </form>
          </div>
          <div class="col-md-6 col-sm-12 p-0 map-container">Google maps</div>
        </div>
      </div>
    </div>
  )
}
