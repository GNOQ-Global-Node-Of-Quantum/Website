"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/app/shared/features/language-context";
import type { ProductApp } from "@/app/shared/features/site-content";

function AppCard({
  app,
  notifyCta,
  downloadCta,
  platformsLabel,
}: {
  app: ProductApp;
  notifyCta: string;
  downloadCta: string;
  platformsLabel: string;
}) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#0F4C81]/35 hover:shadow-lg hover:shadow-[#0F4C81]/8 sm:p-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#0F4C81]/15 bg-[#0F4C81]/10 text-[#0F4C81]">
            <Smartphone className="h-7 w-7" />
          </div>
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#0F4C81]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0F4C81]">
                {app.status}
              </span>
              <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                {app.price}
              </span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {app.name}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-500">
              {app.description}
            </p>
          </div>
        </div>
        <Button
          className="w-full bg-[#00719C] px-6 py-5 text-sm font-medium text-white shadow-lg shadow-[#0F4C81]/20 hover:bg-[#005f85] lg:w-auto"
          asChild
        >
          {app.downloadHref ? (
            <a href={app.downloadHref} download={app.downloadFilename}>
              {downloadCta}
              <Download className="ml-2 h-4 w-4" />
            </a>
          ) : (
            <Link href="/contato">
              {notifyCta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          )}
        </Button>
      </div>

      <div className="mt-8 grid gap-6 border-t border-gray-100 pt-6 lg:grid-cols-[1fr_280px]">
        <ul className="space-y-3">
          {app.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-gray-600"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0F4C81]" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
            {platformsLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {app.platforms.map((platform) => (
              <span
                key={platform}
                className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm ring-1 ring-gray-200"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function AplicativosPage() {
  const { content } = useLanguage();
  const page = content.appsPage;

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="relative overflow-hidden border-b border-gray-100 bg-white">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0F4C81 1px, transparent 1px), linear-gradient(90deg, #0F4C81 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-6 md:pb-24 md:pt-28 lg:px-8">
          <div className="mb-6 flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="transition-colors hover:text-gray-600">
              {content.nav[0].label}
            </Link>
            <span>/</span>
            <span className="text-gray-500">{page.breadcrumb}</span>
          </div>
          <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0F4C81]/20 bg-[#0F4C81]/8 px-4 py-1.5 text-sm font-medium text-[#0F4C81]">
                <Download className="h-3.5 w-3.5" />
                {page.badge}
              </div>
              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                {page.title}
                <span className="block text-[#0F4C81]">
                  {page.titleAccent}
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
                {page.description}
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F4C81]/10 text-[#0F4C81]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {page.noticeTitle}
                  </p>
                  <p className="text-xs text-gray-500">{page.noticeText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="h-px w-8 bg-[#0F4C81]" />
                <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
                  {page.sectionEyebrow}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                {page.sectionTitle}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-gray-500">
              {page.sectionDescription}
            </p>
          </div>

          <div className="space-y-5">
            {page.apps.map((app) => (
              <AppCard
                key={app.name}
                app={app}
                notifyCta={page.notifyCta}
                downloadCta={page.downloadCta}
                platformsLabel={page.platformsLabel}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 md:grid-cols-3 lg:px-8">
          {page.featureCards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#0F4C81]/15 bg-[#0F4C81]/10 text-[#0F4C81]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-gray-100 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            {page.finalTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-500">
            {page.finalDescription}
          </p>
          <Button
            size="lg"
            className="mt-10 bg-[#00719C] px-10 py-7 text-base font-medium text-white shadow-xl shadow-[#0F4C81]/20 hover:bg-[#005f85]"
            asChild
          >
            <Link href="/contato">
              {page.finalCta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
