"""Build the collective charter: web page and print HTML from charter.md.

    python3 whitepaper/build.py

Writes whitepaper/index.html (the web page) and whitepaper/print.html (the
source for the PDF, rendered with a headless browser). Needs the `markdown`
package.
"""
from pathlib import Path

import markdown

HERE = Path(__file__).resolve().parent
PDF_NAME = "evidence-first-research-collective.pdf"

src = (HERE / "charter.md").read_text()
body = markdown.markdown(src, extensions=["tables", "toc", "sane_lists"])

# Pull the title block (h1, subtitle, byline, motto) out of the body so it can be styled as a cover.
head, rest = body.split("<hr />", 1)
toc_items = [line for line in src.splitlines() if line.startswith("## ")]
toc = "".join(
    f'<li><a href="#{markdown.extensions.toc.slugify(t[3:], "-")}">{t[3:]}</a></li>' for t in toc_items
)

CSS = """
:root { color-scheme: light; --ink: #0b0b0b; --ink2: #3f3e3a; --muted: #77766f; --line: #e2e1dc; --soft: #f3f3f0; --brand: #1f2a44; --accent: #2a78d6; --bg: #fcfcfb; }
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); font: 16.5px/1.7 ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif; }
a { color: var(--accent); }
.cover h1 { font-size: 40px; line-height: 1.1; letter-spacing: -0.03em; margin: 0 0 10px; }
.cover p { margin: 0 0 8px; color: var(--ink2); }
.cover p strong { font-size: 19px; font-weight: 600; color: var(--ink2); }
.cover blockquote, .motto { margin: 22px 0 0; padding: 16px 20px; border-radius: 12px; background: var(--brand); color: #fff; font-size: 20px; font-weight: 700; }
.cover blockquote p { margin: 0; color: #fff; }
h2 { margin: 40px 0 10px; padding-top: 6px; font-size: 24px; letter-spacing: -0.015em; border-top: 1px solid var(--line); padding-top: 24px; }
h3 { margin: 24px 0 6px; font-size: 18px; }
p, li { color: var(--ink2); }
ul, ol { padding-left: 22px; }
li { margin-bottom: 6px; }
strong { color: var(--ink); }
table { width: 100%; border-collapse: collapse; margin: 14px 0 18px; font-size: 14.5px; }
th, td { text-align: left; padding: 9px 10px; border-bottom: 1px solid var(--line); vertical-align: top; }
th { color: var(--muted); font-weight: 650; font-size: 13px; background: var(--soft); }
hr { border: 0; border-top: 1px solid var(--line); margin: 32px 0; }
em { color: var(--muted); }
.toc { margin: 26px 0 0; padding: 16px 20px; border: 1px solid var(--line); border-radius: 12px; background: #fff; }
.toc b { display: block; margin-bottom: 6px; font-size: 13px; text-transform: uppercase; letter-spacing: .08em; color: var(--muted); }
.toc ol { margin: 0; padding: 0; list-style: none; columns: 2; column-gap: 28px; font-size: 14.5px; }
.toc li { margin-bottom: 3px; break-inside: avoid; }
.toc a { color: var(--ink2); text-decoration: none; }
"""

WEB_CSS = CSS + """
@media (prefers-color-scheme: dark) {
  :root { color-scheme: dark; --ink: #fff; --ink2: #d0cfc6; --muted: #9a998f; --line: #34332f; --soft: #242422; --brand: #2b3a5e; --accent: #6aa8f0; --bg: #121211; }
  .toc { background: #1a1a19; }
}
.topbar { position: sticky; top: 0; z-index: 5; background: color-mix(in srgb, var(--bg) 90%, transparent); backdrop-filter: blur(10px); border-bottom: 1px solid var(--line); }
.topbar div { width: min(820px, 100%); margin: 0 auto; padding: 0 16px; height: 54px; display: flex; align-items: center; justify-content: space-between; gap: 12px; font-size: 14px; }
.topbar a { text-decoration: none; }
.button { display: inline-flex; align-items: center; min-height: 36px; padding: 0 14px; border-radius: 9px; background: var(--brand); color: #fff !important; font-weight: 650; white-space: nowrap; }
main { width: min(820px, 100%); margin: 0 auto; padding: 44px 16px 70px; }
.toc ol { columns: 2; }
@media (max-width: 600px) { .cover h1 { font-size: 31px; } .toc ol { columns: 1; } table { font-size: 13px; } th, td { padding: 7px 6px; } }
"""

PRINT_CSS = CSS + """
@page { size: A4; margin: 20mm 18mm 20mm 18mm; }
body { background: #fff; font-size: 11pt; line-height: 1.6; }
main { padding: 0; }
.cover { min-height: 230mm; display: flex; flex-direction: column; justify-content: center; }
.cover h1 { font-size: 34pt; }
.cover-end { page-break-after: always; }
h2 { page-break-after: avoid; font-size: 17pt; margin-top: 26px; }
h3 { page-break-after: avoid; }
table, tr, li { page-break-inside: avoid; }
.toc { margin-top: 30px; }
"""

web = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>The Evidence-First Research Collective — charter</title>
<meta name="description" content="A charter for working together: shared work, clear ownership and public recognition. How the research collective around Koushik Das's projects works, credits contributors and protects their intellectual property.">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%231f2a44'/%3E%3Ctext x='16' y='21.5' font-family='Arial' font-size='14' font-weight='700' text-anchor='middle' fill='white'%3EKD%3C/text%3E%3C/svg%3E">
<style>{WEB_CSS}</style>
</head>
<body>
<header class="topbar"><div><a href="../#about">← Koushik Das</a><a class="button" href="{PDF_NAME}" download>Download PDF</a></div></header>
<main>
<section class="cover">{head}</section>
<nav class="toc" aria-label="Contents"><b>Contents</b><ol>{toc}</ol></nav>
{rest}
</main>
</body>
</html>
"""

printable = f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>The Evidence-First Research Collective</title><style>{PRINT_CSS}</style></head>
<body><main>
<section class="cover">{head}<nav class="toc"><b>Contents</b><ol>{toc}</ol></nav></section>
<div class="cover-end"></div>
{rest}
</main></body></html>
"""

(HERE / "index.html").write_text(web)
(HERE / "print.html").write_text(printable)
print("wrote index.html and print.html")
