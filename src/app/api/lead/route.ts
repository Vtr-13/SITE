// src/app/api/lead/route.ts  ou pages/api/lead.ts

import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = await req.json()

  await fetch(process.env.N8N_WEBHOOK_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  return NextResponse.json({ ok: true })
}
