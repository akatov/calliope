import { useState } from 'react'
import { useComponents } from '../components'

export default function App() {
  const { Container, Button, H1 } = useComponents();
  const [count, setCount] = useState(0)

  console.debug({count})

  return (
    <Container>
      <H1>Actual App</H1>
      <Button
        title={`count is ${count}`}
        onClick={() => setCount((count) => count + 1)}
      />
    </Container>
  )
}
