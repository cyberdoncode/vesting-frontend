import { useAccount, useConnect, useDisconnect } from 'wagmi'

export default function App() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  const mockStats = {
    totalAllocation: '1,000 TOKENS',
    released: '250 TOKENS',
    claimable: '75 TOKENS',
    vestingEnd: '2026-12-31',
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '900px', margin: '0 auto', color: 'white' }}>
      <h1>Token Vesting Dashboard</h1>
      <p>A web3 dashboard for managing token vesting claims.</p>

      {!isConnected ? (
        <div>
          <h2>Connect Wallet</h2>
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => connect({ connector })}
              style={{ marginRight: '1rem', marginBottom: '1rem', padding: '0.75rem 1rem' }}
            >
              Connect {connector.name}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <div style={{ marginBottom: '1.5rem' }}>
            <p><strong>Connected Wallet:</strong> {address}</p>
            <button
              onClick={() => disconnect()}
              style={{ padding: '0.75rem 1rem', marginTop: '0.5rem' }}
            >
              Disconnect
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(220px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            <div style={{ border: '1px solid #444', padding: '1rem', borderRadius: '12px' }}>
              <h3>Total Allocation</h3>
              <p>{mockStats.totalAllocation}</p>
            </div>

            <div style={{ border: '1px solid #444', padding: '1rem', borderRadius: '12px' }}>
              <h3>Released</h3>
              <p>{mockStats.released}</p>
            </div>

            <div style={{ border: '1px solid #444', padding: '1rem', borderRadius: '12px' }}>
              <h3>Claimable Now</h3>
              <p>{mockStats.claimable}</p>
            </div>

            <div style={{ border: '1px solid #444', padding: '1rem', borderRadius: '12px' }}>
              <h3>Vesting End</h3>
              <p>{mockStats.vestingEnd}</p>
            </div>
          </div>

          <button
            style={{ padding: '0.9rem 1.2rem', marginTop: '2rem', fontWeight: 'bold' }}
          >
            Claim Tokens
          </button>
        </div>
      )}
    </div>
  )
}
