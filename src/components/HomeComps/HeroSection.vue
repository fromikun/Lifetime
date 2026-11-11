<!-- Hero 区（纯展示）：左侧文案为静态内容，右侧通过插槽接收生命日历 Demo -->
<template>
  <section class="relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        class="absolute -top-32 left-1/2 h-96 w-2xl -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]"
      ></div>
      <div
        class="absolute top-40 -left-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]"
      ></div>
      <div
        class="absolute top-64 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[100px]"
      ></div>
    </div>

    <div
      class="relative mx-auto grid w-full items-start gap-12 px-6 pt-14 pb-24 sm:px-10 lg:grid-cols-2 lg:gap-10 lg:px-16 lg:pt-16 xl:px-24 xl:pt-20"
    >
      <div class="lg:max-w-2xl lg:pt-60">
        <span
          data-reveal
          class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-zinc-300"
        >
          <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400"></span>
          Memento Mori · 向死而生
        </span>

        <h1
          data-reveal
          style="--d: 100ms"
          class="mt-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl xl:text-6xl"
        >
          你的一生，<br />
          只有
          <span
            class="bg-linear-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent"
          >
            4680 周 </span
          >。
        </h1>

        <p
          data-reveal
          style="--d: 200ms"
          class="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          以 90 岁为限，人生不过 4680 个小格子。Lifetime 把你的生命画成一张周历——
          每一格是一周。看清已经过去的，珍惜还未到来的。
        </p>

        <div data-reveal style="--d: 300ms" class="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#download"
            class="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:shadow-cyan-400/30"
          >
            开始记录我的一生
            <svg
              class="h-4 w-4 transition group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M5 12h14m-6-6 6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
          <a
            href="#how"
            class="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-300 transition hover:border-white/30 hover:text-white"
          >
            先看看怎么用
          </a>
        </div>

        <dl data-reveal style="--d: 400ms" class="mt-12 grid max-w-md grid-cols-3 gap-6">
          <div>
            <dt class="text-xs text-zinc-500">生命上限</dt>
            <dd class="mt-1 text-2xl font-bold">90 年</dd>
          </div>
          <div>
            <dt class="text-xs text-zinc-500">生命格子</dt>
            <dd class="mt-1 text-2xl font-bold">4,680 格</dd>
          </div>
          <div>
            <dt class="text-xs text-zinc-500">每一格</dt>
            <dd class="mt-1 text-2xl font-bold">1 周</dd>
          </div>
        </dl>
      </div>

      <div
        data-reveal
        style="--d: 250ms"
        class="mx-auto w-full max-w-130 lg:mx-0 lg:justify-self-end"
      >
        <slot name="grid"></slot>
      </div>
    </div>
  </section>
</template>
