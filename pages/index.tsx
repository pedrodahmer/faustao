import Link from 'next/link';

import { Container } from '../styles/global'

export default function Home() {
  return (
    <Container>
      <div>
        <img src="/images/fasuto.jpg" alt="faustao" />
      </div>

      <Link href="/churrasqueira">
        <button>
          clique no faustão
        </button>
      </Link>
    </Container>
  )
}
