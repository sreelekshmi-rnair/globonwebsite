import urllib.request
import json
import re
import os

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
}

# Search Wikipedia / Wikimedia for corporate boardroom meeting
# Querying Wikimedia Commons
queries = [
    'board of directors meeting conference',
    'executive committee meeting table',
    'business executives conference table',
    'corporate meeting room discussion'
]

results = []
for q in queries:
    url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch={urllib.parse.quote(q)}&gsrnamespace=6&gsrlimit=20&prop=imageinfo&iiprop=url|size&format=json"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as r:
            data = json.loads(r.read().decode())
            pages = data.get('query', {}).get('pages', {})
            for pid, p in pages.items():
                title = p.get('title', '')
                ii = p.get('imageinfo', [{}])[0]
                img_url = ii.get('url', '')
                w = ii.get('width', 0)
                h = ii.get('height', 0)
                if w >= 1920 and w > h * 1.3:
                    results.append((title, w, h, img_url))
    except Exception as e:
        print(f"Error {q}:", e)

print(f"Found {len(results)} landscape images:")
for t, w, h, u in results[:15]:
    print(f"{t[:40]} | {w}x{h} | {u}")
