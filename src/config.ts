import type { NavigationItem } from "@/types/navigation"
import { type LucideIcon, Twitter, Github, Linkedin, Mail, Instagram, Package, Rocket } from 'lucide-react'
import type { ButtonProps } from "./components/ui/button"

const config: Config = {
  name: 'Krish Gupta',
  bio: 'DevOps, Open Source, Golang • Did web dev once upon a time',
  description: 'I’m make software development lifecycle easier, faster and more fun. I also make small tools all the time.',
  navigationItems: [
    {
      text: "Projects",
      url: "/projects",
    },
    {
      text: "Blog",
      url: "/blog",
    },
  ],
  socials: [
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com/xkrishguptaa'
    },
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/xkrishguptaa'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/xkrishguptaa'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/xkrishguptaa'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:hi@xkrish.co'
    }
  ],
  projects: [
    {
      name: 'Reseter.css',
      description: 'The modern CSS reset (3m+ JSDelivr Hits, 70k+ NPM Installs, 1.4k+ stars)',
      buttons: [
        {
          url: 'https://npmjs.com/package/reseter.css',
          icon: Package,
          text: 'NPM Install',
          variant: 'default',
          size: 'default'
        },
        {
          url: 'https://www.jsdelivr.com/package/npm/reseter.css',
          icon: Rocket,
          text: 'Use CDN',
          variant: 'secondary',
          size: 'default'
        },
        {
          url: 'https://github.com/xkrishguptaa/reseter.css',
          icon: Github,
          size: 'icon'
        }
      ],
      showcase: true
    },
    {
      name: 'Repo Rater Bot',
      description: 'Discord Bot that wraps around the EddieHub Repo Rater API for easier access',
      buttons: [
        {
          url: 'https://github.com/xkrishguptaa/repo-rater-bot',
          icon: Github,
          text: 'View on GitHub',
          variant: 'default',
          size: 'default'
        }
      ],
      showcase: true
    },
    {
      name: 'BioDrop Self',
      description: 'Concept Application for self-hosted UI for BioDrop',
      buttons: [
        {
          url: 'https://biodrop-self.xkrish.co',
          icon: Rocket,
          text: 'View Live',
          variant: 'default',
          size: 'default'
        },
        {
          url: 'https://github.com/xkrishguptaa/biodrop-self',
          icon: Github,
          text: 'View on GitHub',
          variant: 'secondary',
          size: 'default'
        }
      ],
      showcase: true
    },
    {
      name: 'Azelf',
      description: 'Download, Optimize and Save Images from the Web',
      buttons: [
        {
          url: 'https://npmjs.com/package/azelf',
          icon: Package,
          text: 'NPM Install',
          variant: 'default',
          size: 'default'
        },
        {
          url: 'https://github.com/xkrishguptaa/azelf',
          icon: Github,
          text: 'View on GitHub',
          variant: 'secondary',
          size: 'default'
        }
      ],
      showcase: true
    }
  ]
}

interface Config {
  name: string
  bio: string
  description: string
  navigationItems: NavigationItem[]
  socials: {
    name: string
    icon: LucideIcon
    url: string
  }[],
  projects: Array <{
    name: string
    description: string
    buttons: Array<{
      text: string
      url: string
      icon: LucideIcon
      variant: ButtonProps['variant']
      size: Exclude<ButtonProps['size'], 'icon'>
    } | {
      url: string
      icon: LucideIcon
      size: 'icon'
    }>
    showcase: boolean
  }>
}

export default config
