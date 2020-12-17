from copy import deepcopy

puzzle_input = open(
    './2020/day17/puzzle_input.txt'
    # './2020/day17/test.txt'
).read().strip().split('\n\n')[0].split('\n')

CUBES = set()

for r, l in enumerate(puzzle_input):
    for c, v in enumerate(l):
        if v == '#':
            CUBES.add((r, c, 0, 0))


for _ in range(6):
    N_CUBES = set()

    print(len(CUBES))

    for x in range(-15, 15):
        for y in range(-15, 15):
            for z in range(-7, 7):
                for w in range(-7, 7):
                    nbr = 0

                    for dx in [-1, 0, 1]:
                        for dy in [-1, 0, 1]:
                            for dz in [-1, 0, 1]:
                                for dw in [-1, 0, 1]:

                                    if dx != 0 or dy != 0 or dz != 0 or dw != 0:
                                        if (x+dx, y+dy, z+dz, w+dw) in CUBES:
                                            nbr += 1

                    if (x, y, z, w) not in CUBES and nbr == 3:
                        N_CUBES.add((x, y, z, w))

                    if (x, y, z, w) in CUBES and nbr in [2, 3]:
                        N_CUBES.add((x, y, z, w))

    CUBES = N_CUBES


print(len(CUBES))
