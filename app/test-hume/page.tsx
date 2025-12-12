'use client'

import { useState, useEffect } from 'react'
import { VoiceProvider, useVoice } from '@humeai/voice-react'

const CONFIG_ID = 'd57ceb71-4cf5-47e9-87cd-6052445a031c'

function VoiceTest() {
  const { connect, disconnect, status, messages } = useVoice()
  const [token, setToken] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [logs, setLogs] = useState<string[]>([])

  const log = (msg: string) => {
    console.log(msg)
    setLogs(prev => [...prev, `${new Date().toISOString().slice(11, 19)} - ${msg}`])
  }

  useEffect(() => {
    log('Fetching access token...')
    fetch('/api/hume-token')
      .then(res => res.json())
      .then(data => {
        if (data.accessToken) {
          log('Got access token: ' + data.accessToken.slice(0, 10) + '...')
          setToken(data.accessToken)
        } else {
          log('Error: No access token in response')
          setError('No access token')
        }
      })
      .catch(err => {
        log('Error fetching token: ' + err.message)
        setError(err.message)
      })
  }, [])

  const handleConnect = async () => {
    if (!token) {
      log('No token available')
      return
    }

    log('Attempting to connect...')
    log('Config ID: ' + CONFIG_ID)

    try {
      await connect({
        auth: { type: 'accessToken', value: token },
        configId: CONFIG_ID
      })
      log('Connect call completed')
    } catch (err: any) {
      log('Connect error: ' + (err?.message || String(err)))
      setError(err?.message || String(err))
    }
  }

  const handleDisconnect = () => {
    log('Disconnecting...')
    disconnect()
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Hume Voice Test</h1>

        <div className="bg-white rounded-lg p-4 mb-4 shadow">
          <h2 className="font-semibold mb-2">Status</h2>
          <p>Connection: <span className="font-mono">{status.value}</span></p>
          <p>Token: <span className="font-mono">{token ? 'Ready' : 'Loading...'}</span></p>
          <p>Config: <span className="font-mono text-xs">{CONFIG_ID}</span></p>
          {error && <p className="text-red-600">Error: {error}</p>}
        </div>

        <div className="flex gap-4 mb-4">
          <button
            onClick={handleConnect}
            disabled={!token || status.value === 'connected'}
            className="px-4 py-2 bg-purple-600 text-white rounded disabled:opacity-50"
          >
            Connect
          </button>
          <button
            onClick={handleDisconnect}
            disabled={status.value !== 'connected'}
            className="px-4 py-2 bg-red-600 text-white rounded disabled:opacity-50"
          >
            Disconnect
          </button>
        </div>

        <div className="bg-black text-green-400 rounded-lg p-4 font-mono text-sm h-64 overflow-auto">
          <h2 className="text-white mb-2">Logs:</h2>
          {logs.map((log, i) => (
            <div key={i}>{log}</div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-4 mt-4 shadow">
          <h2 className="font-semibold mb-2">Messages ({messages.length})</h2>
          <div className="max-h-48 overflow-auto text-sm">
            {messages.slice(-5).map((msg: any, i) => (
              <div key={i} className="border-b py-1">
                <span className="font-mono text-xs">{msg.type}</span>
                {msg.message?.content && (
                  <p className="text-gray-700">{msg.message.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TestHumePage() {
  return (
    <VoiceProvider>
      <VoiceTest />
    </VoiceProvider>
  )
}
