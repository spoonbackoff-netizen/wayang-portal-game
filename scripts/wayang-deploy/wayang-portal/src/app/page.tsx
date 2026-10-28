"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink, Flame, Gamepad2, ListMusic, Puzzle, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  PuppetWarrior,
  PuppetDancer,
  PuppetClown,
  AwanMotif,
  BungaMotif,
  WayangBorder,
  PuppetIcon,
  CornerFlourish,
} from "@/components/wayang/decor";

/* ============== Data ============== */

const GAMES = [
  {
    id: "teka-bayang",
    title: "Teka-Bayang",
    subtitle: "Puzzle of Shadows",
    category: "Puzzle",
    href: "https://sites.google.com/d/1IrNWOEn-xvZfcL12duk7RLznMLyfRCGa/p/1T8nwLTvOo6SOqywxukoKHns5dZBJ_vRh/edit?pli=1",
    isExternal: true,
    blurb:
      "Slide the perforated leather pieces back into their rightful place behind the kelir. A meditative shape-matching puzzle that rewards patience — every solved figure lights up like a puppet in motion.",
    description:
      "Inspired by the way the dalang re-stores his puppets between acts, Teka-Bayang is a hand-crafted puzzle that asks you to restore order to a scattered cast of shadow figures. Move, rotate, and align — when the silhouette is whole, the flame behind the screen ignites.",
    tags: ["Logic", "Spatial", "Single-player"],
    icon: Puzzle,
    accent: "gold",
    duration: "≈ 10 min rounds",
    players: "1",
    difficulty: "Casual → Tricky",
  },
  {
    id: "irama-teka",
    title: "Irama & Teka",
    subtitle: "Rhythm & Quiz",
    category: "Rhythm + Quiz",
    href: "https://y1b3g91bbq41-d.space-z.ai",
    isExternal: true,
    blurb:
      "Tap to the beat of the gamelan, then answer the riddle before the gong fades. Half concert, half quiz — your reflexes and your wits share the same stage.",
    description:
      "Irama & Teka blends two Malaysian pastimes into one: a rhythm layer where you keep time with traditional gamelan patterns, and a quiz layer that fires culture-soaked questions at you the moment the music lets up. Stay on beat, stay sharp — the dalang demands both.",
    tags: ["Rhythm", "Trivia", "Single-player"],
    icon: ListMusic,
    accent: "crimson",
    duration: "≈ 15 min runs",
    players: "1",
    difficulty: "Lively",
  },
] as const;

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Permainan", href: "#games" },
  { label: "Tentang", href: "#about" },
  { label: "Wayang Kulit", href: "#wayang" },
];

