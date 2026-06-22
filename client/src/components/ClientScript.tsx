"use client";

import { useEffect } from "react";

export default function ClientScript() {
  useEffect(() => {
    function handleInvoke(btn: HTMLElement) {
      const cmd = btn.getAttribute("data-command");
      const targetId = btn.getAttribute("data-commandfor");
      if (!cmd || !targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;

      if (cmd === "show-modal" && typeof (target as HTMLDialogElement).showModal === "function") {
        (target as HTMLDialogElement).showModal();
      } else if (cmd === "close" && typeof (target as HTMLDialogElement).close === "function") {
        (target as HTMLDialogElement).close();
      } else if (cmd === "--toggle") {
        const willOpen = target.hasAttribute("hidden");
        if (willOpen) target.removeAttribute("hidden");
        else target.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", willOpen ? "true" : "false");
      } else if (cmd === "--copy") {
        const text = (target.textContent || "").trim();
        const done = () => {
          btn.classList.add("copied");
          setTimeout(() => btn.classList.remove("copied"), 1500);
        };
        if (navigator.clipboard?.writeText) {
          navigator.clipboard.writeText(text).then(done, done);
        } else {
          const ta = document.createElement("textarea");
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand("copy"); } catch { /* noop */ }
          document.body.removeChild(ta);
          done();
        }
      }
    }

    function selectTab(tab: HTMLElement) {
      const list = tab.closest('[role="tablist"]') || tab.parentElement;
      if (!list) return;
      const tabs = list.querySelectorAll('[role="tab"]');
      tabs.forEach((t) => {
        const sel = t === tab;
        t.setAttribute("aria-selected", sel ? "true" : "false");
        t.setAttribute("tabindex", sel ? "0" : "-1");
        const panelId = t.getAttribute("aria-controls");
        const panel = panelId && document.getElementById(panelId);
        if (panel) {
          if (sel) panel.removeAttribute("hidden");
          else panel.setAttribute("hidden", "");
        }
      });
    }

    function setupReveal() {
      if (!("IntersectionObserver" in window)) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const targets = document.querySelectorAll("[data-reveal]");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("is-revealed");
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      targets.forEach((t) => io.observe(t));
    }

    const clickHandler = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest("[data-command][data-commandfor]") as HTMLElement;
      if (btn) handleInvoke(btn);
      const tab = (e.target as HTMLElement).closest('[role="tab"]') as HTMLElement;
      if (tab) selectTab(tab);
    };

    const keyHandler = (e: KeyboardEvent) => {
      const tab = (e.target as HTMLElement).closest('[role="tab"]') as HTMLElement;
      if (!tab) return;
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        const list = tab.closest('[role="tablist"]')!;
        const tabs = Array.from(list.querySelectorAll('[role="tab"]'));
        const i = tabs.indexOf(tab);
        const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length] as HTMLElement;
        next.focus();
        selectTab(next);
        e.preventDefault();
      }
    };

    document.addEventListener("click", clickHandler);
    document.addEventListener("keydown", keyHandler);
    setupReveal();

    return () => {
      document.removeEventListener("click", clickHandler);
      document.removeEventListener("keydown", keyHandler);
    };
  }, []);

  return null;
}
