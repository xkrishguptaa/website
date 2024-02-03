import type { NavigationItem } from "@/types/navigation"
import { Twitter, Github, type LucideIcon } from 'lucide-react'

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
  }[]
}

export default config
