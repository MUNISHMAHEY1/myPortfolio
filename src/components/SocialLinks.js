import React, { Component } from 'react'
import { FaLinkedin, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa'

class SocialLinks extends Component {
    
    constructor(props) {
        super(props)
        const linkedIn="https://www.linkedin.com/in/munish-munish-011224186/"
        const Github = "https://github.com/MUNISHMAHEY1"
        const facebook = "https://www.facebook.com/munish.mahey.7"
        const twitter ="https://twitter.com/Munish38352415"
        this.state = {
             socialServices : [
                 {
                     id:1,
                     title:"LinkedIn",
                     icon: <a style={{color: 'white'}} rel="noopener noreferrer" href={linkedIn} target="_blank"><FaLinkedin/></a>,
                 },
                 {
                    id:2,
                    title:"GitHub",
                    icon: <a style={{color: 'white'}} rel="noopener noreferrer" href={Github} target="_blank"><FaGithub/></a>,
                },
                {
                    id:3,
                    title:"Facebook",
                    icon: <a style={{color: 'white'}} rel="noopener noreferrer" href={facebook} target="_blank"><FaFacebook/></a>,
                },
                {
                    id:4,
                    title:"Twitter",
                    icon: <a style={{color: 'white'}} rel="noopener noreferrer" href={twitter} target="_blank"><FaTwitter/></a>,
                },

             ]
        }
    }
    
    render() {
        return (
            <div className="social-links">
                {this.state.socialServices.map((item,id)=>{
                   return(
                       <article key={id}>
                           <span className="social-icon">{item.icon}</span>
                       </article>
                   ) 
                })}
            </div>
        )
    }
}

export default SocialLinks
