#!/usr/bin/env python3
"""Release bookkeeping. usage: release.py <repo> <spec.json>
spec: { old, version, date, title, items:[[type,text]], summary, row, section_title, section:[lines] }"""
import sys, json, re
repo, spec = sys.argv[1], json.load(open(sys.argv[2]))
old, ver = spec['old'], spec['version']
def rw(p, f):
    s = open(repo + '/' + p, encoding='utf8').read(); t = f(s)
    assert t != s, 'no change in ' + p
    open(repo + '/' + p, 'w', encoding='utf8').write(t)
js = lambda x: "'" + x.replace('\\', '\\\\').replace("'", "\\'") + "'"
entry = "  {\n    version: '%s', date: '%s', title: %s,\n    items: [\n%s\n    ]\n  },\n" % (
    ver, spec['date'], js(spec['title']), ',\n'.join("      { type: '%s', text: %s }" % (t, js(x)) for t, x in spec['items']))
rw('data/changelog.js', lambda s: s.replace('window.APP_CHANGELOG = [\n', 'window.APP_CHANGELOG = [\n' + entry, 1))
rw('data/app-meta.js', lambda s: s.replace("version: '%s'" % old, "version: '%s'" % ver, 1))
rw('sw.js', lambda s: s.replace("PREFIX + '%s'" % old, "PREFIX + '%s'" % ver, 1))
def readme(s):
    s = s.replace('Version **%s** (' % old, 'Version **%s** (%s): %s %s (' % (ver, spec['date'], spec['summary'], old), 1)
    i = s.index('| **You** |')
    s = s[:i] + spec['row'] + '\n' + s[i:]
    j = s.index('## Version %s:' % old)
    s = s[:j] + '## Version %s: %s\n\n' % (ver, spec['section_title']) + '\n'.join(spec['section']) + '\n\n' + s[j:]
    return s
rw('README.md', readme)
print('released', ver)
