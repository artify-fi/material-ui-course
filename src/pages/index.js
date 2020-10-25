import React from "react"
import '../styles/index.css'
import Layout from "../components/layout"
import SEO from "../components/SEO"
import Ch1 from '../components/appBar/Chapter1'

const IndexPage = () => (
  <Layout>
    <SEO title="Pattern Library" />
    <Ch1 />
  </Layout>
)

export default IndexPage