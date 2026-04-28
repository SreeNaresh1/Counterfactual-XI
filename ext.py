import json
d = json.load(open('ml-dl.json', encoding='utf-8'))
out = open('out.py', 'w', encoding='utf-8')
for c in d['cells']:
    if c['cell_type'] == 'code':
        out.write("".join(c['source']))
        out.write("\n\n")
out.close()
