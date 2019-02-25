import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Red Plumbing Co." keywords={[`gatsby`, `application`, `react`]} />
      <section class="hero is-large has-bg-img">
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-1">Red Plumbing Co.</h1>
              <h2 class="subtitle">The GTA's Backflow Experts</h2>
              <h3 class="subtitle is-6">Done once. Done right.</h3>
            </div>
          </div>
      </section>

    <div class="faq section">
    <div class="columns">
      <div class="column">
        <p class="title is-5">What is a backflow?</p>
        <p class="">Bacon ipsum dolor amet pig corned beef swine drumstick ham alcatra brisket venison frankfurter tri-tip. Sirloin swine fatback shankle beef burgdoggen. Tri-tip ham pork belly frankfurter salami bacon. Short ribs prosciutto meatball shoulder alcatra. Meatball tail burgdoggen ribeye pork loin ball tip strip steak buffalo spare ribs. Buffalo tenderloin prosciutto biltong pork belly capicola meatloaf tongue swine beef cupim.</p>
      </div>
      <div class="column">
        <p class="title is-5"> Why did I get a backflow notice?</p>
        <p class="">Bacon ipsum dolor amet pig corned beef swine drumstick ham alcatra brisket venison frankfurter tri-tip. Sirloin swine fatback shankle beef burgdoggen. Tri-tip ham pork belly frankfurter salami bacon.</p>
      </div>
      <div class="column">
        <p class="title is-5">What is a backflow test?</p>
        <p class="">Bacon ipsum dolor amet biltong pork belly capicola meatloaf tongue swine beef cupim pig corned beef swine drumstick ham alcatra brisket venison frankfurter tri-tip. Sirloin swine fatback shankle beef burgdoggen. Tri-tip ham pork belly biltong pork belly capicola meatloaf tongue swine beef cupim frankfurter salami bacon.</p>
      </div>
      </div>
    </div>

    <div class="services section">
      <h2 class="title">Services</h2>
      <div class="columns">
        <div class="column">
          <p class="subtitle is-6 is-spaced">Backflow Installation and Repairs</p>
          <p class="subtitle is-6 is-spaced">Backflow Testing and Paperwork</p>
          <p class="subtitle is-6 is-spaced">Drain Preventative Maintenance and Services</p>
          <p class="subtitle is-6 is-spaced">Hot Water Tank Service and Installation</p>
        </div>
        <div class="column">
          <p class="subtitle is-6 is-spaced">Renovations</p>
          <p class="subtitle is-6 is-spaced">Rough-ins and Finishing</p>
          <p class="subtitle is-6 is-spaced">Fixture Replacements</p>
        </div>
      </div>
    </div>

    <div class="contact section">
      <h2 class="title">Get in touch</h2>
      <p><a href="tel:1-416-904-1261">1-416-904-1261</a></p>
      <p><a href="mailto:info@redplumbing.co?Subject=Hello%20there">Email us</a></p>
    </div>
    <div class="clients section">
      <div class="title is-4">Satisfied Clients</div>
    </div>
  </Layout>
)

export default IndexPage
