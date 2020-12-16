puzzle_input = open(
    './2020/day16/puzzle_input.txt').read().strip().split('\n\n')

rules, my, nearby = puzzle_input


nearby = [[int(y) for y in x.split(',')] for x in nearby.split('\n')[1:]]

rules = [pair.split(': ')[1].split(' or ') for pair in rules.split('\n')]


ans = 0

for xs in nearby:
    for x in xs:
        valid = False
        for r in rules:
            s1, f1 = r[0].split('-')
            s2, f2 = r[1].split('-')
            if (int(s1) <= x <= int(f1) or int(s2) <= x <= int(f2)):
                valid = True

        if not valid:
            ans += x


print(ans)
