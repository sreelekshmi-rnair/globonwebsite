import urllib.request
import urllib.parse
import re
import os

query = 'site:pexels.com/photo boardroom meeting business suits'
url = 'https://html.duckduckgo.com/html/?q=' + urllib.parse.quote(query)
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req, timeout=10) as r:
        html = r.read().decode('utf-8', errors='ignore')
        matches = re.findall(r'pexels\.com/photo/[a-zA-Z0-9\-_]+-(\d+)/', html)
        if not matches:
            matches = re.findall(r'/photo/(\d+)', html)
        matches = list(dict.fromkeys(matches))
        print('Found Pexels IDs:', matches)
        
        out_dir = r'C:\Users\LEKSHMI\Downloads\globon\saylo-package\saylo\public\images\page-title\ddg_pexels'
        os.makedirs(out_dir, exist_ok=True)
        
        for pid in matches[:8]:
            img_url = f'https://images.pexels.com/photos/{pid}/pexels-photo-{pid}.jpeg?auto=compress&cs=tinysrgb&w=1920'
            target = os.path.join(out_dir, f'{pid}.jpg')
            try:
                img_req = urllib.request.Request(img_url, headers=headers)
                with urllib.request.urlopen(img_req, timeout=10) as ir, open(target, 'wb') as f:
                    f.write(ir.read())
                print(f'Saved {pid}: {os.path.getsize(target)} bytes')
            except Exception as ie:
                print(f'Error {pid}: {ie}')
except Exception as e:
    print('Error:', e)
