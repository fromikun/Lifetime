<!-- 页脚（纯展示，静态内容） -->
<template>
  <footer id="about" class="border-t border-white/5">
    <div class="mx-auto px-6 py-14">
      <div class="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <a href="#" class="flex items-center gap-2.5">
            <span
              class="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-violet-500 to-cyan-400"
            >
              <svg
                viewBox="0 0 24 24"
                class="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M6 4v16M18 4v16" stroke-linecap="round" />
                <path d="M6 7h12M6 12h12M6 17h12" stroke-linecap="round" />
              </svg>
            </span>
            <span class="text-lg font-bold tracking-tight">Lifetime</span>
          </a>
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
            把 90 年画成 4680 格，提醒你把时间花在真正重要的事上。
          </p>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-zinc-300">产品</h4>
          <ul class="mt-4 space-y-2.5 text-sm text-zinc-500">
            <li><a href="#download" class="transition hover:text-white">下载</a></li>
            <li><a href="#features" class="transition hover:text-white">功能特性</a></li>
            <li><a href="#how" class="transition hover:text-white">如何使用</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-zinc-300">支持</h4>
          <ul class="mt-4 space-y-2.5 text-sm text-zinc-500">
            <li><a href="#" class="transition hover:text-white">帮助中心</a></li>
            <li><a href="#" class="transition hover:text-white">隐私政策</a></li>
            <li><a href="#" class="transition hover:text-white">服务条款</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-zinc-300">关注我们</h4>
          <ul class="mt-4 space-y-2.5 text-sm text-zinc-500">
            <li><a href="#" class="transition hover:text-white">GitHub</a></li>
            <li><a href="#" class="transition hover:text-white">X (Twitter)</a></li>
            <li><a href="#" class="transition hover:text-white">微博</a></li>
          </ul>
        </div>
      </div>

      <div
        class="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-zinc-600"
      >
        <span>© 2026 Lifetime</span>
        <span class="font-serif">Memento mori · memento vivere</span>
      </div>
    </div>
  </footer>
</template>
