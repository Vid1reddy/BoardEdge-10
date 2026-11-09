import { NextResponse } from 'next/server'
import { getAIStatus, FREE_MODELS } from '@/lib/ai'

// Which AI provider is active. Never returns keys; lists free models only.
export async function GET() {
  const status = await getAIStatus()
  return NextResponse.json({
    active: status.active,
    providers: status.providers,
    freeModels: {
      openrouter: FREE_MODELS.openrouter,
    },
  })
}
