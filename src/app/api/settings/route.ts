import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getProviderKeys } from '@/lib/ai'

function maskKey(key: string): string {
  if (!key) return ''
  if (key.length <= 8) return '••••'
  return `${key.slice(0, 4)}••••••••${key.slice(-4)}`
}

export async function GET() {
  const settings = await db.settings.findUnique({ where: { id: 'main' } })
  const envKeys = await getProviderKeys()
  return NextResponse.json({
    settings: settings
      ? {
          id: settings.id,
          examDate: settings.examDate,
          dailyMinutes: settings.dailyMinutes,
          openrouterKeyMasked: maskKey(settings.openrouterKey),
          nvidiaKeyMasked: maskKey(settings.nvidiaKey),
          hasOpenrouterKey: Boolean(settings.openrouterKey || envKeys.openrouterKey),
          hasNvidiaKey: Boolean(settings.nvidiaKey || envKeys.nvidiaKey),
          keysFromEnv: {
            openrouter: Boolean(!settings.openrouterKey && envKeys.openrouterKey),
            nvidia: Boolean(!settings.nvidiaKey && envKeys.nvidiaKey),
          },
        }
      : { id: 'main', examDate: '2027-02-15', dailyMinutes: 90, openrouterKeyMasked: '', nvidiaKeyMasked: '', hasOpenrouterKey: Boolean(envKeys.openrouterKey), hasNvidiaKey: Boolean(envKeys.nvidiaKey), keysFromEnv: { openrouter: Boolean(envKeys.openrouterKey), nvidia: Boolean(envKeys.nvidiaKey) } },
  })
}

export async function PUT(req: NextRequest) {
  const body = (await req.json()) as {
    examDate?: string
    dailyMinutes?: number
    openrouterKey?: string
    nvidiaKey?: string
  }
  const data: {
    examDate?: string
    dailyMinutes?: number
    openrouterKey?: string
    nvidiaKey?: string
  } = {}
  if (body.examDate) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(body.examDate)) {
      return NextResponse.json({ error: 'examDate must be YYYY-MM-DD' }, { status: 400 })
    }
    data.examDate = body.examDate
  }
  if (body.dailyMinutes) {
    data.dailyMinutes = Math.max(30, Math.min(600, Math.round(Number(body.dailyMinutes))))
  }
  // API keys: saved once here by the admin; every user of the app then uses these keys
  // server-side. Empty string means "clear"; undefined means "leave unchanged".
  if (typeof body.openrouterKey === 'string') {
    data.openrouterKey = body.openrouterKey.trim().slice(0, 200)
  }
  if (typeof body.nvidiaKey === 'string') {
    data.nvidiaKey = body.nvidiaKey.trim().slice(0, 200)
  }
  const settings = await db.settings.upsert({
    where: { id: 'main' },
    update: data,
    create: {
      id: 'main',
      examDate: data.examDate ?? '2027-02-15',
      dailyMinutes: data.dailyMinutes ?? 90,
      openrouterKey: data.openrouterKey ?? '',
      nvidiaKey: data.nvidiaKey ?? '',
    },
  })
  return NextResponse.json({
    ok: true,
    openrouterKeyMasked: maskKey(settings.openrouterKey),
    nvidiaKeyMasked: maskKey(settings.nvidiaKey),
  })
}
