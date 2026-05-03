from pathlib import Path
p = Path('c:/Users/zorom/Documents/Codex/2026-05-03/doctype-html-html-lang-ar-dir/index.html')
text = p.read_text(encoding='utf-8')
needle = '      <div class="bg-white rounded-xl p-6 border border-slate-200">'
idx = text.find(needle)
print('idx', idx)
print(repr(text[idx:idx+200]))
