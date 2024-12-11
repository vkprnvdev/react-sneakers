import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/favorites')({
  component: Favorites,
})

function Favorites() {
  return (
    <>
    </>
  )
}
