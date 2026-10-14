import urllib.request
import urllib.parse
import re
import os

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

def search_pexels(query):
    search_url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote('site:pexels.com/photo/ indian ' + query)}"
    req = urllib.request.Request(search_url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            # Extract pexels photo IDs like 7414284
            ids = re.findall(r'pexels\.com/photo/[a-zA-Z0-9\-_]+-(\d+)', html)
            return list(dict.fromkeys(ids))
    except Exception as e:
        print(f"Error searching {query}: {e}")
        return []

queries = {
    'business': 'business meeting office consulting',
    'family': 'family new house home loan smiling',
    'advisor': 'financial advisor consultant banker',
    'handshake': 'loan agreement handshake entrepreneur',
}

results = {}
for k, q in queries.items():
    found = search_pexels(q)
    print(f"{k}: {found[:5]}")
    results[k] = found

print("Done searching")
