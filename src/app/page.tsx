import { Container } from '@/components/Container'

import Link from 'next/link'
import config from '@/config'

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            {config.bio}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {config.description}
          </p>
          <div className="mt-6 flex gap-6">
            {config.socials.map((social) => (
              <Link className="group -m-1 p-1" href={social.url} aria-label={social.ariaLabel}>
              <social.icon className="h-6 w-6 transition-transform hover:rotate-6 hover:scale-110" />
            </Link>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
