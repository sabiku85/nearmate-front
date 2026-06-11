import { useChatStore } from '~~/stores/chat'

export function useChatTransport(conversationId: string) {
  const chatStore = useChatStore()
  let pollInterval: ReturnType<typeof setInterval> | null = null

  function connect() {
    pollInterval = setInterval(() => {
      if (Math.random() > 0.82) {
        chatStore.mockIncomingReply(conversationId)
      }
    }, 6000)
  }

  function disconnect() {
    if (pollInterval) clearInterval(pollInterval)
  }

  return {
    connect,
    disconnect,
    send: (text: string) => chatStore.sendMessage(conversationId, text)
  }
}