/* ============== Section: Navbar ============== */

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-gold/15"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="text-gold lamp-flicker">
            <PuppetIcon className="w-7 h-7" />
          </span>
          <span className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-[0.18em] text-parchment group-hover:text-gold-bright transition-colors">
            WAYANG
          </span>
          <span className="hidden sm:inline text-[0.65rem] font-[family-name:var(--font-serif)] italic text-gold/70 tracking-wider">
            portal bayang
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-[family-name:var(--font-serif)] text-parchment/85 hover:text-gold-bright transition-colors relative group"
              >
                {link.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#games"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-[family-name:var(--font-display)] tracking-wider text-gold-bright hover:bg-gold/20 hover:border-gold/70 transition-all"
          >
            <Flame className="w-4 h-4" />
            <span>MAIN SEKARANG</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-gold/30 text-gold"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1">
              <span className="block w-4 h-0.5 bg-current" />
              <span className="block w-4 h-0.5 bg-current" />
              <span className="block w-4 h-0.5 bg-current" />
            </div>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-gold/15 bg-background/95 backdrop-blur-md">
          <ul className="px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-[family-name:var(--font-serif)] text-parchment/90 hover:text-gold-bright rounded-md hover:bg-gold/10 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

/* ============== Section: Hero ============== */

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Vignette backdrop — calmer than before so text reads cleanly */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 45%, oklch(0.20 0.035 30 / 0.6) 0%, oklch(0.13 0.018 35 / 0.85) 55%, oklch(0.09 0.012 30 / 1) 100%)",
        }}
      />

      {/* Puppets flanking the title — hidden on small screens to keep text uncrowded */}
      <div
        aria-hidden
        className={`hidden lg:block absolute left-0 bottom-0 -mb-6 lg:ml-16 xl:ml-24 w-32 xl:w-40 text-gold/30 lamp-flicker pointer-events-none ${
          reduce ? "" : "puppet-sway-slow"
        }`}
        style={{ filter: "drop-shadow(0 0 30px oklch(0.65 0.22 45 / 0.32))" }}
      >
        <PuppetWarrior className="w-full h-auto" />
      </div>
      <div
        aria-hidden
        className={`hidden lg:block absolute right-0 bottom-0 -mb-6 lg:mr-16 xl:mr-24 w-32 xl:w-40 text-gold/30 lamp-flicker pointer-events-none ${
          reduce ? "" : "puppet-sway"
        }`}
        style={{ filter: "drop-shadow(0 0 30px oklch(0.65 0.22 45 / 0.32))" }}
      >
        <PuppetDancer className="w-full h-auto -scale-x-100" />
      </div>

      {/* Title */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-3xl text-center fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-4 py-1.5 mb-7 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-bright lamp-flicker" />
          <span className="text-[0.7rem] font-[family-name:var(--font-display)] tracking-[0.28em] text-gold-bright uppercase">
            Portal Permainan Bayang
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-7xl md:text-8xl font-bold tracking-[0.04em] text-parchment leading-[1.05]">
          <span
            className="block"
            style={{
              background:
                "linear-gradient(120deg, oklch(0.82 0.14 80) 0%, oklch(0.95 0.10 90) 50%, oklch(0.70 0.16 70) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            WAYANG
          </span>
          <span className="block text-2xl sm:text-4xl md:text-5xl font-[family-name:var(--font-serif)] italic font-normal text-muted-foreground tracking-normal mt-3">
            an arcade behind the screen
          </span>
        </h1>

        <p className="mt-7 mx-auto max-w-xl text-base sm:text-lg font-[family-name:var(--font-serif)] text-parchment/85 leading-relaxed">
          Two plays lit by a single flame. Step behind the{" "}
          <span className="text-gold">kelir</span> and choose your story — a
          quiet puzzle, or a rhythm that answers back. More acts are being
          carved; this is just the overture.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#games"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-[family-name:var(--font-display)] tracking-[0.18em] font-semibold ember-pulse transition-all"
            style={{
              background:
                "linear-gradient(120deg, oklch(0.62 0.15 65) 0%, oklch(0.82 0.14 80) 50%, oklch(0.88 0.12 85) 100%)",
              color: "oklch(0.13 0.018 35)",
            }}
          >
            <Gamepad2 className="w-4 h-4" />
            PILIH PERMAINAN
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card/40 px-6 py-3 text-sm font-[family-name:var(--font-display)] tracking-[0.18em] text-parchment hover:bg-gold/15 hover:border-gold/70 transition-all"
          >
            KISAH WAYANG
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-12 flex items-center justify-center gap-6 sm:gap-10 text-center">
          {[
            { num: "2", label: "Permainan" },
            { num: "∞", label: "Pertandingan" },
            { num: "1", label: "Lampu Pelita" },
          ].map((stat, i) => (
            <React.Fragment key={stat.label}>
              {i > 0 && <Separator orientation="vertical" className="h-10 bg-gold/30" />}
              <div>
                <div className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-gold-bright">
                  {stat.num}
                </div>
                <div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.2em] text-parchment/70 font-[family-name:var(--font-serif)]">
                  {stat.label}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/60 text-[0.65rem] uppercase tracking-[0.3em] font-[family-name:var(--font-display)] flex flex-col items-center gap-2">
        <span>scroll</span>
        <span className="block w-px h-8 bg-gradient-to-b from-gold/70 to-transparent" />
      </div>
    </section>
  );
}

/* ============== Section: Games Showcase ============== */

function GameCard({ game, index }: { game: (typeof GAMES)[number]; index: number }) {
  const reduce = useReducedMotion();
  const Icon = game.icon;
  const isCrimson = game.accent === "crimson";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="wayang-card group relative overflow-hidden rounded-2xl border border-gold/20 bg-card/80 backdrop-blur-sm"
    >
      {/* Corner flourishes */}
      <CornerFlourish className="absolute top-1.5 left-1.5 w-7 h-7 text-gold/40 pointer-events-none" />
      <CornerFlourish className="absolute top-1.5 right-1.5 w-7 h-7 text-gold/40 pointer-events-none -scale-x-100" />
      <CornerFlourish className="absolute bottom-1.5 left-1.5 w-7 h-7 text-gold/40 pointer-events-none -scale-y-100" />
      <CornerFlourish className="absolute bottom-1.5 right-1.5 w-7 h-7 text-gold/40 pointer-events-none -scale-100" />

      {/* Glow backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background: isCrimson
            ? "radial-gradient(circle at 30% 0%, oklch(0.55 0.13 30 / 0.32) 0%, transparent 55%)"
            : "radial-gradient(circle at 30% 0%, oklch(0.72 0.16 75 / 0.22) 0%, transparent 55%)",
        }}
      />

      <div className="relative grid md:grid-cols-[280px_1fr] gap-0">
        {/* Puppet thumbnail panel */}
        <div className="relative h-56 md:h-full min-h-[280px] flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-gold/15">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 60%, oklch(0.20 0.04 30 / 0.9) 0%, oklch(0.10 0.018 35 / 1) 100%)",
            }}
          />
          {/* Soft halo behind puppet */}
          <div
            aria-hidden
            className="absolute w-44 h-44 rounded-full"
            style={{
              background: isCrimson
                ? "radial-gradient(circle, oklch(0.55 0.13 30 / 0.4) 0%, transparent 70%)"
                : "radial-gradient(circle, oklch(0.78 0.13 80 / 0.32) 0%, transparent 70%)",
            }}
          />
          {/* The puppet */}
          <div
            className={`relative w-32 sm:w-36 md:w-44 text-parchment/85 lamp-flicker ${
              reduce ? "" : "puppet-sway-slow"
            }`}
            style={{
              filter: isCrimson
                ? "drop-shadow(0 0 28px oklch(0.55 0.13 30 / 0.55))"
                : "drop-shadow(0 0 28px oklch(0.78 0.13 80 / 0.45))",
            }}
          >
            {isCrimson ? <PuppetClown className="w-full h-auto" /> : <PuppetWarrior className="w-full h-auto" />}
          </div>

          {/* Floating category badge */}
          <div className="absolute top-3 left-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.65rem] font-[family-name:var(--font-display)] tracking-[0.2em] uppercase ${
                isCrimson
                  ? "border-crimson/50 bg-crimson-deep/30 text-crimson"
                  : "border-gold/50 bg-gold/15 text-gold"
              }`}
            >
              <Icon className="w-3 h-3" />
              {game.category}
            </span>
          </div>
        </div>

        {/* Right: detail panel */}
        <div className="relative p-6 sm:p-7 md:p-8 flex flex-col">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-[0.7rem] uppercase tracking-[0.28em] text-gold/80 font-[family-name:var(--font-display)]">
                {String(index + 1).padStart(2, "0")} — Permainan
              </div>
              <h3 className="mt-1 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-parchment tracking-[0.03em]">
                {game.title}
              </h3>
              <p className="mt-0.5 font-[family-name:var(--font-serif)] italic text-lg text-gold/80">
                {game.subtitle}
              </p>
            </div>
            <BungaMotif className="w-9 h-9 text-gold/30 shrink-0 slow-spin" />
          </div>

          <p className="mt-4 text-sm sm:text-base font-[family-name:var(--font-serif)] text-parchment/85 leading-relaxed">
            {game.blurb}
          </p>

          {/* Meta row */}
          <dl className="mt-5 grid grid-cols-3 gap-3 text-xs">
            <div>
              <dt className="text-gold/80 uppercase tracking-wider text-[0.65rem] font-[family-name:var(--font-display)]">
                Pemain
              </dt>
              <dd className="mt-1 text-parchment font-[family-name:var(--font-serif)] text-sm">
                {game.players}
              </dd>
            </div>
            <div>
              <dt className="text-gold/80 uppercase tracking-wider text-[0.65rem] font-[family-name:var(--font-display)]">
                Tempoh
              </dt>
              <dd className="mt-1 text-parchment font-[family-name:var(--font-serif)] text-sm">
                {game.duration}
              </dd>
            </div>
            <div>
              <dt className="text-gold/80 uppercase tracking-wider text-[0.65rem] font-[family-name:var(--font-display)]">
                Aras
              </dt>
              <dd className="mt-1 text-parchment font-[family-name:var(--font-serif)] text-sm">
                {game.difficulty}
              </dd>
            </div>
          </dl>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {game.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-secondary/60 px-2.5 py-0.5 text-[0.7rem] font-[family-name:var(--font-serif)] text-parchment/80"
              >
                <Sparkles className="w-2.5 h-2.5 text-gold/60" />
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-auto pt-6">
            <Button
              asChild
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-6 py-3 text-sm font-[family-name:var(--font-display)] tracking-[0.18em] text-gold-bright hover:bg-gold/20 hover:border-gold/70 transition-all group/btn"
              variant="outline"
              size="lg"
            >
              <Link
                href={game.href}
                target={game.isExternal ? "_blank" : undefined}
                rel={game.isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2"
              >
                MAIN SEKARANG
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                {game.isExternal && <ExternalLink className="w-3 h-3 opacity-70" />}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function GamesShowcase() {
  return (
    <section id="games" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      {/* Decorative top border */}
      <div className="mx-auto max-w-7xl">
        <div className="text-gold/30 mb-3">
          <WayangBorder className="w-full h-5" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 sm:mb-20"
        >
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 font-[family-name:var(--font-display)]">
            ★ Pentas Utama ★
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold text-parchment tracking-[0.03em]">
            Pilih <span className="gold-text">Permainan</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl font-[family-name:var(--font-serif)] italic text-parchment/75 text-base sm:text-lg">
            Two acts are lit on the stage tonight. Choose your play, then take
            your seat behind the screen.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8">
          {GAMES.map((game, i) => (
            <GameCard key={game.id} game={game} index={i} />
          ))}
        </div>

        {/* Coming-soon placeholder strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 sm:mt-8"
        >
          <div className="rounded-2xl border border-dashed border-gold/15 bg-secondary/30 px-6 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="text-gold/40">
                <BungaMotif className="w-8 h-8 slow-spin-rev" />
              </div>
              <div>
                <div className="font-[family-name:var(--font-display)] text-base sm:text-lg text-parchment tracking-wider">
                  Lebih banyak akan datang
                </div>
                <div className="font-[family-name:var(--font-serif)] italic text-sm text-muted-foreground">
                  More acts are being carved — check back after the next full moon.
                </div>
              </div>
            </div>
            <div className="text-[0.65rem] uppercase tracking-[0.3em] text-gold/60 font-[family-name:var(--font-display)]">
              Coming Soon
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============== Section: About / Cultural ============== */

function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div aria-hidden className="absolute top-0 inset-x-0 flex justify-center text-gold/15 pointer-events-none">
        <AwanMotif className="w-full max-w-3xl h-auto" />
      </div>

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 font-[family-name:var(--font-display)]">
            ✦ Latar Belakang ✦
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-parchment tracking-[0.03em]">
            What is <span className="gold-text">Wayang Kulit</span>?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-8 sm:gap-12 items-start">
          {/* Puppet showcase column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-xs"
          >
            <div className="relative rounded-xl border border-gold/20 bg-card/60 backdrop-blur-sm p-6 sm:p-8 text-center">
              <div
                aria-hidden
                className="absolute inset-0 rounded-xl"
                style={{
                  background:
                    "radial-gradient(circle at 50% 35%, oklch(0.20 0.04 30 / 0.85) 0%, transparent 70%)",
                }}
              />
              <div className="relative inline-flex justify-center w-32 sm:w-36 text-gold/70 lamp-flicker puppet-sway-slow">
                <PuppetDancer className="w-full h-auto" />
              </div>
              <p className="relative mt-4 font-[family-name:var(--font-serif)] italic text-sm text-parchment/70">
                a single puppet, hand-perforated
              </p>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 text-base sm:text-lg font-[family-name:var(--font-serif)] text-parchment/85 leading-relaxed"
          >
            <p>
              <span className="text-gold font-semibold">Wayang Kulit</span> is
              the traditional shadow-puppet theatre of the Malay world — a
              nightly performance where flat, hand-perforated leather figures
              are pressed against a stretched cotton screen called the{" "}
              <em className="text-parchment">kelir</em>. Behind the screen, a
              single oil lamp — the <em className="text-parchment">pelita</em>{" "}
              — throws their shadows into the night.
            </p>
            <p>
              One performer, the <span className="text-gold font-semibold">dalang</span>,
              does it all: he speaks every voice, moves every puppet, taps the
              beat on the <em className="text-parchment">kekisi</em> with his
              feet, and cues the gamelan orchestra hidden behind him. A single
              night's play can run for hours, weaving the Ramayana and the
              Mahabharata with local gossip and clownish interludes.
            </p>
            <p>
              This arcade borrows that stage. Each game is one act in a longer
              season — short, lit, and meant to be played by the warm glow of
              the lamp. The puppets are carvings in progress; we add to the cast
              as we go.
            </p>

            <ul className="pt-3 space-y-2.5">
              {[
                {
                  term: "Kelir",
                  def: "the white cotton screen that catches the shadows",
                },
                {
                  term: "Pelita",
                  def: "the oil lamp whose flicker gives the puppets their breath",
                },
                {
                  term: "Dalang",
                  def: "the puppeteer — voice, hands, feet, and conductor at once",
                },
                {
                  term: "Gunungan",
                  def: "the keystone figure that opens and closes each performance",
                },
              ].map((item) => (
                <li
                  key={item.term}
                  className="flex items-start gap-3 border-l-2 border-gold/50 pl-4 py-1.5"
                >
                  <span className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-gold min-w-[5.5rem]">
                    {item.term}
                  </span>
                  <span className="text-sm sm:text-base text-parchment/85">
                    {item.def}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

/* ============== Section: How to Play / Roadmap ============== */

function RoadmapSection() {
  const steps = [
    {
      num: "01",
      title: "Pilih Pentas",
      en: "Pick the Stage",
      desc: "Scroll up to the permainan list and choose between the puzzle and the rhythm game. Each opens in its own tab — bring the lamp with you.",
    },
    {
      num: "02",
      title: "Nyalakan Pelita",
      en: "Light the Lamp",
      desc: "Dim the room a little. The visual mood of each game was tuned for a warm, low-lit screen — like sitting behind the kelir.",
    },
    {
      num: "03",
      title: "Main & Teka",
      en: "Play & Guess",
      desc: "Whether you are sliding shadows into place or tapping gamelan beats, the dalang rewards a steady hand and a sharper mind.",
    },
    {
      num: "04",
      title: "Kembali Ke Pentas",
      en: "Return to the Stage",
      desc: "More acts are being carved. Bookmark this portal and revisit after every full moon — the cast will only grow.",
    },
  ];

  return (
    <section id="wayang" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 font-[family-name:var(--font-display)]">
            ✺ Cara Bermain ✺
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-parchment tracking-[0.03em]">
            Four <span className="gold-text">Acts</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-xl border border-gold/15 bg-card/60 backdrop-blur-sm p-6 h-full"
            >
              <div className="font-[family-name:var(--font-display)] text-4xl text-gold/30 leading-none">
                {step.num}
              </div>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold text-parchment tracking-wider">
                {step.title}
              </h3>
              <p className="font-[family-name:var(--font-serif)] italic text-xs text-gold/70 mb-3">
                {step.en}
              </p>
              <p className="text-sm font-[family-name:var(--font-serif)] text-parchment/80 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== Section: Footer ============== */

function Footer() {
  return (
    <footer className="relative mt-auto border-t border-gold/15 bg-shadow/40">
      <div className="text-gold/30">
        <WayangBorder className="w-full h-5" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="text-gold lamp-flicker">
                <PuppetIcon className="w-7 h-7" />
              </span>
              <span className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-[0.18em] text-parchment">
                WAYANG
              </span>
            </div>
            <p className="mt-4 max-w-md font-[family-name:var(--font-serif)] text-sm text-parchment/75 leading-relaxed">
              An arcade behind the screen. Two plays tonight, more being
              carved. Built in the spirit of the dalang — one hand, one lamp,
              one story at a time.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#games"
                className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-[0.7rem] font-[family-name:var(--font-display)] tracking-[0.18em] text-gold-bright hover:bg-gold/20 transition-colors"
              >
                MAIN
                <ArrowRight className="w-3 h-3" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center rounded-full border border-gold/30 px-3.5 py-1.5 text-[0.7rem] font-[family-name:var(--font-display)] tracking-[0.18em] text-parchment/80 hover:text-gold-bright hover:border-gold/60 transition-colors"
              >
                KISAH
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.24em] text-gold/80 mb-3">
              Permainan
            </h4>
            <ul className="space-y-2 text-sm font-[family-name:var(--font-serif)]">
              {GAMES.map((g) => (
                <li key={g.id}>
                  <a
                    href={g.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-parchment/80 hover:text-gold-bright transition-colors"
                  >
                    {g.title}
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                </li>
              ))}
              <li className="text-parchment/60 italic text-xs pt-1">
                Lebih banyak akan datang
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.24em] text-gold/80 mb-3">
              Istilah
            </h4>
            <ul className="space-y-2 text-sm font-[family-name:var(--font-serif)] text-parchment/80">
              <li>Kelir — the screen</li>
              <li>Pelita — the lamp</li>
              <li>Dalang — the puppeteer</li>
              <li>Gunungan — the keystone</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-[family-name:var(--font-serif)] text-parchment/70">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/60 lamp-flicker" />
            <span>
              Lit by the pelita · {new Date().getFullYear()} · Wayang Arcade
            </span>
          </div>
          <div className="italic">
            "Sa-bagai wayang, semua orang menonton bayangan."
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============== Root Page ============== */

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background paper-grain">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <GamesShowcase />
        <AboutSection />
        <RoadmapSection />
      </main>
      <Footer />
    </div>
  );
}
