import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, LucideIcon } from 'lucide-react'

const config: Config = {
  name: 'Krish Gupta',
  email: 'hi@xkrish.co',
  bio: 'Software Developer • Open Source Maintainer • JavaScript • Public Speaker',
  description: 'I’m Krish Gupta, a software developer based in India. I love building things for the web and contributing to open source.',
  navigation: [
  ],
  socials: [
    {
      icon: TwitterIcon,
      url: 'https://twitter.com/xkrishguptaa',
      ariaLabel: 'Follow on Twitter'
    },
    {
      icon: InstagramIcon,
      url: 'https://www.instagram.com/xkrishguptaa',
      ariaLabel: 'Follow on Instagram'
    },
    {
      icon: GithubIcon,
      url: 'https://github.com/xkrishguptaa',
      ariaLabel: 'Follow on Github'
    },
    {
      icon: LinkedinIcon,
      url: 'https://www.linkedin.com/in/xkrishguptaa',
      ariaLabel: 'Follow on LinkedIn'
    },
  ]
}

interface Config {
  name: string
  email: string
  bio: string
  description: string
  navigation: Array<{
    name: string
    url: string
  }>
  socials: Array<{
    icon: LucideIcon
    url: string
    ariaLabel: string
  }>
}

export default config
