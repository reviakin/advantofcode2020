file_input = open('./2020/day14/input.txt').read().strip().split('\n')

mem = {}

for command in file_input:
    if command.startswith('mask'):
        mask = command.split(' = ')[1]

        mask0 = int(mask.replace("X", '0'), 2)
        maskx = int(mask.replace("1", '0').replace('X', '1'), 2)
    else:
        adress = int(command.split(']')[0][4:])
        value = int(command.split(']')[1].split(' = ')[1])

        submaskx = maskx

        while True:
            possible_adress = (adress & ~maskx) | mask0 | submaskx
            mem[possible_adress] = value
            if submaskx == 0:
                break
            submaskx = (submaskx - 1) & maskx


ans = 0
for v in mem.values():
    ans += v

print(ans)
