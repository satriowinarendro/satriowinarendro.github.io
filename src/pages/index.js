import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import IndexStyles from './index.module.css'

import Layout from '../components/Layout'
import Github from '../assets/github.svg'
import LinkedIn from '../assets/linkedin.svg'
import Instagram from '../assets/instagram.svg'

const whoAmI = ['a Husband', 'a Software Engineer at AccelByte', 'a Web Development Enthusiast', 'a Life Long Learner', 'an Amateur Photographer', 'a Dog Lover'];
class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      whoAmIIndex: 0,
    };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      this.setState({
        whoAmIIndex: this.state.whoAmIIndex + 1,
      })
    }, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    const { data } = this.props;
    const { whoAmIIndex } = this.state;
    const siteTitle = data.site.siteMetadata.title;
    const siteDescription = data.site.siteMetadata.description;
    let whoAmICurrently = whoAmI[whoAmIIndex % whoAmI.length];

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <div className={IndexStyles.indexContainer}
        >
          <p className={IndexStyles.indexText}>
            Hi, I'm <strong>Satrio Winarendro</strong>,
          </p>
          <p className={IndexStyles.indexText}>
            {whoAmICurrently}
          </p>

          <div className={IndexStyles.indexSocial}>
            <a className={IndexStyles.indexSocialItem} href="https://id.linkedin.com/in/satrio-winarendro" target="_blank"><img src={LinkedIn} alt=""/></a>
            <a className={IndexStyles.indexSocialItem} href="https://www.instagram.com/satriowinarendro/" target="_blank"><img src={Instagram} alt=""/></a>
            <a className={IndexStyles.indexSocialItem} href="https://github.com/satriowinarendro/" target="_blank"><img src={Github} alt=""/></a>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
