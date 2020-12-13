file_input = open('./2020/day12/input.txt').read().strip().split('\n')


wx = 10
wy = 1
x = 0
y = 0

for inp in file_input:
    action = inp[0:1]
    value = int(inp[1:])

    if (action == 'R' or action == 'L'):
        rotate = value / 90
        if action == 'L':
            rotate = 4 - rotate
        if rotate == 1:
            temp = wx
            wx = wy
            wy = -temp
        elif rotate == 2:
            wx = -wx
            wy = -wy
        elif rotate == 3:
            temp = wy
            wy = wx
            wx = -temp

    if action == 'F':
        x = x + wx * value
        y = y + wy * value

    else:
        if action == 'N':
            wy += value
        elif action == "S":
            wy -= value
        elif action == "W":
            wx -= value
        elif action == "E":
            wx += value


result = abs(x) + abs(y)

print(result)
