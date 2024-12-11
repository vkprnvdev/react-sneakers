import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/profile')({
  component: Profile,
})

function Profile() {
  return <div>Hello "/profile"!</div>
}
