import { useEffect, useRef, type PointerEvent } from 'react'
import druidIcon from '../assets/class-icons/druid_claws.png'
import hunterIcon from '../assets/class-icons/hunter_bow.png'
import mageIcon from '../assets/class-icons/mage_staff.png'
import paladinIcon from '../assets/class-icons/paladin_hammer.png'
import priestIcon from '../assets/class-icons/priest_staff.png'
import rogueIcon from '../assets/class-icons/rogue_poison_daggers.png'
import shamanIcon from '../assets/class-icons/shaman_totem.png'
import warlockIcon from '../assets/class-icons/warlock_demon_hand.png'
import warriorIcon from '../assets/class-icons/warrior_sword.png'
import { checkpoints, formatDate, keyDates } from '../data/plan.ts'
import { roster, type Character, type CharacterClass } from '../data/roster.ts'

const classIcons: Record<CharacterClass, string> = {
  Warrior: warriorIcon,
  Druid: druidIcon,
  Paladin: paladinIcon,
  Priest: priestIcon,
  Hunter: hunterIcon,
  Rogue: rogueIcon,
  Mage: mageIcon,
  Shaman: shamanIcon,
  Warlock: warlockIcon,
}

const DAY_MS = 86_400_000
const DAY_WIDTH = 28
const TRACK_PAD = 24
const MONTH_ROW = 28
const DAY_ROW = 24
const EVENT_ROW = 36
const MILESTONE_ROW = 44
const HEADER_HEIGHT = MONTH_ROW + DAY_ROW + EVENT_ROW + MILESTONE_ROW
const CHARACTER_ROW = 56

// Work in whole UTC days so daylight saving never shifts a marker
const toDay = (iso: string) => Date.parse(`${iso}T00:00:00Z`) / DAY_MS
const now = new Date()
const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / DAY_MS
const endDay = toDay(checkpoints[checkpoints.length - 1].date)
// Start when the beta opened
const startDay = toDay(keyDates[0].start)
const dayCount = endDay - startDay + 1
const trackWidth = TRACK_PAD * 2 + dayCount * DAY_WIDTH

// Center of a day's column, in px from the left edge of the track
const dayX = (day: number) => TRACK_PAD + (day - startDay + 0.5) * DAY_WIDTH

const days = Array.from({ length: dayCount }, (_, i) => {
  const date = new Date((startDay + i) * DAY_MS)
  return { day: startDay + i, date: date.getUTCDate(), weekday: date.getUTCDay(), month: date.getUTCMonth(), year: date.getUTCFullYear() }
})
const monthStarts = days.filter((d, i) => i === 0 || d.date === 1)
const monthFormat = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })

const events = keyDates.map((e) => ({ ...e, day: toDay(e.start), endDay: e.end ? toDay(e.end) : endDay }))
const milestones = checkpoints.map((c) => ({ ...c, day: toDay(c.date), level: Math.max(...c.dungeons.map((d) => d.level)) }))
const nextMilestone = milestones.find((m) => m.day >= today) ?? milestones[milestones.length - 1]
const launch = events.find((e) => e.label === 'WoW Forever')

// The planned pace: level 5 on launch day, then each checkpoint's level by its date
const pace = [...(launch ? [{ day: launch.day, level: 5 }] : []), ...milestones]

// The day the plan expects a character to reach a level, interpolated between pace points.
// Levels below the first point sit on launch day; anything past the last sits on the final checkpoint.
function expectedDay(level: number) {
  if (level <= pace[0].level) return pace[0].day
  for (let i = 1; i < pace.length; i++) {
    const a = pace[i - 1]
    const b = pace[i]
    if (level <= b.level) return a.day + ((level - a.level) / (b.level - a.level)) * (b.day - a.day)
  }
  return pace[pace.length - 1].day
}

// Release stands out in gold; anything not listed falls back to bronze
const eventTones: Record<string, string> = {
  'Name Reservations': 'bg-info text-info-content',
  'WoW Forever': 'bg-primary text-primary-content',
}

function ClassBadge({ character }: { character: Character }) {
  return (
    <div className="relative size-11">
      <img
        src={classIcons[character.className]}
        alt=""
        className="size-full drop-shadow-[0_2px_4px_rgb(0_0_0/0.5)]"
        draggable={false}
      />
      <span className="badge badge-primary badge-xs absolute -right-1 -bottom-1 font-bold">{character.level}</span>
    </div>
  )
}

