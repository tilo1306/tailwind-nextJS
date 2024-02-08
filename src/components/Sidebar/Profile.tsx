/* eslint-disable @next/next/no-img-element */
import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="flex grid-cols-profile items-center gap-3">
      <img
        className="h-10 w-10 rounded-full"
        src="https://github.com/tilo1306.png"
        alt="progile"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Douglas S Oliveira
        </span>
        <span className="truncate text-sm text-zinc-500">
          doug1306@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
