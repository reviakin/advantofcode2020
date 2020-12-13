file_input = open('./2020/day12/input.txt').read().strip().split('\n')

# print(file_input)
facing = 90
x = 0
y = 0

for inp in file_input:
    action = inp[0:1]
    value = int(inp[1:])

    # print(action, value)

    if (action == 'R' or action == 'L'):
        if action == "R":
            facing += value
        else:
            facing -= value
            if facing < 0:
                facing = 360 - (-facing)
        facing %= 360

    if action == 'F':
        if facing == 0:
            y = y + value
        elif facing == 90:
            x = x + value
        elif facing == 180:
            y = y - value
        else:
            x = x - value
    else:
        if action == 'N':
            y = y + value
        elif action == "S":
            y = y - value
        elif action == "W":
            x = x - value
        elif action == "E":
            x = x + value


result = abs(x) + abs(y)

print(result)