export default function Timeline() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const drag = useRef<{ x: number; scrollLeft: number } | null>(null)

  // Scroll so the given day sits just right of the sticky name column
  const scrollToDay = (day: number) => {
    scrollerRef.current?.scrollTo({ left: dayX(day) - 64, behavior: 'smooth' })
  }

  // Click-and-drag panning for mouse users; touch and trackpads already scroll sideways
  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !scrollerRef.current) return
    drag.current = { x: e.clientX, scrollLeft: scrollerRef.current.scrollLeft }
  }
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current || !scrollerRef.current) return
    scrollerRef.current.scrollLeft = drag.current.scrollLeft - (e.clientX - drag.current.x)
  }
  const endDrag = () => {
    drag.current = null
  }

  // Open on today rather than the start of the beta
  useEffect(() => {
    scrollerRef.current?.scrollTo({ left: dayX(today) - 64 })
  }, [])

  return (
    // The chart fills the browser up to 1600px; the intro stays in a narrower 1200px column
    <section id="timeline" className="mx-auto w-full max-w-[1600px] px-4 py-12">
      {/* Keep this copy in sync with docs/content/forever-together-plan.md */}
      <header className="mx-auto mb-8 max-w-[1200px]">
        <h2 className="mb-3 text-3xl font-bold text-white">Leveling Timeline</h2>
        <p className="max-w-3xl text-base-content/80">
          The dates use roughly how long each level took a relaxed player in Classic, sped up by rested XP doubling
          monster-kill XP. That works out to about 105 hours played from 5 to 60. WoW Forever's numbers aren't known
          yet, so check the pace at the first few checkpoints and shift later dates if needed.
        </p>
      </header>
      <div className="card overflow-hidden border border-base-content/10 bg-base-100">
        <div className="flex flex-wrap items-center gap-2 border-b border-base-content/10 px-4 py-3">
          <span className="mr-auto text-sm text-base-content/60">Drag or scroll sideways · hover a level for its dungeons</span>
          <button type="button" className="btn btn-ghost btn-xs" onClick={() => scrollToDay(today)}>
            Today
          </button>
          {launch && (
            <button type="button" className="btn btn-ghost btn-xs" onClick={() => scrollToDay(launch.day)}>
              Launch
            </button>
          )}
          <button type="button" className="btn btn-ghost btn-xs" onClick={() => scrollToDay(nextMilestone.day)}>
            Next checkpoint
          </button>
          <button type="button" className="btn btn-ghost btn-xs" onClick={() => scrollToDay(endDay)}>
            Level 60
          </button>
        </div>
        <div
          ref={scrollerRef}
          className="cursor-grab overflow-x-auto overflow-y-hidden pb-3 select-none active:cursor-grabbing"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
        >
          <div className="flex w-max">
            {/* Character names stay pinned while the dates scroll underneath */}
            <div className="sticky left-0 z-20 w-36 shrink-0 border-r border-base-content/10 bg-base-100 sm:w-44">
              <div className="flex items-end px-4 pb-3 text-xs font-semibold tracking-wide text-base-content/50 uppercase" style={{ height: HEADER_HEIGHT }}>
                Character
              </div>
              {roster.map((character, i) => (
                <div
                  key={character.name}
                  className={`flex flex-col justify-center border-t border-base-content/10 px-4 ${i % 2 ? 'bg-base-200/40' : ''}`}
                  style={{ height: CHARACTER_ROW }}
                >
                  <span className="truncate font-semibold">{character.name}</span>
                  <span className="truncate text-xs text-base-content/60">
                    {character.race} {character.className}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative shrink-0" style={{ width: trackWidth }}>
              {/* Weekend shading, from the day numbers down; drawn first so everything else sits on top */}
              {days
                .filter((d) => d.weekday === 0 || d.weekday === 6)
                .map((d) => (
                  <div
                    key={d.day}
                    className="pointer-events-none absolute bottom-0 bg-base-content/5"
                    style={{ left: dayX(d.day) - DAY_WIDTH / 2, width: DAY_WIDTH, top: MONTH_ROW }}
                  />
                ))}

              {/* Months */}
              <div className="relative" style={{ height: MONTH_ROW }}>
                {monthStarts.map((d) => (
                  <span
                    key={d.day}
                    className="absolute top-2 pl-2 text-xs font-semibold whitespace-nowrap text-base-content/80"
                    style={{ left: dayX(d.day) - DAY_WIDTH / 2 }}
                  >
                    {monthFormat.format(new Date(d.day * DAY_MS))}
                  </span>
                ))}
              </div>

              {/* Day numbers; Saturdays are the usual meet-up day */}
              <div className="flex" style={{ height: DAY_ROW, paddingLeft: TRACK_PAD }}>
                {days.map((d) => (
                  <span
                    key={d.day}
                    className={`grid shrink-0 place-items-center text-[10px] ${
                      d.day === today
                        ? 'rounded-full bg-accent font-bold text-accent-content'
                        : d.weekday === 6
                          ? 'font-semibold text-base-content/80'
                          : 'text-base-content/40'
                    }`}
                    style={{ width: DAY_WIDTH }}
                    title={formatDate(new Date(d.day * DAY_MS).toISOString().slice(0, 10))}
                  >
                    {d.date}
                  </span>
                ))}
              </div>

              {/* Game-wide windows, each a banner from its first day to its last */}
              <div className="relative" style={{ height: EVENT_ROW }}>
                {events.map((e) => (
                  <div
                    key={e.label}
                    className={`absolute top-2 flex h-5 items-center rounded-full text-xs font-semibold ${eventTones[e.label] ?? 'bg-secondary text-secondary-content'}`}
                    // Banners meet mid-day, so one that ends the day the next begins doesn't overlap it
                    style={{ left: dayX(e.day) + 1, width: dayX(e.endDay) - dayX(e.day) - 2 }}
                    title={`${formatDate(e.start)} – ${e.end ? formatDate(e.end) : 'onward'}`}
                  >
                    {/* Keep the label in view, just clear of the pinned name column, while the banner is on screen */}
                    <span className="sticky left-38 px-3 whitespace-nowrap sm:left-46">{e.label}</span>
                  </div>
                ))}
              </div>

              {/* Plan checkpoints */}
              <div className="relative" style={{ height: MILESTONE_ROW }}>
                {milestones.map((m) => (
                  <div
                    key={m.date}
                    className="tooltip tooltip-bottom absolute top-1.5 z-10 -translate-x-1/2"
                    style={{ left: dayX(m.day) }}
                  >
                    <div className="tooltip-content w-64 p-3 text-left">
                      <p className="mb-1 text-xs font-semibold">{formatDate(m.date)}</p>
                      <ul className="space-y-1 text-xs">
                        {m.dungeons.map((d) => (
                          <li key={d.name}>
                            <span className="font-semibold">Level {d.level}</span> · {d.name}
                            <span className="block opacity-70">
                              {d.zone} · {d.range}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline btn-primary btn-xs rounded-full bg-base-100 whitespace-nowrap"
                      aria-label={`Level ${m.level} checkpoint, ${formatDate(m.date)}`}
                    >
                      Level {m.level}
                    </button>
                  </div>
                ))}
              </div>

              {/* Character rows, with a faint line per day */}
              <div
                style={{
                  // Tile one 1px line per day; a repeating gradient anti-aliases and drops lines at some offsets
                  backgroundImage: `linear-gradient(to right, color-mix(in oklab, var(--color-base-content) 6%, transparent) 1px, transparent 1px)`,
                  backgroundSize: `${DAY_WIDTH}px 100%`,
                  backgroundPosition: `${TRACK_PAD}px 0`,
                }}
              >
                {roster.map((character, i) => {
                  // Placed where the plan expects their level, so ahead of the today line means ahead of pace
                  const day = expectedDay(character.level)
                  return (
                    <div
                      key={character.name}
                      className={`relative border-t border-base-content/10 ${i % 2 ? 'bg-base-200/40' : ''}`}
                      style={{ height: CHARACTER_ROW }}
                    >
                      <div
                        className="tooltip tooltip-right absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                        style={{ left: dayX(day) }}
                      >
                        <div className="tooltip-content p-3 text-left text-xs">
                          <p className="font-semibold">{character.name}</p>
                          <p>
                            Level {character.level} {character.race} {character.className}
                          </p>
                          <p className="opacity-70">{character.roles.join(', ')}</p>
                          <p className="opacity-70">
                            Plan reaches level {character.level} on{' '}
                            {formatDate(new Date(Math.round(day) * DAY_MS).toISOString().slice(0, 10))}
                          </p>
                        </div>
                        <button type="button" className="rounded-full" aria-label={`${character.name}, level ${character.level}`}>
                          <ClassBadge character={character} />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Vertical guides drawn over everything below the date header */}
              {milestones.map((m) => (
                <div
                  key={m.date}
                  className="pointer-events-none absolute bottom-0 border-l border-dashed border-primary/40"
                  style={{ left: dayX(m.day), top: HEADER_HEIGHT - 4 }}
                />
              ))}
              <div
                className="pointer-events-none absolute bottom-0 border-l-2 border-accent"
                style={{ left: dayX(today), top: MONTH_ROW + DAY_ROW }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
