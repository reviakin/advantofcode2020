puzzle_input = open(
    './2020/day16/puzzle_input.txt').read().strip().split('\n\n')

# rules, my, nearby = puzzle_input
rules = {}
nearby = []
my = [int(x) for x in puzzle_input[1].split('\n')[1:][0].split(',')]

guess = {}
cs = []
targets = []
ans = 1


for r in puzzle_input[0].split('\n'):
    k, v = r.split(': ')
    v = [[int(a) for a in x.split('-')] for x in v.split(' or ')]
    rules[k] = v
    guess[k] = set({})

for xs in [[int(y) for y in x.split(',')] for x in puzzle_input[2].split('\n')[1:]]:
    xs_valid = True

    for x in xs:
        x_valid = False
        for r in rules.values():
            s1, f1 = r[0]
            s2, f2 = r[1]
            if (s1 <= x <= f1 or s2 <= x <= f2):
                x_valid = True
                break
        if not x_valid:
            xs_valid = False
            break

    if xs_valid:
        nearby.append(xs)


nearby.extend([my])


for l in range(len(rules.keys())):
    cs.append([n[l] for n in nearby])

for i in range(len(cs)):
    c = cs[i]
    for n, r in rules.items():
        valid_c = True
        for x in c:
            s1, f1 = r[0]
            s2, f2 = r[1]
            if not (s1 <= x <= f1 or s2 <= x <= f2):
                valid_c = False
                break
        if valid_c:
            guess[n].add(i)


while True:
    g_n = [n for n in guess.keys()]
    target = None
    done = True

    for i in range(len(g_n)):
        v = guess[g_n[i]]
        if len(v) == 1:
            for y in v:
                for n, g in guess.items():
                    if not len(g) == 1:
                        done = False

                    if n == g_n[i]:
                        continue
                    if y in guess[n]:
                        guess[n].remove(y)
        else:
            done = False
    if done:
        break


for n, g in guess.items():
    if n.startswith('departure'):
        for x in g:
            targets.append(x)


for t in targets:
    ans *= my[t]

print(ans)
