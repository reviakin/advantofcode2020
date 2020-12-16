puzzle_input = [1, 12, 0, 20, 8, 16]

mem = {}
for o, x in enumerate(puzzle_input, 1):
    mem[x] = o


i = 1
# part 1
while i <= 2020:
    # part 2
    # while i <= 30000000:
    i += 1

    l = len(puzzle_input)
    x = puzzle_input[l-1]

    if x in mem:
        puzzle_input.append(l - mem[x])
        mem[x] = l
    else:
        mem[x] = l
        puzzle_input.append(0)


print(puzzle_input[-7])
