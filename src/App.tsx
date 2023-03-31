import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import UsersList from './UserList'
const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersList />
    </QueryClientProvider>
  )
}
