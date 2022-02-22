import React from 'react';
import { FaDev, FaLinkedin, FaGithub } from 'react-icons/fa';

import glasses from './assets/wolf-logo_D6.png';
import pixel from './assets/logo_pixel_large.png'
import robot_wolf from './assets/robot_logo.png';
import hardhat from './assets/hardhat_logo.png';

export const pages = [
    {name: "about", logo: robot_wolf, text: 'About.'},
    {name: "portfolio", logo: hardhat, text: 'Portfolio'},
    {name: "blog", logo: glasses, text: 'Blog.'},
    {name: "contact", logo: pixel, text: 'Contact.'}
]

export const links = [
    {name: "dev.to", location: 'https://dev.to/wolfmath', icon: <FaDev />},
    {name: 'linkedin', location: 'https://www.linkedin.com/in/wolf-math/', icon:<FaLinkedin />  },
    {name: 'github', location: 'https://github.com/wolf-math', icon: <FaGithub /> },
]
