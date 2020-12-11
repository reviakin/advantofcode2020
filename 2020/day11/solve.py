
from copy import deepcopy

file_input = open('./2020/day11/input.txt').read().strip().split('\n')

L = [list(l.strip()) for l in file_input]

R = len(L)
C = len(L[0])

while True:
    change = False
    newL = deepcopy(L)

    for r in range(R):
        for c in range(C):
            nocc = 0
            for dr in [-1, 0, 1]:
                for dc in [-1, 0, 1]:
                    if not (dr == 0 and dc == 0):
                        rr = r + dr
                        cc = c + dc
                        if 0 <= rr < R and 0 <= cc < C and L[rr][cc] == '#':
                            nocc += 1

            if L[r][c] == 'L':
                if nocc == 0:
                    newL[r][c] = "#"
                    change = True
            if L[r][c] == "#" and nocc >= 4:
                newL[r][c] = "L"
                change = True
    if not change:
        break

    L = deepcopy(newL)


ans = 0
for r in range(R):
    for c in range(C):
        if L[r][c] == '#':
            ans += 1

print(ans)
