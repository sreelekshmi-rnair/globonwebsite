import urllib.request
import re
import os

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

urls_to_try = [
    'https://www.pexels.com/search/boardroom%20executives/',
    'https://www.pexels.com/search/corporate%20boardroom/',
    'https://www.pexels.com/search/business%20meeting%20suits/',
]

found_ids = []
for u in urls_to_try:
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as r:
            html = r.read().decode('utf-8', errors='ignore')
            pids = re.findall(r'data-photo-id="(\d+)"', html)
            if not pids:
                pids = re.findall(r'/photo/[^/\"]*?-(\d+)/', html)
            found_ids.extend(pids)
    except Exception as e:
        print('Error fetching:', u, e)

found_ids = list(dict.fromkeys(found_ids))
print(f'Total found IDs: {len(found_ids)}')
print(found_ids[:20])

out_dir = r'C:\Users\LEKSHMI\Downloads\globon\saylo-package\saylo\public\images\page-title\pexels_execs'
os.makedirs(out_dir, exist_ok=True)

for pid in found_ids[:10]:
    url = f'https://images.pexels.com/photos/{pid}/pexels-photo-{pid}.jpeg?auto=compress&cs=tinysrgb&w=1920'
    target = os.path.join(out_dir, f'exec_{pid}.jpg')
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as r, open(target, 'wb') as f:
            f.write(r.read())
        print(f'Saved {pid}: {os.path.getsize(target)} bytes')
    except Exception as e:
        print(f'Error {pid}: {e}')
